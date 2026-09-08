import React from "react";
import {SiteHeader,SiteFooter} from "../components.jsx";
export default function NotFound(){return <><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader home={false}/><main id="main-content" className="legal-page not-found"><p className="eyebrow">404 / Page not found</p><h1>A different<br/><em>direction.</em></h1><p>This page may have moved, or the address may be incomplete.</p><a className="button" href="/">Back to home ↗</a><a className="text-link" href="/projects">Explore projects ↗</a></main><SiteFooter/></>;}
