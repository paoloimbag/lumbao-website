import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function ProjectElm() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/project-elm" />
<main id="main-content">
<section className="project-detail-hero"><a className="project-breadcrumb" href="/projects">{"← All projects"}</a>
<p className="eyebrow">{"Industrial · Ontario"}</p>
<h1>{"Elm"}</h1>
<div className="project-detail-intro">
<p>{"A precise industrial building where operational clarity is matched by a confident, contemporary\n                    architectural presence."}</p>
<dl>
<div>
<dt>{"Type"}</dt>
<dd>{"Industrial"}</dd>
</div>
<div>
<dt>{"Focus"}</dt>
<dd>{"Efficient operations · Clear identity"}</dd>
</div>
</dl>
</div>
</section>
<figure className="project-lead-image"><img loading="eager" fetchPriority="high" src="/assets/project-elm.avif" alt="Elm industrial facility" /></figure>
<section className="project-narrative">
<p className="eyebrow">{"The idea"}</p>
<h2>{"Performance made visible."}</h2>
<div>
<p>{"The architecture turns a pragmatic program into a composed civic-facing presence. Long horizontal\n                    lines communicate efficiency while the entry and office areas establish an unmistakable point of\n                    arrival."}</p>
<p>{"A restrained material palette gives the project durability and visual clarity, allowing proportion,\n                    shadow, and landscape to carry the design."}</p>
</div>
</section>
<section className="detail-gallery">
<div className="gallery-heading">
<p className="eyebrow">{"Project gallery"}</p>
<p>{"Click any image to view it larger."}</p>
</div>
<div className="detail-gallery-grid elm-gallery"><LightboxButton><img loading="lazy" src="/assets/project-elm.avif" alt="Elm industrial building and landscape" /></LightboxButton><LightboxButton className="crop-left"><img loading="lazy" src="/assets/project-elm.avif" alt="Elm entry detail" /></LightboxButton><LightboxButton className="crop-right"><img loading="lazy" src="/assets/project-elm.avif" alt="Elm building envelope detail" /></LightboxButton></div>
</section>
<nav className="project-pagination" aria-label="Project navigation"><a href="/project-islington">{"← Previous:\n                Islington"}</a><a href="/projects">{"All projects →"}</a></nav>
</main>

<SiteFooter />

</>); }
