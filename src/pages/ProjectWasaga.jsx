import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function ProjectWasaga() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/project-wasaga" />
<main id="main-content">
<section className="project-detail-hero"><a className="project-breadcrumb" href="/projects">{"← All projects"}</a>
<p className="eyebrow">{"Waterfront mixed-use · Wasaga, Ontario"}</p>
<h1>{"Wasaga"}<br /><em>{"Waterfront"}</em></h1>
<div className="project-detail-intro">
<p>{"A four-season community organized around the panoramic experience of the beach and a lively mix of\n                    homes, landscape, and commercial space."}</p>
<dl>
<div>
<dt>{"Area"}</dt>
<dd>{"70,193 sq ft"}</dd>
</div>
<div>
<dt>{"Height"}</dt>
<dd>{"6 storeys"}</dd>
</div>
<div>
<dt>{"Program"}</dt>
<dd>{"Residential · Commercial"}</dd>
</div>
</dl>
</div>
</section>
<figure className="project-lead-image"><img loading="eager" fetchPriority="high" src="/assets/wasaga-01.avif" alt="Wasaga Waterfront development aerial perspective" /></figure>
<section className="project-narrative">
<p className="eyebrow">{"The idea"}</p>
<h2>{"Living with the horizon."}</h2>
<div>
<p>{"The waterfront is the project’s primary orientation. Homes and shared spaces are strategically\n                    planned to extend views toward the beach, while commercial uses create activity and convenience at\n                    ground level."}</p>
<p>{"A contemporary six-storey form fits comfortably within the town skyline. Green space and outdoor\n                    amenities turn a seasonal destination into a community designed to be enjoyed throughout the year.\n                "}</p>
</div>
</section>
<section className="detail-gallery">
<div className="gallery-heading">
<p className="eyebrow">{"Project gallery"}</p>
<p>{"Click any image to view it larger."}</p>
</div>
<div className="detail-gallery-grid wasaga-detail-gallery"><LightboxButton><img loading="lazy" src="/assets/wasaga-01.avif" alt="Wasaga Waterfront overall perspective" /></LightboxButton><LightboxButton><img src="/assets/wasaga-02.avif" alt="Wasaga Waterfront building perspective" loading="lazy" /></LightboxButton><LightboxButton><img src="/assets/wasaga-03.avif" alt="Wasaga Waterfront residential exterior" loading="lazy" /></LightboxButton><LightboxButton><img src="/assets/wasaga-04.avif" alt="Wasaga Waterfront landscape and architecture" loading="lazy" /></LightboxButton><LightboxButton><img src="/assets/wasaga-05.avif" alt="Wasaga Waterfront community view" loading="lazy" /></LightboxButton></div>
</section>
<nav className="project-pagination" aria-label="Project navigation"><a href="/project-springbank">{"← Previous:\n                Springbank"}</a><a href="/project-islington">{"Next: Islington →"}</a></nav>
</main>

<SiteFooter />

</>); }
