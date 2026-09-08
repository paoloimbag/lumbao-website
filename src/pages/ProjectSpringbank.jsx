import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function ProjectSpringbank() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/project-springbank" />
<main id="main-content">
<section className="project-detail-hero"><a className="project-breadcrumb" href="/projects">{"← All projects"}</a>
<p className="eyebrow">{"Mixed-use · London, Ontario"}</p>
<h1>{"Springbank"}</h1>
<div className="project-detail-intro">
<p>{"A nine-storey landmark that brings contemporary homes and neighbourhood-serving commercial space to\n                    Springbank Drive."}</p>
<dl>
<div>
<dt>{"Location"}</dt>
<dd>{"464 Springbank Drive"}</dd>
</div>
<div>
<dt>{"Area"}</dt>
<dd>{"297,966 sq ft"}</dd>
</div>
<div>
<dt>{"Program"}</dt>
<dd>{"186 homes · 4 commercial spaces"}</dd>
</div>
</dl>
</div>
</section>
<figure className="project-lead-image"><img loading="eager" fetchPriority="high" src="/assets/springbank-01.avif" alt="Springbank condominium exterior view" /></figure>
<section className="project-narrative">
<p className="eyebrow">{"The idea"}</p>
<h2>{"Strong lines. Comfortable living."}</h2>
<div>
<p>{"Springbank’s full-glass expression, clean horizontal lines, and neutral palette establish a calm but\n                    recognizable identity within a varied neighbourhood of residential, commercial, and institutional\n                    uses."}</p>
<p>{"Behind that clarity is a practical plan: homes shaped for daylight and comfort, intuitive\n                    circulation, and commercial spaces that help animate the street."}</p>
</div>
</section>
<section className="detail-gallery">
<div className="gallery-heading">
<p className="eyebrow">{"Project gallery"}</p>
<p>{"Click any image to view it larger."}</p>
</div>
<div className="detail-gallery-grid"><LightboxButton><img loading="lazy" src="/assets/springbank-01.avif" alt="Springbank exterior perspective" /></LightboxButton><LightboxButton><img src="/assets/springbank-02.webp" alt="Springbank animated exterior study" loading="lazy" /></LightboxButton><LightboxButton><img src="/assets/springbank-03.webp" alt="Springbank animated design study" loading="lazy" /></LightboxButton></div>
</section>
<nav className="project-pagination" aria-label="Project navigation"><a href="/project-dundas">{"← Previous:\n                Dundas"}</a><a href="/project-wasaga">{"Next: Wasaga →"}</a></nav>
</main>

<SiteFooter />

</>); }
