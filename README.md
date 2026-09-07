# Lumbao Architects

A React website with 13 prerendered pages, the existing design, and clean URLs. Pages are rendered to HTML at build time and hydrated in the browser. Each page loads its own entry bundle and a shared React/component bundle. Navigation uses normal links, so direct visits, refresh, history, and search indexing work without a client-side router.

## Run locally

Use Node.js 18.15 or newer and run `npm ci` once.

- `npm run dev`: rebuild and refresh the browser when source files change (port 3000).
- `PORT=3012 npm run dev`: choose another port if 3000 is occupied.
- `npm start`: build and serve the website.
- `npm run build`: create the deployable `dist` folder.
- `npm run start:production`: serve an existing build with HTML compression.
- `npm test`: build and check all routes, metadata, assets, redirects, compression, and video ranges.

## Edit the site

- `src/pages/*.jsx`: page content and layout.
- `src/components.jsx`: shared header, counters, project filtering, lightbox, forms, and job accordions.
- `src/Footer.jsx`: shared footer.
- `src/App.jsx`: shared context and reveal effects.
- `src/style.css`: the existing responsive design.
- `src/routes.json`: page URLs, titles, descriptions, and body classes.
- `public/assets/`: portraits, project photos, video, and other assets.

Do not edit `dist` or `.build`; they are regenerated. The old `public/*.html`, `public/site.js`, and `public/style.css` are replaced by React source.

## Deployment

The existing Vercel project and domain can be retained. `vercel.json` builds the site with `npm run build`, publishes `dist`, and retains `cleanUrls`. Hashed JavaScript is cached for one year; existing named media assets use a shorter cache. No domain or account changes are required by this migration.

The contact form retains the existing mailto behavior. Job listings retain their preview-only notice. Reduced-motion preferences bypass counters and reveal animations and make accordion changes immediate.
