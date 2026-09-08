const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const { brotliCompressSync, gzipSync } = require('node:zlib');
const app = express();
const publicDir = path.join(__dirname, 'dist');
if (!fs.existsSync(publicDir)) throw new Error('Run npm run build before starting the server.');
const production = process.env.NODE_ENV === 'production';
const documents = new Map();

app.disable('x-powered-by');
const pageNames = new Set(fs.readdirSync(publicDir).filter(name => name.endsWith('.html')));
app.use((req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) return next();
    if (req.path === '/404') res.status(404);
    const page = req.path.slice(1);
    if (!pageNames.has(page)) return next();
    const destination = page === 'index.html' ? '/' : '/' + page.slice(0, -5);
    const queryIndex = req.originalUrl.indexOf('?');
    res.redirect(308, destination + (queryIndex < 0 ? '' : req.originalUrl.slice(queryIndex)));
});
if (production) {
    const cacheTextFiles = (directory, prefix = '') => {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            const relative = prefix + '/' + entry.name;
            if (entry.isDirectory()) {
                if (entry.name === 'build') cacheTextFiles(path.join(directory, entry.name), relative);
                continue;
            }
            if (!/\.(html|css|js)$/.test(entry.name)) continue;
            const content = fs.readFileSync(path.join(directory, entry.name));
            documents.set(relative, { identity: content, br: brotliCompressSync(content), gzip: gzipSync(content) });
        }
    };
    cacheTextFiles(publicDir);
    app.use((req, res, next) => {
        if (!['GET', 'HEAD'].includes(req.method) || req.headers.range) return next();
        const name = req.path === '/' ? '/index.html' :
            (pageNames.has(req.path.slice(1) + '.html') ? req.path + '.html' : req.path);
        if (name === '/404.html') res.status(404);
        const document = documents.get(name);
        if (!document) return next();
        res.vary('Accept-Encoding');
        const encoding = req.acceptsEncodings('br', 'gzip', 'identity');
        if (!encoding) return res.sendStatus(406);
        if (encoding !== 'identity') res.set('Content-Encoding', encoding);
        res.set('Cache-Control', name.startsWith('/build/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate');
        res.type(path.extname(name));
        res.send(document[encoding]);
    });
}
app.get('/health', (req, res) => {
    res.set('Cache-Control', 'no-store').sendStatus(204);
});
app.use(express.static(publicDir, {
    extensions: ['html'],
    maxAge: production ? '1h' : 0,
    setHeaders(res, file) {
        if (production && file.startsWith(path.join(publicDir, 'build') + path.sep)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            return;
        }
        if (/\.(html|css|js)$/.test(file)) res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
}));
app.use((req, res) => { res.status(404).sendFile(path.join(publicDir, '404.html')); });
if (require.main === module) {
    const port = process.env.PORT || 3000;
    const server = app.listen(port, '127.0.0.1', () => console.log(`Lumbao React is running at http://localhost:${port}`));
    server.on('error', error => { console.error(error.message); process.exitCode = 1; });
}
module.exports = app;
