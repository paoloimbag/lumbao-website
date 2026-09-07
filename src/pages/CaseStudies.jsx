import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function CaseStudies() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/case-studies" />
<main id="main-content">
<section className="page-hero case-hero">
<p className="eyebrow">{"Selected case studies"}</p>
<h1>{"Ideas made"}<br /><em>{"visible."}</em></h1>
<div className="page-hero-copy">
<p>{"Three projects at different scales show how a clear architectural idea can organize complexity,\n                    connect people to place, and create value over time."}</p>
<p className="page-index">{"01 Dundas"}<br />{"02 Springbank"}<br />{"03 Wasaga Waterfront"}</p>
</div>
</section>
<article className="case-study" id="dundas">
<div className="case-number">{"01"}</div>
<div className="case-title">
<p className="eyebrow">{"Mixed-use · Greater Toronto Area"}</p>
<h2>{"Dundas"}</h2>
</div>
<figure className="case-hero-image"><a href="/project-dundas"><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas mixed-use tower proposal" /></a></figure>
<div className="case-facts">
<dl>
<div>
<dt>{"Typology"}</dt>
<dd>{"Multi-residential / Mixed-use"}</dd>
</div>
<div>
<dt>{"Focus"}</dt>
<dd>{"Urban density and street presence"}</dd>
</div>
<div>
<dt>{"Service"}</dt>
<dd>{"Architecture and approvals"}</dd>
</div>
</dl>
<div>
<h3>{"Framing a new urban address"}</h3>
<p>{"Dundas brings residential density and an active public edge together in one clear composition. A\n                        defined podium meets the street while the tower rises with a lighter rhythm above, balancing\n                        landmark presence with a comfortable pedestrian scale."}</p>
<p>{"The design treats circulation, amenity, landscape, and façade as one system—making a complex\n                        program easier to understand and creating a distinct identity from near and far."}</p><a className="text-link" href="/project-dundas">{"View full project "}<span>{"↗"}</span></a>
</div>
</div>
</article>
<article className="case-study section-warm" id="springbank">
<div className="case-number">{"02"}</div>
<div className="case-title">
<p className="eyebrow">{"Mixed-use · London, Ontario"}</p>
<h2>{"Springbank"}</h2>
</div>
<figure className="case-hero-image"><a href="/project-springbank"><img loading="lazy" src="/assets/project-springbank.avif" alt="Springbank condominium exterior" /></a></figure>
<div className="case-facts">
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
<div>
<h3>{"A landmark shaped for everyday life"}</h3>
<p>{"Set among residential, commercial, and institutional neighbours, Springbank is conceived as a\n                        nine-storey mixed-use landmark. Its full-glass expression, strong horizontal lines, and\n                        restrained palette give the building a confident but calm presence."}</p>
<p>{"Inside, planning prioritizes comfortable homes, intuitive circulation, and a useful relationship\n                        between residential and commercial uses—turning visual clarity into a better daily experience.\n                    "}</p><a className="text-link" href="/project-springbank">{"View full project "}<span>{"↗"}</span></a>
</div>
</div>
</article>
<article className="case-study section-dark" id="wasaga">
<div className="case-number">{"03"}</div>
<div className="case-title">
<p className="eyebrow">{"Waterfront mixed-use · Wasaga, Ontario"}</p>
<h2>{"Wasaga Waterfront"}</h2>
</div>
<figure className="case-hero-image"><a href="/project-wasaga"><img loading="lazy" src="/assets/project-wasaga.avif" alt="Wasaga Waterfront development" /></a></figure>
<div className="case-facts">
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
<dt>{"Setting"}</dt>
<dd>{"Wasaga Beach waterfront"}</dd>
</div>
</dl>
<div>
<h3>{"Living with the horizon"}</h3>
<p>{"The waterfront is not scenery here—it is the organizing idea. Homes and shared spaces are\n                        positioned to extend views toward the beach, while commercial uses animate the development at\n                        ground level."}</p>
<p>{"The six-storey massing fits the town skyline and uses contemporary lines to create a relaxed\n                        architectural character. Landscape and outdoor space make the project useful across all four\n                        seasons."}</p><a className="text-link" href="/project-wasaga">{"View full project\n                        "}<span>{"↗"}</span></a>
</div>
</div>
</article>
<section className="next-project">
<p className="eyebrow">{"More work"}</p>
<h2>{"Every project begins"}<br />{"with a particular place."}</h2><a className="button button-large" href="/projects">{"View all featured work "}<span>{"↗"}</span></a>
</section>
</main>
<SiteFooter />

</>); }
