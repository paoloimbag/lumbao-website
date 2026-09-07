import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function ProjectDundas() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/project-dundas" />
<main id="main-content">
<section className="project-detail-hero"><a className="project-breadcrumb" href="/projects">{"← All projects"}</a>
<p className="eyebrow">{"Mixed-use · Greater Toronto Area"}</p>
<h1>{"Dundas"}</h1>
<div className="project-detail-intro">
<p>{"A vertical community shaped around a strong public edge, a clear skyline presence, and a sequence of\n                    spaces designed for daily life."}</p>
<dl>
<div>
<dt>{"Type"}</dt>
<dd>{"Multi-residential / Mixed-use"}</dd>
</div>
<div>
<dt>{"Services"}</dt>
<dd>{"Architecture · Planning · Approvals"}</dd>
</div>
</dl>
</div>
</section>
<figure className="project-lead-image"><img loading="eager" fetchPriority="high" src="/assets/project-dundas.avif" alt="Dundas mixed-use tower and podium" /></figure>
<section className="project-narrative">
<p className="eyebrow">{"The idea"}</p>
<h2>{"A landmark that meets the street with care."}</h2>
<div>
<p>{"The tower and podium are treated as complementary parts of one composition. At ground level, the\n                    building creates a defined urban edge; above, a lighter façade rhythm gives the residential volume\n                    identity without overwhelming its context."}</p>
<p>{"Landscape, amenity, circulation, and architecture work as a single system. That clarity helps a\n                    complex mixed-use program feel intuitive—from arrival at the street to the experience of the\n                    skyline."}</p>
</div>
</section>
<section className="detail-gallery">
<div className="gallery-heading">
<p className="eyebrow">{"Project gallery"}</p>
<p>{"Click any image to view it larger."}</p>
</div>
<div className="detail-gallery-grid dundas-gallery"><LightboxButton><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas tower within its urban context" /></LightboxButton><LightboxButton className="crop-detail"><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas podium and façade detail" /></LightboxButton><LightboxButton className="crop-top"><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas upper tower detail" /></LightboxButton></div>
</section>
<nav className="project-pagination" aria-label="Project navigation"><a href="/projects">{"← All projects"}</a><a href="/project-springbank">{"Next: Springbank →"}</a></nav>
</main>

<SiteFooter />

</>); }
