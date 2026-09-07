import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Projects() { return (<>
<a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/projects" />
<main id="main-content">
<section className="projects-page-hero">
<p className="eyebrow">{"All work · 01—05"}</p>
<h1>{"A portfolio"}<br />{"shaped by "}<em>{"place."}</em></h1>
<div className="projects-page-intro">
<p>{"From city streets to the water’s edge, each project begins with its context and develops a clear\n                    architectural response."}</p>
<div className="projects-page-links"><a className="text-link" href="#portfolio-heading">{"Explore project\n                        details ↓"}</a><a className="text-link" href="/gallery">{"View gallery ↗"}</a></div>
</div>
</section>
<section className="portfolio-index" aria-labelledby="portfolio-heading">
<div className="portfolio-toolbar">
<h2 id="portfolio-heading">{"All projects"}</h2>
<div className="project-filters" aria-label="Filter projects">
<FilterButton className="project-filter is-active" type="button" category="all">{"All"}</FilterButton>
<FilterButton className="project-filter" type="button" category="residential">{"Residential"}</FilterButton>
<FilterButton className="project-filter" type="button" category="mixed-use">{"Mixed-use"}</FilterButton>
<FilterButton className="project-filter" type="button" category="industrial">{"Industrial"}</FilterButton>
</div>
</div>
<div className="portfolio-grid">
<PortfolioItem className="portfolio-item portfolio-item-wide portfolio-featured" href="/project-dundas" category="residential mixed-use">
<figure><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas mixed-use tower and podium" /></figure>
<div><span>{"Featured · 01"}</span>
<h3>{"Dundas"}</h3>
<p>{"Multi-residential · Mixed-use"}</p><b aria-hidden="true">{"↗"}</b>
</div>
</PortfolioItem>
<PortfolioItem className="portfolio-item" href="/project-springbank" category="residential mixed-use">
<figure><img loading="lazy" src="/assets/project-springbank.avif" alt="Springbank residential development" /></figure>
<div><span>{"02"}</span>
<h3>{"Springbank"}</h3>
<p>{"Mixed-use · London"}</p><b aria-hidden="true">{"↗"}</b>
</div>
</PortfolioItem>
<PortfolioItem className="portfolio-item" href="/project-wasaga" category="residential mixed-use">
<figure><img loading="lazy" src="/assets/project-wasaga.avif" alt="Wasaga Waterfront development" />
</figure>
<div><span>{"03"}</span>
<h3>{"Wasaga Waterfront"}</h3>
<p>{"Waterfront · Mixed-use"}</p><b aria-hidden="true">{"↗"}</b>
</div>
</PortfolioItem>
<PortfolioItem className="portfolio-item" href="/project-islington" category="residential">
<figure><img loading="lazy" src="/assets/project-islington.avif" alt="Islington multi-residential project" /></figure>
<div><span>{"04"}</span>
<h3>{"Islington"}</h3>
<p>{"Multi-residential · Toronto"}</p><b aria-hidden="true">{"↗"}</b>
</div>
</PortfolioItem>
<PortfolioItem className="portfolio-item" href="/project-elm" category="industrial">
<figure><img loading="lazy" src="/assets/project-elm.avif" alt="Elm industrial project" /></figure>
<div><span>{"05"}</span>
<h3>{"Elm"}</h3>
<p>{"Industrial · Ontario"}</p><b aria-hidden="true">{"↗"}</b>
</div>
</PortfolioItem>
</div>
</section>
<section className="next-project page-cta">
<p className="eyebrow">{"A closer look"}</p>
<h2>{"See how ideas become places."}</h2><a className="button button-large" href="#portfolio-heading">{"Explore\n                projects "}<span>{"↑"}</span></a>
</section>
</main>
<SiteFooter />

</>); }
