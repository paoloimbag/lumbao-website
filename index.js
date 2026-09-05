const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const { brotliCompressSync, gzipSync } = require('node:zlib');
const app = express();
const publicDir = path.join(__dirname, 'public');
const production = process.env.NODE_ENV === 'production';
const documents = new Map();

app.disable('x-powered-by');
const pageNames = new Set(fs.readdirSync(publicDir).filter(name => name.endsWith('.html')));
app.use((req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) return next();
    const page = req.path.slice(1);
    if (!pageNames.has(page)) return next();
    const destination = page === 'index.html' ? '/' : '/' + page.slice(0, -5);
    const queryIndex = req.originalUrl.indexOf('?');
    res.redirect(308, destination + (queryIndex < 0 ? '' : req.originalUrl.slice(queryIndex)));
});
if (production) {
    for (const name of fs.readdirSync(publicDir)) {
        if (!/\.(html|css|js)$/.test(name)) continue;
        const content = fs.readFileSync(path.join(publicDir, name));
        documents.set(`/${name}`, { identity: content, br: brotliCompressSync(content), gzip: gzipSync(content) });
    }
    app.use((req, res, next) => {
        if (!['GET', 'HEAD'].includes(req.method) || req.headers.range) return next();
        const name = req.path === '/' ? '/index.html' :
            (pageNames.has(req.path.slice(1) + '.html') ? req.path + '.html' : req.path);
        const document = documents.get(name);
        if (!document) return next();
        res.vary('Accept-Encoding');
        const encoding = req.acceptsEncodings('br', 'gzip', 'identity');
        if (!encoding) return res.sendStatus(406);
        if (encoding !== 'identity') res.set('Content-Encoding', encoding);
        res.set('Cache-Control', 'public, max-age=0, must-revalidate');
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
        if (/\.(html|css|js)$/.test(file)) res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
}));
if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Lumbao is running at http://localhost:${port}`));
}
module.exports = app;
