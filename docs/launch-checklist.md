# Launch readiness — September 7, 2026

Implemented locally:
- Website privacy and terms pages, linked from the footer. These describe current website behavior; they are drafts for studio review before publication. Confirm the studio's correspondence retention, service providers, privacy contact and applicable business practices before treating this as a complete organization-wide privacy policy. Reference: [Canadian privacy regulator guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_consent/).
- Cookie information notice with persistent dismissal and footer reopening. No optional trackers are installed, so this is an acknowledgment notice, not a pretend consent control. Adding tracking requires actual consent gating before scripts load.
- Canonical links, Open Graph metadata, social preview PNG, favicon SVG/PNG and Apple touch icon.
- Generated sitemap and robots.txt. SITE_URL defaults to https://www.lumbao.com; configure it if the production domain differs. The custom 404 is excluded from the sitemap and marked noindex.
- Branded 404 response for unknown routes, using HTTP 404.
- Five oversized single-frame GIFs replaced with WebP: 37,363,696 bytes to 725,412 bytes. Original files retained; pages reference the optimized files.
- Team portrait descriptions added. Remaining empty alt attributes are decorative brand images next to accessible brand labels.
- Improved muted footer/menu-label contrast and image overlay behind Services CTA text.
- Fixed Case Studies grid overflow at 320px.

Verification:
- Six automated tests pass: all route responses, resources, metadata, legacy redirects, compression, range requests and custom 404.
- Browser spot checks at 390px across main pages, legal pages and 404; at 320px across home, case studies and all five project pages. No horizontal overflow after the Case Studies fix.
- Cookie notice dismisses, stays dismissed after reload, and reopens through the footer.
- Solid-background text contrast checked on representative page types. Image/video backgrounds and all interactive states still require a fuller accessibility audit; these checks do not certify WCAG compliance.
- Instagram, Maps and the original project-gallery link returned HTTP 200. Five LinkedIn URLs returned HTTP 999 (automated checks blocked); manually verify these before launch.
- Frontend and built-output credential-pattern scan found no matching keys or private keys. No dotfiles or package manifest were in the generated output. This is a limited scan, not a security certification.
- Local production-mode HTML median response times (five warmed requests): home 1.5ms, about 1.6ms, services 0.9ms, gallery 0.7ms. All route JavaScript combined: 74,411 bytes Brotli compressed. These are local server measurements, not end-user page-load times.

Still to verify:
- Production Lighthouse/Core Web Vitals on a deployed build, including real mobile network and hero-video cost. No production performance score is claimed.
- Studio review of legal text and deployment domain.
- Blocked LinkedIn profiles and broader accessibility/device coverage.

Explicitly deferred by the user: forced HTTPS and spam protection. Neither was implemented in this pass.
