import React from "react";
export default function Footer(){return (<footer className="site-footer">
<div className="footer-callout">
<p className="eyebrow">{"Start a conversation"}</p><a href="/contact"><span>{"Let’s make something"}</span>
<em>{"lasting."}</em><b aria-hidden="true">{"↗"}</b></a>
</div>
<div className="footer-main"><a className="brand" href="/"><img src="/assets/logo.svg" alt="" /><span>{"Lumbao\n                    Architects"}</span></a>
<div className="footer-office">
<p>{"Toronto studio"}</p>
<address>{"121 Lebovic Avenue, Unit C4"}<br />{"Toronto, Ontario M1L 0J2"}</address>
</div>
<nav className="footer-nav" aria-label="Footer navigation"><a href="/projects">{"Projects"}</a><a href="/gallery">{"Gallery"}</a><a href="/about">{"About"}</a><a href="/services">{"Services"}</a><a href="/careers">{"Careers"}</a></nav>
<div className="footer-connect">
<p>{"Connect"}</p><a href="mailto:architects@lumbao.com">{"architects@lumbao.com"}</a><a href="tel:+14162888831">{"+1 416 288 8831"}</a><a href="https://www.instagram.com/lumbaoarchitects/" target="_blank" rel="noreferrer">{"Instagram ↗"}</a>
</div>
</div>
<div className="footer-bottom">
<p>{"© 2026 Lumbao Architects"}</p><a href="/privacy">Privacy Policy</a><a href="/terms">Terms and Conditions</a><button type="button" onClick={()=>window.dispatchEvent(new Event("lumbao-cookie-settings"))}>Cookie settings</button>
<p>{"Toronto · Texas"}</p>
<p>{"Architecture shaped with care and clarity."}</p><a href="#main-content">{"Back to top ↑"}</a>
</div>
</footer>);}
