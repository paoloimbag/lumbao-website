import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Home() { return (<>
<a className="skip-link" href="#main-content">{"Skip to content"}</a>
<main id="main-content">
<section className="hero" id="home">
<HeroVideo poster="/assets/raw-5-1280.webp" source="/assets/Firefly%20Cinematic%20Orbit%20Walkthrough_1.mp4" />
<SiteHeader home={true} active="/" />
<div className="hero-copy">
<div className="hero-heading"><h1><span>{"Architecture that shapes"}</span><br /><em>{"legacy."}</em></h1>
<a className="hero-action" href="/projects">{"Explore our projects "}<span aria-hidden="true">{"↗"}</span></a></div>
<p>{"We design enduring residential, commercial, industrial, and mixed-use spaces—combining bold ideas,\n                    technical expertise, and over 25 years of experience."}</p>
</div>
<div className="hero-meta"><span>{"Toronto · Texas"}</span><a href="#projects">{"Selected work ↓"}</a></div>
</section>
<section className="projects" id="projects">
<div className="projects-intro">
<div>
<p className="eyebrow">{"Featured projects"}</p>
<h2>{"Designed With"}<br />{"Purpose"}</h2>
</div>
<div className="projects-summary">
<p>{"Explore a selection of projects shaped by thoughtful design, technical precision, and a deep\n                        understanding of the people and communities they serve."}</p>
<a className="button" href="/projects">{"View all projects "}<img loading="lazy" src="/assets/arrow.svg" alt="" /></a>
</div>
</div>
<div className="gallery" id="gallery">
<figure className="gallery-main"><img loading="lazy" src="/assets/raw-2-1920.webp" data-original-src="/assets/raw-2.jpg" srcSet="/assets/raw-2-640.webp 640w, /assets/raw-2-1280.webp 1280w, /assets/raw-2-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="4096" height="4096" decoding="async" alt="Sunlit living room with green sofa and gallery wall" /></figure>
<figure><img loading="lazy" src="/assets/raw-7-1920.webp" data-original-src="/assets/raw-7.jpg" srcSet="/assets/raw-7-640.webp 640w, /assets/raw-7-1280.webp 1280w, /assets/raw-7-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="3840" height="2160" decoding="async" alt="Living room with deep green feature wall" />
</figure>
<figure><img loading="lazy" src="/assets/raw-8-1920.webp" data-original-src="/assets/raw-8.jpg" srcSet="/assets/raw-8-640.webp 640w, /assets/raw-8-1280.webp 1280w, /assets/raw-8-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="3840" height="3840" decoding="async" alt="Warm living room with fireplace and plants" />
</figure>
</div>
</section>
<section className="studio section-dark" id="about">
<div className="studio-heading-row">
<div className="section-heading reveal">
<p className="eyebrow">{"The studio"}</p>
<h2>{"Ideas with intent."}<br /><em>{"Details with purpose."}</em></h2>
</div>
<figure className="studio-image reveal">
<img src="/assets/springbank-01.avif" alt="Springbank project façade with glass balconies and landscaped frontage" loading="lazy" decoding="async" />
</figure>
</div>
<div className="studio-grid">
<p className="studio-lead reveal">{"Lumbao Architects is a multidisciplinary practice creating thoughtful\n                    places to live, work, gather, and grow."}</p>
<div className="studio-copy reveal">
<p>{"From early feasibility to the final built detail, our architects, planners, interior designers,\n                        and technical specialists work as one team. The result is a clearer process—and architecture\n                        that remains useful, distinctive, and enduring."}</p>
<a className="text-link" href="/about">{"Meet the studio "}<span aria-hidden="true">{"↗"}</span></a>
</div>
</div>
<dl className="stats reveal">
<div>
<dt aria-label="25+"><Counter goal={25} suffix="+" /></dt>
<dd>{"Years of practice"}</dd>
</div>
<div>
<dt aria-label="400+"><Counter goal={400} suffix="+" /></dt>
<dd>{"Retail environments"}</dd>
</div>
<div>
<dt aria-label="2"><Counter goal={2} suffix="" /></dt>
<dd>{"Countries of practice"}</dd>
</div>
</dl>
</section>
<section className="services" id="services">
<div className="services-intro reveal">
<p className="eyebrow">{"What we do"}</p>
<h2>{"One team."}<br />{"Every stage."}</h2>
<p>{"Integrated expertise keeps the design vision intact from the first sketch through approvals,\n                    coordination, and construction."}</p>
</div>
<div className="service-list">
<article className="service reveal"><span>{"01"}</span>
<h3>{"Architecture"}</h3>
<p>{"Residential, commercial, industrial, and mixed-use buildings shaped around people and place."}</p>
</article>
<article className="service reveal"><span>{"02"}</span>
<h3>{"Planning & approvals"}</h3>
<p>{"Clear strategy, thoughtful site planning, and confident navigation through municipal processes.\n                    "}</p>
</article>
<article className="service reveal"><span>{"03"}</span>
<h3>{"Interior architecture"}</h3>
<p>{"Material, light, flow, and detail composed into spaces with a distinct sense of character."}</p>
</article>
<article className="service reveal"><span>{"04"}</span>
<h3>{"Technical coordination"}</h3>
<p>{"Rigorous documentation and BIM-led coordination that turn design intent into buildable reality.\n                    "}</p>
</article>
</div>
</section>
<section className="signature section-warm" id="studies">
<div className="signature-heading reveal">
<div>
<p className="eyebrow">{"Signature work"}</p>
<h2>{"Built for life."}</h2>
</div>
<p>{"A cross-section of residential and commercial work across Ontario, designed at different scales but\n                    connected by the same care."}</p>
</div>
<div className="project-grid">
<a className="project-card project-card-wide reveal" href="/project-dundas">
<figure><img src="/assets/project-dundas.avif" alt="Dundas architectural project" loading="lazy" />
</figure>
<div>
<h3>{"Dundas "}<span className="project-arrow" aria-hidden="true">{"↗"}</span></h3>
<p>{"Mixed-use · Toronto"}</p>
</div>
</a>
<a className="project-card reveal" href="/project-springbank">
<figure><img src="/assets/project-springbank.avif" alt="Springbank residential project" loading="lazy" /></figure>
<div>
<h3>{"Springbank "}<span className="project-arrow" aria-hidden="true">{"↗"}</span></h3>
<p>{"Residential · Ontario"}</p>
</div>
</a>
<a className="project-card reveal" href="/project-wasaga">
<figure><img src="/assets/project-wasaga.avif" alt="Wasaga residential project" loading="lazy" />
</figure>
<div>
<h3>{"Wasaga "}<span className="project-arrow" aria-hidden="true">{"↗"}</span></h3>
<p>{"Residential · Wasaga Beach"}</p>
</div>
</a>
<a className="project-card reveal" href="/project-islington">
<figure><img src="/assets/project-islington.avif" alt="Islington architectural project" loading="lazy" /></figure>
<div>
<h3>{"Islington "}<span className="project-arrow" aria-hidden="true">{"↗"}</span></h3>
<p>{"Residential · Toronto"}</p>
</div>
</a>
<a className="project-card reveal" href="/project-elm">
<figure><img src="/assets/project-elm.avif" alt="Elm architectural project" loading="lazy" /></figure>
<div>
<h3>{"Elm "}<span className="project-arrow" aria-hidden="true">{"↗"}</span></h3>
<p>{"Residential · Ontario"}</p>
</div>
</a>
</div>
</section>
<section className="approach section-dark" id="approach">
<div className="section-heading reveal">
<p className="eyebrow">{"Our approach"}</p>
<h2>{"A clearer path"}<br />{"from idea to place."}</h2>
</div>
<ol className="process-list">
<li className="reveal"><span>{"01"}</span>
<div>
<h3>{"Discover"}</h3>
<p>{"We listen, study the site, and define what success needs to feel like."}</p>
</div>
</li>
<li className="reveal"><span>{"02"}</span>
<div>
<h3>{"Define"}</h3>
<p>{"We turn constraints and ambitions into a strong, shared design direction."}</p>
</div>
</li>
<li className="reveal"><span>{"03"}</span>
<div>
<h3>{"Deliver"}</h3>
<p>{"We coordinate approvals, consultants, details, and documentation with care."}</p>
</div>
</li>
<li className="reveal"><span>{"04"}</span>
<div>
<h3>{"Support"}</h3>
<p>{"We stay closely involved through construction to protect the original intent."}</p>
</div>
</li>
</ol>
</section>
<section className="contact" id="contact">
<p className="eyebrow reveal">{"Start a conversation"}</p>
<div className="contact-grid">
<h2 className="reveal">{"Have a place"}<br />{"in mind?"}</h2>
<div className="contact-details reveal">
<p>{"Tell us what you’re imagining. We’ll bring curiosity, clarity, and the right team to the table.\n                    "}</p>
<a className="button button-large" href="mailto:architects@lumbao.com">{"Start a project "}<span aria-hidden="true">{"↗"}</span></a>
<address>{"121 Lebovic Avenue, Unit C4"}<br />{"Toronto, Ontario M1L 0J2"}</address>
<p><a href="tel:+14162888831">{"416 288 8831"}</a><br /><a href="mailto:architects@lumbao.com">{"architects@lumbao.com"}</a></p>
</div>
</div>
</section>
</main>
<SiteFooter />

</>); }
