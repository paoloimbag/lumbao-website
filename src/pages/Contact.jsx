import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Contact() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/contact" />
<main id="main-content">
<section className="contact-page-hero">
<p className="eyebrow">{"Start a conversation"}</p>
<h1>{"Have a place"}<br />{"in "}<em>{"mind?"}</em></h1>
<p>{"Tell us what you’re imagining. We’ll bring curiosity, clarity, and the right team to the table."}</p>
</section>
<section className="contact-workspace">
<div className="contact-office">
<p className="eyebrow">{"Studio"}</p>
<h2>{"Come say hello."}</h2>
<address>{"121 Lebovic Avenue, Unit C4"}<br />{"Toronto, Ontario M1L 0J2"}</address>
<dl>
<div>
<dt>{"Telephone"}</dt>
<dd><a href="tel:+14162888831">{"+1 416 288 8831"}</a></dd>
</div>
<div>
<dt>{"Email"}</dt>
<dd><a href="mailto:architects@lumbao.com">{"architects@lumbao.com"}</a></dd>
</div>
<div>
<dt>{"Studios"}</dt>
<dd>{"Toronto · Texas"}</dd>
</div>
</dl><a className="text-link" href="https://maps.google.com/?q=121+Lebovic+Avenue+Toronto" target="_blank" rel="noreferrer">{"Open in maps ↗"}</a>
</div>
<ContactForm className="project-inquiry">
<div className="form-heading">
<p className="eyebrow">{"Project inquiry"}</p>
<p>{"A few details will help us connect you with the right person."}</p>
</div><label><span>{"Your name"}</span><input name="name" type="text" autoComplete="name" required={true} placeholder="Name" /></label><label><span>{"Email address"}</span><input name="email" type="email" autoComplete="email" required={true} placeholder="Email" /></label><label><span>{"Company"}</span><input name="company" type="text" autoComplete="organization" placeholder="Company or organization" /></label><label><span>{"Project type"}</span><select name="projectType">
<option value="">{"Select one"}</option>
<option>{"Residential"}</option>
<option>{"Mixed-use"}</option>
<option>{"Commercial"}</option>
<option>{"Industrial"}</option>
<option>{"Interior design"}</option>
<option>{"Other"}</option>
</select></label><label className="form-message"><span>{"Tell us about the project"}</span><textarea name="message" rows="5" required={true} placeholder="Site, goals, timing, or anything else you'd like us to know"></textarea></label><button className="button button-large" type="submit">{"Send inquiry "}<span>{"↗"}</span></button>
<p className="form-note">{"Submitting opens your email app with these details ready to send."}</p>
</ContactForm>
</section>
<section className="contact-secondary">
<div>
<p className="eyebrow">{"New opportunities"}</p>
<h2>{"Careers &"}<br />{"collaboration."}</h2>
</div>
<div>
<p>{"Interested in joining the studio or working together in another way? We’d be glad to hear from you.\n                "}</p><a className="button" href="/careers">{"Explore careers "}<span>{"↗"}</span></a>
</div>
</section>
</main>
<SiteFooter />

</>); }
