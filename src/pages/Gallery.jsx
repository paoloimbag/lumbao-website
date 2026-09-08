import React from "react";
import { SiteHeader, SiteFooter, HeroVideo, Counter, LightboxButton, FilterButton, PortfolioItem, JobCard, ContactForm } from "../components.jsx";
export default function Gallery() { return (<><a className="skip-link" href="#main-content">{"Skip to content"}</a>
<SiteHeader home={false} active="/gallery" />
<main id="main-content">
<section className="gallery-page-hero">
<p className="eyebrow">{"Project gallery · 01—14"}</p>
<h1>{"Architecture,"}<br />{"frame by "}<em>{"frame."}</em></h1>
<div>
<p>{"A visual archive of design, creativity, and architectural solutions across the studio’s portfolio.\n                "}</p>
<p>{"Click any image to view it full screen."}</p>
</div>
</section>
<section className="gallery-archive" aria-labelledby="gallery-title">
<div className="gallery-archive-heading">
<h2 id="gallery-title">{"Project images"}</h2><a className="text-link" href="/projects">{"View project index\n                    ↗"}</a>
</div>
<div className="gallery-mosaic">
<figure className="gallery-tile gallery-tile-wide"><LightboxButton><img loading="lazy" src="/assets/gallery-springbank.webp" alt="Springbank exterior architectural visualization" /></LightboxButton>
<figcaption><span>{"01"}</span><strong>{"Springbank"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-wasaga-lux-1920.webp" data-original-src="/assets/gallery-wasaga-lux.jpg" srcSet="/assets/gallery-wasaga-lux-640.webp 640w, /assets/gallery-wasaga-lux-1280.webp 1280w, /assets/gallery-wasaga-lux-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="1125" decoding="async" alt="Wasaga Lux architectural visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"02"}</span><strong>{"Wasaga Lux"}</strong></figcaption>
</figure>
<figure className="gallery-tile gallery-tile-tall"><LightboxButton><img src="/assets/gallery-mccowan-1920.webp" data-original-src="/assets/gallery-mccowan.jpg" srcSet="/assets/gallery-mccowan-640.webp 640w, /assets/gallery-mccowan-1280.webp 1280w, /assets/gallery-mccowan-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="2000" decoding="async" alt="McCowan residential building visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"03"}</span><strong>{"McCowan"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-brock-1920.webp" data-original-src="/assets/gallery-brock.jpg" srcSet="/assets/gallery-brock-640.webp 640w, /assets/gallery-brock-1280.webp 1280w, /assets/gallery-brock-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="1000" decoding="async" alt="Brock project architectural visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"04"}</span><strong>{"Brock"}</strong></figcaption>
</figure>
<figure className="gallery-tile gallery-tile-tall"><LightboxButton><img src="/assets/gallery-waterfront.webp" alt="Wasaga Waterfront architectural visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"05"}</span><strong>{"Wasaga Waterfront"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-gowan-1545.webp" data-original-src="/assets/gallery-gowan.jpg" srcSet="/assets/gallery-gowan-640.webp 640w, /assets/gallery-gowan-1280.webp 1280w, /assets/gallery-gowan-1545.webp 1545w" sizes="(max-width: 700px) 100vw, 70vw" width="1545" height="2000" decoding="async" alt="Gowan architectural project" loading="lazy" /></LightboxButton>
<figcaption><span>{"06"}</span><strong>{"Gowan"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-weston-1920.webp" data-original-src="/assets/gallery-weston.jpg" srcSet="/assets/gallery-weston-640.webp 640w, /assets/gallery-weston-1280.webp 1280w, /assets/gallery-weston-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="2000" decoding="async" alt="Weston architectural project" loading="lazy" /></LightboxButton>
<figcaption><span>{"07"}</span><strong>{"Weston"}</strong></figcaption>
</figure>
<figure className="gallery-tile gallery-tile-wide"><LightboxButton><img src="/assets/gallery-mccowan-02.webp" alt="McCowan architectural study" loading="lazy" /></LightboxButton>
<figcaption><span>{"08"}</span><strong>{"McCowan · Study"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-centre-1920.webp" data-original-src="/assets/gallery-centre.jpg" srcSet="/assets/gallery-centre-640.webp 640w, /assets/gallery-centre-1280.webp 1280w, /assets/gallery-centre-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="1125" decoding="async" alt="Centre Street architectural project" loading="lazy" /></LightboxButton>
<figcaption><span>{"09"}</span><strong>{"Centre Street"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-albion-1920.webp" data-original-src="/assets/gallery-albion.jpg" srcSet="/assets/gallery-albion-640.webp 640w, /assets/gallery-albion-1280.webp 1280w, /assets/gallery-albion-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="1125" decoding="async" alt="Albion Vaughan architectural project" loading="lazy" /></LightboxButton>
<figcaption><span>{"10"}</span><strong>{"Albion Vaughan"}</strong></figcaption>
</figure>
<figure className="gallery-tile gallery-tile-wide"><LightboxButton><img src="/assets/gallery-more-01-1920.webp" data-original-src="/assets/gallery-more-01.jpg" srcSet="/assets/gallery-more-01-640.webp 640w, /assets/gallery-more-01-1280.webp 1280w, /assets/gallery-more-01-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="2000" height="1137" decoding="async" alt="Lumbao commercial architecture project" loading="lazy" /></LightboxButton>
<figcaption><span>{"11"}</span><strong>{"Commercial"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-more-02-1024.webp" data-original-src="/assets/gallery-more-02.jpg" srcSet="/assets/gallery-more-02-640.webp 640w, /assets/gallery-more-02-1024.webp 1024w" sizes="(max-width: 700px) 100vw, 70vw" width="1024" height="682" decoding="async" alt="Lumbao completed building project" loading="lazy" /></LightboxButton>
<figcaption><span>{"12"}</span><strong>{"Built work"}</strong></figcaption>
</figure>
<figure className="gallery-tile"><LightboxButton><img src="/assets/gallery-more-03-1920.webp" data-original-src="/assets/gallery-more-03.jpg" srcSet="/assets/gallery-more-03-640.webp 640w, /assets/gallery-more-03-1280.webp 1280w, /assets/gallery-more-03-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="1920" height="1080" decoding="async" alt="Lumbao architectural visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"13"}</span><strong>{"Design study"}</strong></figcaption>
</figure>
<figure className="gallery-tile gallery-tile-wide"><LightboxButton><img src="/assets/gallery-more-04-1920.webp" data-original-src="/assets/gallery-more-04.jpg" srcSet="/assets/gallery-more-04-640.webp 640w, /assets/gallery-more-04-1280.webp 1280w, /assets/gallery-more-04-1920.webp 1920w" sizes="(max-width: 700px) 100vw, 70vw" width="1920" height="1080" decoding="async" alt="Lumbao architectural project visualization" loading="lazy" /></LightboxButton>
<figcaption><span>{"14"}</span><strong>{"Mixed-use"}</strong></figcaption>
</figure>
</div>
<p className="gallery-source">{"Images sourced from the studio’s "}<a href="https://www.lumbao.com/projects" target="_blank" rel="noreferrer">{"official project gallery ↗"}</a></p>
</section>
<section className="next-project page-cta">
<p className="eyebrow">{"Explore the thinking"}</p>
<h2>{"Every image begins with an idea."}</h2><a className="button button-large" href="/projects">{"Explore\n                projects "}<span>{"↗"}</span></a>
</section>
</main>

<SiteFooter />

</>); }
