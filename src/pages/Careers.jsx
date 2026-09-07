import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Careers() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/careers" />
<main id="main-content">
<section className="careers-hero">
<p className="eyebrow">{"Join the studio"}</p>
<h1>{"Bring your"}<br />{"point of "}<em>{"view."}</em></h1>
<div>
<p>{"We’re building a multidisciplinary team of thoughtful designers and practical problem-solvers who\n                    care about how places are imagined—and how they get made."}</p><a className="text-link" href="#openings">{"See open roles ↓"}</a>
</div>
</section>
<section className="career-culture">
<div>
<p className="eyebrow">{"Life at Lumbao"}</p>
<h2>{"Good work grows"}<br />{"through collaboration."}</h2>
</div>
<div className="career-values">
<article><span>{"01"}</span>
<h3>{"Make ideas tangible"}</h3>
<p>{"Move comfortably between concept, detail, conversation, and the realities of project delivery.\n                    "}</p>
</article>
<article><span>{"02"}</span>
<h3>{"Learn out loud"}</h3>
<p>{"Share what you know, ask thoughtful questions, and make room for different perspectives."}</p>
</article>
<article><span>{"03"}</span>
<h3>{"Care for the outcome"}</h3>
<p>{"Take ownership, follow through, and remember that every drawing eventually affects someone’s\n                        daily life."}</p>
</article>
</div>
</section>
<section className="career-openings" id="openings">
<div className="career-openings-heading">
<div>
<p className="eyebrow">{"Opportunities"}</p>
<h2>{"Current openings"}</h2>
</div>
<p>{"These roles are examples for the website preview and do not represent confirmed vacancies. Final\n                    listings can be connected to the studio’s hiring process."}</p>
</div>
<div className="job-list">
<JobCard className="job-card" initialOpen={true}>
<summary><span>{"01"}</span>
<div>
<h3>{"Intermediate Architectural Designer"}</h3>
<p>{"Toronto · Full-time · Hybrid"}</p>
</div><b>{"View role"}</b>
</summary>
<div className="job-content">
<div>
<h4>{"The opportunity"}</h4>
<p>{"Join project teams working across multi-residential, mixed-use, and commercial design\n                                from early studies through coordinated documentation."}</p>
</div>
<div>
<h4>{"What you bring"}</h4>
<ul>
<li>{"4–7 years of relevant architectural experience"}</li>
<li>{"Strong design, drawing, and presentation skills"}</li>
<li>{"Working knowledge of Revit and Adobe Creative Suite"}</li>
<li>{"Clear communication and collaborative instincts"}</li>
</ul>
</div><a className="button" href="mailto:architects@lumbao.com?subject=Application%20%E2%80%94%20Intermediate%20Architectural%20Designer">{"Apply\n                            for this role "}<span>{"↗"}</span></a>
</div>
</JobCard>
<JobCard className="job-card" initialOpen={false}>
<summary><span>{"02"}</span>
<div>
<h3>{"Senior Architectural Technologist"}</h3>
<p>{"Toronto · Full-time · Hybrid"}</p>
</div><b>{"View role"}</b>
</summary>
<div className="job-content">
<div>
<h4>{"The opportunity"}</h4>
<p>{"Lead technical development and consultant coordination on complex projects while\n                                supporting quality across the studio’s documentation."}</p>
</div>
<div>
<h4>{"What you bring"}</h4>
<ul>
<li>{"7+ years of technical project experience"}</li>
<li>{"Advanced Revit and BIM coordination skills"}</li>
<li>{"Knowledge of Ontario codes and construction systems"}</li>
<li>{"Experience mentoring project team members"}</li>
</ul>
</div><a className="button" href="mailto:architects@lumbao.com?subject=Application%20%E2%80%94%20Senior%20Architectural%20Technologist">{"Apply\n                            for this role "}<span>{"↗"}</span></a>
</div>
</JobCard>
<JobCard className="job-card" initialOpen={false}>
<summary><span>{"03"}</span>
<div>
<h3>{"Interior Designer"}</h3>
<p>{"Toronto · Full-time · Hybrid"}</p>
</div><b>{"View role"}</b>
</summary>
<div className="job-content">
<div>
<h4>{"The opportunity"}</h4>
<p>{"Shape residential, workplace, and shared amenity environments as an integrated part of\n                                the architectural design process."}</p>
</div>
<div>
<h4>{"What you bring"}</h4>
<ul>
<li>{"3–6 years of interior design experience"}</li>
<li>{"Strong space-planning and material sensibility"}</li>
<li>{"Experience producing detailed drawing packages"}</li>
<li>{"Confidence presenting ideas to clients and teams"}</li>
</ul>
</div><a className="button" href="mailto:architects@lumbao.com?subject=Application%20%E2%80%94%20Interior%20Designer">{"Apply\n                            for this role "}<span>{"↗"}</span></a>
</div>
</JobCard>
<JobCard className="job-card" initialOpen={false}>
<summary><span>{"04"}</span>
<div>
<h3>{"Architectural Intern"}</h3>
<p>{"Toronto · Internship · In studio"}</p>
</div><b>{"View role"}</b>
</summary>
<div className="job-content">
<div>
<h4>{"The opportunity"}</h4>
<p>{"Build practical experience across design research, visualization, model-making, and\n                                documentation in a collaborative studio setting."}</p>
</div>
<div>
<h4>{"What you bring"}</h4>
<ul>
<li>{"Current architecture student or recent graduate"}</li>
<li>{"A thoughtful portfolio and curiosity about practice"}</li>
<li>{"Familiarity with 3D modelling and graphic tools"}</li>
<li>{"Organization, initiative, and openness to feedback"}</li>
</ul>
</div><a className="button" href="mailto:architects@lumbao.com?subject=Application%20%E2%80%94%20Architectural%20Intern">{"Apply\n                            for this role "}<span>{"↗"}</span></a>
</div>
</JobCard>
</div>
</section>
<section className="career-general">
<div>
<p className="eyebrow">{"Don’t see your role?"}</p>
<h2>{"Introduce yourself."}</h2>
</div>
<div>
<p>{"We’re always interested in meeting thoughtful people. Send a brief introduction, résumé, and selected\n                    portfolio work for future consideration."}</p><a className="button button-large" href="mailto:architects@lumbao.com?subject=General%20career%20application">{"General application\n                    "}<span>{"↗"}</span></a>
</div>
</section>
</main>
<SiteFooter />

</>); }
