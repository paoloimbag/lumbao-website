import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function About() { return (<>
<a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/about" />
<main id="main-content">
<section className="page-hero about-hero">
<p className="eyebrow">{"About Lumbao"}</p>
<h1>{"A practice built"}<br />{"on "}<em>{"care and clarity."}</em></h1>
<div className="page-hero-copy">
<p>{"Architecture is a public act and a personal experience. We bring both perspectives to every\n                    project—balancing ambition with the realities of approvals, construction, and long-term use."}</p>
<p className="page-index">{"Toronto · Texas"}<br />{"Established practice · 25+ years"}</p>
</div>
</section>
<section className="about-statement section-dark">
<p className="eyebrow">{"Our purpose"}</p>
<h2>{"We guide clients from possibility to place—with design intelligence, technical confidence, and respect\n                for every voice at the table."}</h2>
<div className="values-grid">
<article><span>{"01"}</span>
<h3>{"Teamwork"}</h3>
<p>{"Architecture improves when clients, consultants, makers, and communities shape it together."}</p>
</article>
<article><span>{"02"}</span>
<h3>{"Commitment"}</h3>
<p>{"We stay close to the work, protect the idea, and follow through from first study to final review.\n                    "}</p>
</article>
<article><span>{"03"}</span>
<h3>{"Respect"}</h3>
<p>{"We listen carefully—to people, budgets, regulations, materials, and the character of each site.\n                    "}</p>
</article>
</div>
</section>
<section className="principal-profile">
<figure className="principal-mark principal-portrait"><img src="/assets/rommel-lumbao-1080.webp" data-original-src="/assets/rommel-lumbao.jpg" srcSet="/assets/rommel-lumbao-640.webp 640w, /assets/rommel-lumbao-1080.webp 1080w" sizes="(max-width: 700px) 100vw, 70vw" width="1080" height="1350" decoding="async" alt="Rommel A. Lumbao, Principal Architect" /></figure>
<div>
<p className="eyebrow">{"The principal"}</p>
<h2>{"Rommel A. Lumbao"}</h2>
<p className="credentials">{"B.Arch · UAP · MRAIC · OAA · AIBC · AANB · NLAA · APEC Architect"}</p>
<p>{"Rommel Lumbao is known for work grounded in strong concepts and shaped around each client’s specific\n                    needs. His experience spans retail, commercial, industrial, healthcare, mixed-use, government, and\n                    military projects—from early design through completion."}</p>
<p>{"His professional affiliations extend across Canada, the Philippines, the United States, and the\n                    Asia-Pacific region. He has also served the architectural community as a past president of the UAP\n                    Ontario Canada Chapter."}</p><a className="text-link" href="https://ca.linkedin.com/in/rommel-lumbao-uap-mraic-ncarb-nlaa-aibc-aanb-oaa-apec-ar-08557456" target="_blank" rel="noreferrer">{"LinkedIn "}<span>{"↗"}</span></a>
</div>
</section>
<section className="team-section section-warm">
<div className="team-heading">
<div>
<p className="eyebrow">{"The collective"}</p>
<h2>{"Different disciplines."}<br />{"One studio."}</h2>
</div>
<p>{"Our public team profiles are presented alongside the disciplines that make each project possible.\n                    Individual roster details can be expanded as the studio confirms them."}</p>
</div>
<div className="team-grid">
<article className="team-card">
<div className="team-monogram"><img className="team-portrait" src="/assets/rommel-lumbao-1080.webp" data-original-src="/assets/rommel-lumbao.jpg" srcSet="/assets/rommel-lumbao-640.webp 640w, /assets/rommel-lumbao-1080.webp 1080w" sizes="(max-width: 700px) 100vw, 70vw" width="1080" height="1350" decoding="async" alt="" loading="lazy" /></div>
<h3>{"Rommel A. Lumbao"}</h3>
<p>{"Principal Architect"}</p><a href="https://ca.linkedin.com/in/rommel-lumbao-uap-mraic-ncarb-nlaa-aibc-aanb-oaa-apec-ar-08557456" target="_blank" rel="noreferrer">{"LinkedIn ↗"}</a>
</article>
<article className="team-card">
<div className="team-monogram"><img className="team-portrait" src="/assets/cid-anthony-santos-1080.webp" data-original-src="/assets/cid-anthony-santos.jpg" srcSet="/assets/cid-anthony-santos-640.webp 640w, /assets/cid-anthony-santos-1080.webp 1080w" sizes="(max-width: 700px) 100vw, 70vw" width="1080" height="1350" decoding="async" alt="" loading="lazy" /></div>
<h3>{"Cid Anthony Santos"}</h3>
<p>{"Architectural & Urban Designer"}</p><a href="https://ca.linkedin.com/in/cidanthonysantos" target="_blank" rel="noreferrer">{"LinkedIn ↗"}</a>
</article>
<article className="team-card">
<div className="team-monogram"><img className="team-portrait" src="/assets/christine-d-1080.webp" srcSet="/assets/christine-d-640.webp 640w, /assets/christine-d-1080.webp 1080w" sizes="(max-width: 620px) 100vw, 33vw" width="1080" height="1350" loading="lazy" decoding="async" alt="Christine D." /></div>
<h3>{"Christine D."}</h3>
<p>{"Architectural Technologist"}</p><a href="https://ca.linkedin.com/in/christinedilidili" target="_blank" rel="noreferrer">{"LinkedIn ↗"}</a>
</article>
<article className="team-card">
<div className="team-monogram"><img className="team-portrait" src="/assets/john-paul-efe-1080.webp" srcSet="/assets/john-paul-efe-640.webp 640w, /assets/john-paul-efe-1080.webp 1080w" sizes="(max-width: 700px) 100vw, 70vw" width="1080" height="1350" decoding="async" alt="" loading="lazy" /></div>
<h3>{"John Paul Efe"}</h3>
<p>{"Architectural Designer · LEED GA"}</p><a href="https://ca.linkedin.com/in/john-paul-efe-19a37596" target="_blank" rel="noreferrer">{"LinkedIn ↗"}</a>
</article>
<article className="team-card">
<div className="team-monogram"><img className="team-portrait" src="/assets/mary-angeli-adriano-1080.webp" data-original-src="/assets/mary-angeli-adriano.jpg" srcSet="/assets/mary-angeli-adriano-640.webp 640w, /assets/mary-angeli-adriano-1080.webp 1080w" sizes="(max-width: 700px) 100vw, 70vw" width="1080" height="1350" decoding="async" alt="" loading="lazy" /></div>
<h3>{"Mary Angeli Adriano"}</h3>
<p>{"Architectural Technologist"}</p><a href="https://www.linkedin.com/in/mary-angeli-adriano-37b2581b6/" target="_blank" rel="noreferrer">{"LinkedIn ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"06"}</span>
<h3>{"Architecture Studio"}</h3>
<p>{"Concept, planning & design development"}</p><a href="mailto:architects@lumbao.com">{"Contact\n                        ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"07"}</span>
<h3>{"Technical Studio"}</h3>
<p>{"Documentation, code & BIM"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"08"}</span>
<h3>{"Interior Studio"}</h3>
<p>{"Space, material & detail"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"09"}</span>
<h3>{"Project Delivery"}</h3>
<p>{"Coordination & administration"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"10"}</span>
<h3>{"Planning Team"}</h3>
<p>{"Feasibility & approvals"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"11"}</span>
<h3>{"Visualization Team"}</h3>
<p>{"3D studies & communication"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card discipline-card"><span>{"12"}</span>
<h3>{"Construction Team"}</h3>
<p>{"Site review & quality"}</p><a href="mailto:architects@lumbao.com">{"Contact ↗"}</a>
</article>
<article className="team-card join-card"><span>{"13"}</span>
<h3>{"Your place here?"}</h3>
<p>{"We’re building a curious, committed team."}</p><a href="/careers">{"View careers ↗"}</a>
</article>
</div>
</section>
<section className="contact page-cta">
<p className="eyebrow">{"Work with us"}</p>
<div className="contact-grid">
<h2>{"Let’s make"}<br />{"something lasting."}</h2>
<div className="contact-details">
<p>{"Bring us your site, brief, challenge, or early idea. We’ll help identify the clearest way\n                        forward."}</p><a className="button button-large" href="mailto:architects@lumbao.com">{"Start a project\n                        "}<span>{"↗"}</span></a>
</div>
</div>
</section>
</main>
<SiteFooter />

</>); }
