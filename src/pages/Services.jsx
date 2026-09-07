import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Services() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/services" />
<main id="main-content">
<section className="services-page-hero">
<p className="eyebrow">{"What we do · 01—06"}</p>
<h1>{"From first idea"}<br />{"to built "}<em>{"place."}</em></h1>
<div className="services-hero-copy">
<p>{"We bring design thinking, technical rigour, and practical coordination together in one collaborative\n                    process."}</p><a className="text-link" href="#service-list">{"Explore our services ↓"}</a>
</div>
</section>
<section className="service-directory" id="service-list">
<div className="service-directory-intro">
<p className="eyebrow">{"Integrated expertise"}</p>
<h2>{"One team."}<br />{"Every scale."}</h2>
<p>{"Our work is organized around the needs of each project—not disciplinary boundaries. That means\n                    clearer decisions, fewer gaps, and a stronger idea carried through every stage."}</p>
</div>
<div className="service-directory-list">
<article><span>{"01"}</span>
<div>
<h3>{"Architecture"}</h3>
<p>{"Concept design, design development, documentation, and construction-phase support for\n                            residential, commercial, mixed-use, and industrial projects."}</p>
</div>
</article>
<article><span>{"02"}</span>
<div>
<h3>{"Planning & Feasibility"}</h3>
<p>{"Early site studies, development scenarios, massing, due diligence, and approvals strategy\n                            that turn opportunity into a clear path forward."}</p>
</div>
</article>
<article><span>{"03"}</span>
<div>
<h3>{"Interior Design"}</h3>
<p>{"Spatial planning, material direction, millwork, lighting, and interior detailing shaped as a\n                            natural extension of the architecture."}</p>
</div>
</article>
<article><span>{"04"}</span>
<div>
<h3>{"Visualization"}</h3>
<p>{"Three-dimensional studies, renderings, and visual storytelling that make design intent\n                            tangible and help teams make confident decisions."}</p>
</div>
</article>
<article><span>{"05"}</span>
<div>
<h3>{"Project Delivery"}</h3>
<p>{"Technical coordination, consultant integration, BIM workflows, and contract administration\n                            focused on quality from drawing set to site."}</p>
</div>
</article>
<article><span>{"06"}</span>
<div>
<h3>{"Construction Review"}</h3>
<p>{"Responsive site review, field coordination, and design stewardship that protect the project’s\n                            intent throughout construction."}</p>
</div>
</article>
</div>
</section>
<section className="service-process">
<div>
<p className="eyebrow">{"How we work"}</p>
<h2>{"A clear process,"}<br />{"built around dialogue."}</h2>
</div>
<ol>
<li><span>{"01"}</span>
<div>
<h3>{"Discover"}</h3>
<p>{"We listen, research, and define what success means for the site, the brief, and the people it\n                            will serve."}</p>
</div>
</li>
<li><span>{"02"}</span>
<div>
<h3>{"Shape"}</h3>
<p>{"We test possibilities and bring the strongest idea into focus through drawings, models, and\n                            shared decisions."}</p>
</div>
</li>
<li><span>{"03"}</span>
<div>
<h3>{"Resolve"}</h3>
<p>{"We coordinate the design into a precise, buildable whole without losing the clarity of the\n                            original idea."}</p>
</div>
</li>
<li><span>{"04"}</span>
<div>
<h3>{"Deliver"}</h3>
<p>{"We stay engaged through approvals and construction, answering questions and protecting\n                            quality on site."}</p>
</div>
</li>
</ol>
</section>
<section className="service-project-strip"><a href="/project-dundas"><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas mixed-use project" /><span>{"See our\n                    work"}</span><strong>{"Projects ↗"}</strong></a></section>
<section className="next-project page-cta">
<p className="eyebrow">{"Have a project in mind?"}</p>
<h2>{"Let’s find its clearest expression."}</h2><a className="button button-large" href="/contact">{"Start a\n                conversation "}<span>{"↗"}</span></a>
</section>
</main>
<SiteFooter />

</>); }
