import {build,transform} from 'esbuild';
import {readFile,writeFile,mkdir,rm,cp} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const routes=JSON.parse(await readFile(path.join(root,'src/routes.json'),'utf8'));
const dist=path.join(root,'dist'), scratch=path.join(root,'.build');
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});await mkdir(scratch,{recursive:true});
await cp(path.join(root,'public/assets'),path.join(dist,'assets'),{recursive:true});
const styles=await readFile(path.join(root,'src/fonts.css'),'utf8')+await readFile(path.join(root,'src/style.css'),'utf8');
await writeFile(path.join(dist,'style.css'),(await transform(styles,{loader:'css',minify:true})).code);
const entries={};
for(const route of routes){
 const key=route.route==='/'?'home':route.route.slice(1);
 const entry=path.join(scratch,key+'.jsx');
 await writeFile(entry,`import React from 'react';import {hydrateRoot} from 'react-dom/client';import App from '../src/App.jsx';import Page from '../src/pages/${route.name}.jsx';hydrateRoot(document.getElementById('root'),<App Page={Page}/>);`);
 entries[key]=entry;
}
const result=await build({entryPoints:entries,outdir:path.join(dist,'build'),entryNames:'[name]-[hash]',chunkNames:'shared-[hash]',bundle:true,splitting:true,format:'esm',minify:true,metafile:true,jsx:'automatic',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'}});
const renderEntry=path.join(scratch,'render.jsx');
await writeFile(renderEntry,`import React from 'react';import {renderToString} from 'react-dom/server';import App from '../src/App.jsx';${routes.map(r=>`import ${r.name} from '../src/pages/${r.name}.jsx';`).join('')}const pages={${routes.map(r=>`${JSON.stringify(r.route)}:${r.name}`).join(',')}};export function render(route){return renderToString(<App Page={pages[route]}/>);}`);
await build({entryPoints:[renderEntry],outfile:path.join(scratch,'render.mjs'),platform:'node',format:'esm',bundle:true,packages:'external',jsx:'automatic'});
const {render}=await import(pathToFileURL(path.join(scratch,'render.mjs')).href+`?v=${Date.now()}`);
const siteUrl=(process.env.SITE_URL || 'https://www.lumbao.com').replace(/\/$/,'');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const route of routes){
 const key=route.route==='/'?'home':route.route.slice(1);
 const output=Object.entries(result.metafile.outputs).find(([,info])=>info.entryPoint&&path.resolve(info.entryPoint)===entries[key]);
 if(!output)throw Error('Missing client entry '+key);
 const script='/'+path.relative(dist,path.resolve(output[0])).split(path.sep).join('/');
 const markup=render(route.route);
 const html=`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escape(route.title)}</title><meta name="description" content="${escape(route.description)}"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="icon" href="/assets/favicon-32.png" sizes="32x32"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">${route.route==='/404'?'<meta name="robots" content="noindex">':`<link rel="canonical" href="${escape(siteUrl+route.route)}">`}<meta property="og:type" content="website"><meta property="og:site_name" content="Lumbao Architects"><meta property="og:title" content="${escape(route.title)}"><meta property="og:description" content="${escape(route.description)}"><meta property="og:url" content="${escape(siteUrl+route.route)}"><meta property="og:image" content="${escape(siteUrl)}/assets/social-preview.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Lumbao Architects — Architecture that shapes legacy"><meta name="twitter:card" content="summary_large_image"><link rel="preload" href="/assets/fonts/0d985700e838.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/05103e2a779c.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/e68e3e514e24.woff2" as="font" type="font/woff2" crossorigin>${route.route==='/'?'<link rel="preload" as="image" href="/assets/hero-poster-v1.avif" fetchpriority="high">':''}<link rel="stylesheet" href="/style.css"><noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript></head><body class="${escape(route.bodyClass)}"><div id="root">${markup}</div><script type="module" src="${script}"></script>${process.env.LUMBAO_DEV ? '<script src="/__dev/client.js"></script>' : ''}</body></html>`;
 await writeFile(path.join(dist,(route.route==='/'?'index':key)+'.html'),html);
}
await writeFile(path.join(scratch,'client-metafile.json'),JSON.stringify(result.metafile,null,2));
console.log(`Built ${routes.length} React pages with prerendered HTML and shared, hashed JavaScript.`);

await writeFile(path.join(dist,"robots.txt"),`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(path.join(dist,"sitemap.xml"),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(r=>r.route!=="/404").map(r=>`<url><loc>${escape(siteUrl+r.route)}</loc></url>`).join("")}</urlset>`);

// Generate discovery content from the same routes as the site so links stay current.
const llmsOrigin=process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : siteUrl);
const llmsLinks=routes.filter(page=>page.route!=='/404').map(page=>
 `- [${page.name==='Home' ? 'Home' : page.title.replace(' — Lumbao Architects','')}](${new URL(page.route,llmsOrigin).href}): ${page.description}`
).join('\n');
await writeFile(path.join(dist,'llms.txt'),`# Lumbao Architects

> Lumbao Architects is a multidisciplinary architecture practice working on residential, commercial, industrial and mixed-use spaces.

This website presents the studio, its architectural services and selected projects. Project images may include conceptual renderings. Contact the studio for project-specific information.

## Website pages

${llmsLinks}

## Contact

- [Email the studio](mailto:architects@lumbao.com): Project inquiries and questions.
`);
