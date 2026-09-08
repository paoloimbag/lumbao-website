import React from "react";
import { SiteHeader, SiteFooter } from "../components.jsx";
const architecturalServices = [
  [
    "Feasibility & project definition",
    "Site, zoning, OBC, feasibility, programming and consultant budget coordination."
  ],
  [
    "Concept design",
    "Massing, preliminary drawings, alternatives, sustainability ideas and client sign-off."
  ],
  [
    "Developing the design",
    "Engineering coordination, materials, costs, OBC and accessibility requirements."
  ],
  [
    "Drawing & specification packages",
    "Coordinated permit, tender and construction sets; authority revisions."
  ],
  [
    "Permit coordination",
    "Submissions, municipal responses, authority liaison, zoning and site-plan support."
  ],
  [
    "Tender assistance",
    "Tender preparation, bid assessment, contractor queries and award advice."
  ],
  [
    "Construction-stage services",
    "Field reports, shop drawings, RFIs, changes, payment certification and completion reviews."
  ],
  [
    "Interior spaces",
    "Layouts, finishes, millwork, furniture and lighting."
  ],
  [
    "Digital building models",
    "Revit, clash coordination, visualizations and as-built modelling."
  ],
  [
    "Environmental design",
    "Energy, passive strategies, envelopes, LEED advice and lifecycle assessment."
  ],
  [
    "Existing-building renewal",
    "Assessments, heritage support, code improvements and modernization."
  ],
  [
    "After completion",
    "Record documents, deficiencies, occupancy evaluation and facility planning."
  ]
];

export default function Services() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/services" />
<main id="main-content">
<section className="services-page-hero">
<p className="eyebrow">{"What we do"}</p>
<h1>{"From first idea"}<br />{"to built "}<em>{"place."}</em></h1>
<div className="services-hero-copy">
<p>{"We bring design thinking, technical rigour, and practical coordination together in one collaborative\n                    process."}</p><a className="text-link" href="#service-list">{"Explore our services ↓"}</a>
</div>
</section>
<section className="service-directory" id="service-list">
    <div className="service-directory-intro">
        <p className="eyebrow">Architecture</p>
        <h2>From study.<br />To completion.</h2>
        <p>Guidance for renovations, new buildings and complex projects.</p>
        <nav className="services-section-links" aria-label="Service categories">
            <a className="text-link" href="#architectural-services">Architecture ↓</a>
            <a className="text-link" href="#interior-services">Interiors ↓</a>
            <a className="text-link" href="#project-management">Project management ↓</a>
        </nav>
    </div>
    <div className="service-directory-list" id="architectural-services">
        {architecturalServices.map(([title, description], index) => <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
        </article>)}
    </div>
</section>
<section className="service-process" id="interior-services">
    <div><p className="eyebrow">Interiors</p><h2>Your space.<br />Your perspective.</h2></div>
    <div className="service-supplement-copy"><p>Residential and condominium interiors: floorplans, renderings, animation, VR, furniture/material specifications, shopping guidance and sample boards, with access to trade suppliers and custom pieces.</p></div>
</section>
<section className="service-directory" id="project-management">
    <div className="service-directory-intro"><p className="eyebrow">Project management</p><h2>Clarity at<br />every step.</h2></div>
    <div className="service-supplement-copy"><p>Management and technical assistance from project initiation through closeout, aligned with client objectives.</p></div>
</section>
<section className="service-project-strip"><a href="/project-dundas"><img loading="lazy" src="/assets/project-dundas.avif" alt="Dundas mixed-use project" /><span>{"See our\n                    work"}</span><strong>{"Projects ↗"}</strong></a></section>
<section className="next-project page-cta">
<p className="eyebrow">{"Have a project in mind?"}</p>
<h2>{"Let’s find its clearest expression."}</h2><a className="button button-large" href="/contact">{"Start a\n                conversation "}<span>{"↗"}</span></a>
</section>
</main>
<SiteFooter />

</>); }
