import {spawn} from 'node:child_process';
import {readdirSync,statSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const clients=new Set();
function build(){return new Promise((resolve,reject)=>{const child=spawn(process.execPath,['scripts/build.mjs'],{cwd:root,stdio:'inherit',env:{...process.env,LUMBAO_DEV:'1'}});child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(Error('Build failed')));});}
await build();let app=require('../index.js');
const express=require('express');const dev=express();
dev.get('/__dev/events',(req,res)=>{res.set({'Content-Type':'text/event-stream','Cache-Control':'no-cache','Connection':'keep-alive'});res.flushHeaders();clients.add(res);req.on('close',()=>clients.delete(res));});
dev.get('/__dev/client.js',(_,res)=>res.type('js').send("new EventSource('/__dev/events').addEventListener('message',()=>location.reload());"));
dev.use((req,res)=>app(req,res));
const port=process.env.PORT||3000;const server=dev.listen(port,'127.0.0.1',()=>console.log(`React development preview: http://localhost:${port}`));
server.on('error',e=>{console.error(e.message);process.exit(1);});
let busy=false,pending=false;
async function rebuild(){if(busy){pending=true;return;}busy=true;try{await build();delete require.cache[require.resolve('../index.js')];app=require('../index.js');clients.forEach(res=>res.write('data: reload\n\n'));}catch(e){console.error(e.message);}finally{busy=false;if(pending){pending=false;rebuild();}}}
// Poll source metadata instead of consuming OS filesystem watcher handles.
function fingerprint(dir){return readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).map(e=>{const file=path.join(dir,e.name);return e.isDirectory()?fingerprint(file):file+':'+statSync(file).mtimeMs;}).join('|');}
const sources=['src','public','scripts'].map(name=>path.join(root,name));
let previous=sources.map(fingerprint).join('|');
const poll=setInterval(()=>{try{const current=sources.map(fingerprint).join('|');if(current!==previous){previous=current;rebuild();}}catch(e){console.error(e.message);}},1000);
function close(){clearInterval(poll);clients.forEach(r=>r.end());server.close();process.exit();}
process.on('SIGINT',close);process.on('SIGTERM',close);
