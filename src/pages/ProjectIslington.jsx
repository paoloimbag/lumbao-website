import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function ProjectIslington() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/project-islington" />
<main id="main-content">
<section className="project-detail-hero"><a className="project-breadcrumb" href="/projects">{"← All projects"}</a>
<p className="eyebrow">{"Multi-residential · Toronto"}</p>
<h1>{"Islington"}</h1>
<div className="project-detail-intro">
<p>{"Contemporary urban living expressed through a calm composition, generous openings, and a strong\n                    relationship to the street."}</p>
<dl>
<div>
<dt>{"Type"}</dt>
<dd>{"Multi-residential"}</dd>
</div>
<div>
<dt>{"Focus"}</dt>
<dd>{"Urban infill · Residential living"}</dd>
</div>
</dl>
</div>
</section>
<figure className="project-lead-image"><img loading="eager" fetchPriority="high" src="/assets/project-islington.avif" alt="Islington multi-residential building" /></figure>
<section className="project-narrative">
<p className="eyebrow">{"The idea"}</p>
<h2>{"Density with a human scale."}</h2>
<div>
<p>{"The project balances a distinct architectural identity with a grounded street presence. Its massing\n                    is organized to create rhythm, depth, and a sense of address for residents."}</p>
<p>{"Carefully placed openings and layered façade elements bring variation to the elevation while\n                    maintaining a clear, unified whole."}</p>
</div>
</section>
<section className="detail-gallery">
<div className="gallery-heading">
<p className="eyebrow">{"Project gallery"}</p>
<p>{"Click any image to view it larger."}</p>
</div>
<div className="detail-gallery-grid islington-gallery"><LightboxButton><img loading="lazy" src="/assets/project-islington.avif" alt="Islington building in its urban setting" /></LightboxButton><LightboxButton className="crop-left"><img loading="lazy" src="/assets/project-islington.avif" alt="Islington street-level architecture detail" /></LightboxButton><LightboxButton className="crop-right"><img loading="lazy" src="/assets/project-islington.avif" alt="Islington façade detail" /></LightboxButton></div>
</section>
<nav className="project-pagination" aria-label="Project navigation"><a href="/project-wasaga">{"← Previous:\n                Wasaga"}</a><a href="/project-elm">{"Next: Elm →"}</a></nav>
</main>

<SiteFooter />

</>); }
