const {test,after}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');
process.env.NODE_ENV='production';
const app=require('../index.js');const routes=require('../src/routes.json');
let server,base;
const ready=new Promise((resolve,reject)=>{server=app.listen(0,'127.0.0.1',()=>{base=`http://127.0.0.1:${server.address().port}`;server.unref();resolve();});server.on('error',reject);});
after(()=>{server.close();server.closeAllConnections();});
test('all routes are prerendered with original metadata and valid local resources',async()=>{
 await ready;
 for(const page of routes){const response=await fetch(base+page.route);assert.equal(response.status,page.route==='/404'?404:200,page.route);const html=await response.text();assert.ok(html.includes(`<title>${page.title}</title>`));assert.match(html,/<h1[ >]/);assert.match(html,/id="root"/);assert.match(html,/type="module"/);assert.ok(!html.includes('/site.js'));
  for(const match of html.matchAll(/(?:src|poster|href)="(\/[^"?#]*)"/g)){const url=decodeURIComponent(match[1]);if(url==='/')continue;const local=path.join(__dirname,'../dist',url);assert.ok(fs.existsSync(local)||fs.existsSync(local+'.html'),`${page.route}: missing ${url}`);}
 }
});
test('old html links redirect to clean URLs, preserving query strings',async()=>{await ready;for(const p of routes){const old=p.route==='/'?'/index.html':p.route+'.html';const r=await fetch(base+old+'?ref=old',{redirect:'manual'});assert.equal(r.status,308);assert.equal(r.headers.get('location'),p.route+'?ref=old');}});
test('compression and missing routes work',async()=>{await ready;for(const encoding of ['br','gzip']){const r=await fetch(base+'/about',{headers:{'Accept-Encoding':encoding}});assert.equal(r.headers.get('content-encoding'),encoding);assert.match(await r.text(),/John Paul Efe/);}assert.equal((await fetch(base+'/does-not-exist')).status,404);});
test('media range requests remain available',async()=>{await ready;const r=await fetch(base+'/assets/Firefly%20Cinematic%20Orbit%20Walkthrough_1.mp4',{headers:{Range:'bytes=0-99'}});assert.equal(r.status,206);assert.equal((await r.arrayBuffer()).byteLength,100);});

test('hashed React bundles are compressed and immutable in production',async()=>{await ready;const html=await (await fetch(base)).text();const script=html.match(/<script type="module" src="([^"]+)"/)[1];const r=await fetch(base+script,{headers:{'Accept-Encoding':'br'}});assert.equal(r.status,200);assert.equal(r.headers.get('content-encoding'),'br');assert.match(r.headers.get('cache-control'),/immutable/);await r.text();});

test('launch metadata, discovery files and custom error page',async()=>{
 await ready;
 const html=await (await fetch(base+'/services')).text();
 assert.match(html,/property="og:image"/);assert.match(html,/rel="canonical"/);assert.match(html,/rel="icon"/);
 const sitemap=await (await fetch(base+'/sitemap.xml')).text();assert.match(sitemap,/<loc>https:\/\/www.lumbao.com\/privacy<\/loc>/);assert.ok(!sitemap.includes('/404'));
 assert.match(await (await fetch(base+'/robots.txt')).text(),/Sitemap:/);
 const missing=await fetch(base+'/missing/deep/page');assert.equal(missing.status,404);assert.match(await missing.text(),/A different/);
});

test('llms.txt serves Markdown with a heading and valid site links',async()=>{
 await ready;
 const response=await fetch(base+'/llms.txt');
 assert.equal(response.status,200);
 assert.match(response.headers.get('content-type'),/^text\/plain/);
 const text=await response.text();
 assert.match(text,/^# Lumbao Architects\s*$/m);
 assert.ok(!text.includes('<!doctype html>'));
 const links=[...text.matchAll(/\]\((https?:\/\/[^)]+)\)/g)];
 assert.equal(links.length,routes.filter(page=>page.route!=='/404').length);
 for(const [,url] of links){const pathname=new URL(url).pathname;assert.ok(routes.some(page=>page.route===pathname),url);}
});

test('homepage uses local fonts and optimized media',async()=>{
 await ready;
 const html=await (await fetch(base+'/')).text();
 assert.ok(!html.includes('fonts.googleapis.com'));
 assert.match(html,/hero-poster-v1\.avif/);
 const css=await (await fetch(base+'/style.css')).text();
 assert.ok(!css.includes('@import'));assert.ok(!css.includes('fonts.gstatic.com'));
 for(const [,url] of css.matchAll(/url\(["']?(\/assets\/fonts\/[^)"']+)/g))assert.ok(fs.existsSync(path.join(__dirname,'../dist',url)),url);
 for(const file of ['hero-optimized-v1.mp4','hero-mobile-v1.mp4']){
 const r=await fetch(base+'/assets/'+file,{headers:{Range:'bytes=0-99'}});assert.equal(r.status,206);assert.equal((await r.arrayBuffer()).byteLength,100);
 }
 for(const [,set] of html.matchAll(/srcSet="([^"]+)"/gi))for(const candidate of set.split(',')){const url=candidate.trim().split(/\s+/)[0];assert.ok(fs.existsSync(path.join(__dirname,'../dist',url)),url);}
});
