import React, { createContext, useContext, useEffect, useRef, useState, Children, cloneElement } from 'react';
import { flushSync } from 'react-dom';
export { default as SiteFooter } from './Footer.jsx';
const SiteContext = createContext(null);
const reduceQuery = '(prefers-reduced-motion: reduce)';

export function SiteProvider({ children }) {
    const [category, setCategory] = useState('all');
    const [image, setImage] = useState(null);
    const dialog = useRef(null);
    useEffect(() => {
        if (image && !dialog.current.open) dialog.current.showModal();
        if (!image && dialog.current.open) dialog.current.close();
    }, [image]);
    return <SiteContext.Provider value={{category, setCategory, setImage}}>
        {children}
        <dialog className="lightbox" ref={dialog} onClose={() => setImage(null)} onClick={e => {if(e.target === e.currentTarget) setImage(null);}}>
            <button className="lightbox-close" aria-label="Close image" onClick={() => setImage(null)}>Close</button>
            {image && <img src={image.src} alt={image.alt} />}
        </dialog>
    </SiteContext.Provider>;
}

export function SiteHeader({ home, active }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const header = useRef(null), menu = useRef(null), nav = useRef(null);
    useEffect(() => {
        const desktop = matchMedia('(min-width: 1100px)');
        const close = () => setOpen(false);
        desktop.addEventListener('change', close);
        return () => desktop.removeEventListener('change', close);
    }, []);
    useEffect(() => {
        document.body.classList.toggle('menu-open', open);
        if (open) nav.current.querySelector('a')?.focus();
        const keydown = e => {
            if (!open) return;
            if (e.key === 'Escape') {setOpen(false); menu.current.focus();}
            const links = nav.current.querySelectorAll('a');
            if (e.key === 'Tab' && e.shiftKey && document.activeElement === menu.current) {e.preventDefault(); links[links.length-1].focus();}
            else if (e.key === 'Tab' && !e.shiftKey && document.activeElement === links[links.length-1]) {e.preventDefault(); menu.current.focus();}
        };
        document.addEventListener('keydown', keydown);
        return () => {document.body.classList.remove('menu-open'); document.removeEventListener('keydown', keydown);};
    }, [open]);
    useEffect(() => {
        if (!home) return;
        const update = () => setScrolled(document.querySelector('.hero').getBoundingClientRect().bottom <= header.current.offsetHeight);
        update(); window.addEventListener('scroll', update, {passive:true}); window.addEventListener('resize', update);
        return () => {window.removeEventListener('scroll', update); window.removeEventListener('resize', update);};
    }, [home]);
    const links = [['/projects','Projects'],['/about','About us'],['/services','Services'],['/gallery','Gallery'],['/careers','Careers'],['/contact','Contact']];
    return <header ref={header} className={`site-header${home?'':' inner-header'}${scrolled?' is-scrolled':''}`}>
        <a className="brand" href={home?'#home':'/'} aria-label="Lumbao Architects home"><img src="/assets/logo.svg" alt="" /><span>Lumbao Architects</span></a>
        <button ref={menu} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open?'Close':'Menu'}</button>
        <nav ref={nav} id="site-nav" className={open?'is-open':''} aria-label="Main navigation">
            {links.map(([href,label]) => <a key={href} href={href} aria-current={active===href || (href==='/projects' && (active || "").startsWith('/project-'))?'page':undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
    </header>;
}

export function HeroVideo({poster, source, mobileSource}) {
    const ref = useRef(null);
    useEffect(() => {
        const video = ref.current, hero = video.closest('.hero');
        const reduced = matchMedia(reduceQuery);
        let visible = true, frame;
        let ready = document.readyState === "complete";
        const selectedSource = mobileSource && matchMedia("(max-width: 620px)").matches ? mobileSource : source;
        const sync = () => {
            if (!ready || document.hidden || !visible || reduced.matches || navigator.connection?.saveData) {video.pause();return;}
            if (!video.getAttribute('src')) {video.src=selectedSource;video.load();}
            video.play().catch(() => {});
        };
        const scroll = () => {
            if (frame) return;
            frame=requestAnimationFrame(() => {frame=null;const y=reduced.matches?0:Math.min(Math.max(scrollY/hero.offsetHeight,0),1)*72;video.style.setProperty('--parallax-y', `${y}px`);});
        };
        const observer = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {visible=entry.isIntersecting;sync();}) : null;
        const loaded=()=>{ready=true;sync();};
        window.addEventListener("load",loaded,{once:true});
        observer?.observe(hero);sync();scroll();
        reduced.addEventListener('change',sync); document.addEventListener('visibilitychange',sync);window.addEventListener('scroll',scroll,{passive:true});
        return () => {window.removeEventListener("load",loaded);observer?.disconnect();cancelAnimationFrame(frame);video.pause();reduced.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);window.removeEventListener('scroll',scroll);};
    }, [source, mobileSource]);
    return <video ref={ref} className="hero-video" preload="none" muted loop playsInline poster={poster} aria-hidden="true" />;
}

export function Counter({goal, suffix=''}) {
    const [value,setValue]=useState(goal); const ref=useRef(null);
    useEffect(() => {
        const reduced=matchMedia(reduceQuery);if(reduced.matches || !('IntersectionObserver' in window))return;
        let frame=null;
        const finish=()=>{cancelAnimationFrame(frame);frame=null;setValue(goal);};
        const observer=new IntersectionObserver(entries=>{
            if(!entries.some(e=>e.isIntersecting))return;
            observer.disconnect();const start=performance.now();
            const tick=now=>{const p=Math.min((now-start)/1600,1);const eased=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;setValue(Math.round(goal*eased));if(p<1)frame=requestAnimationFrame(tick);else finish();};
            frame=requestAnimationFrame(tick);
        },{threshold:.6});
        observer.observe(ref.current);
        const change=()=>{if(reduced.matches){observer.disconnect();finish();}};
        const hidden=()=>{if(document.hidden && frame!==null)finish();};
        reduced.addEventListener('change',change);document.addEventListener('visibilitychange',hidden);
        return()=>{observer.disconnect();cancelAnimationFrame(frame);reduced.removeEventListener('change',change);document.removeEventListener('visibilitychange',hidden);};
    },[goal]);
    return <span ref={ref} data-count-to={goal} data-count-suffix={suffix} aria-hidden="true">{value}{suffix}</span>;
}

export function LightboxButton({children,...props}) {
    const {setImage}=useContext(SiteContext);
    return <button {...props} data-lightbox="" onClick={e=>{const img=e.currentTarget.querySelector('img');if(img)setImage({src:img.dataset.originalSrc||img.currentSrc||img.src,alt:img.alt});}}>{children}</button>;
}
export function FilterButton({category,children,className='',...props}) {
    const state=useContext(SiteContext);const selected=state.category===category;
    return <button {...props} className={className.replace(/\bis-active\b/g,'')+(selected?' is-active':'')} aria-pressed={selected} onClick={()=>state.setCategory(category)}>{children}</button>;
}
export function PortfolioItem({category,children,...props}) {
    const state=useContext(SiteContext);
    return <a {...props} hidden={state.category!=='all'&&!category.split(' ').includes(state.category)}>{children}</a>;
}
export function ContactForm({children,...props}) {
    const submit=e=>{
        e.preventDefault();const data=new FormData(e.currentTarget);
        const subject=encodeURIComponent(`Project inquiry from ${data.get('name')}`);
        const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')||'Not provided'}\nProject type: ${data.get('projectType')||'Not specified'}\n\nProject details:\n${data.get('message')}`);
        location.href=`mailto:architects@lumbao.com?subject=${subject}&body=${body}`;
    };
    return <form {...props} onSubmit={submit}>{children}</form>;
}

export function JobCard({children,initialOpen=false,...props}) {
    const ref=useRef(null), animation=useRef(null), desired=useRef(initialOpen);
    const [open,setOpen]=useState(initialOpen), [expanded,setExpanded]=useState(initialOpen);
    const finish=()=>{if(animation.current){animation.current.onfinish=null;animation.current.cancel();animation.current=null;}setOpen(desired.current);setExpanded(desired.current);ref.current.style.removeProperty('overflow');};
    useEffect(()=>{
        const reduced=matchMedia(reduceQuery), settle=()=>{if(animation.current)finish();};
        const change=()=>{if(reduced.matches)settle();};
        reduced.addEventListener('change',change);window.addEventListener('resize',settle);
        return()=>{animation.current?.cancel();reduced.removeEventListener('change',change);window.removeEventListener('resize',settle);};
    },[]);
    const toggle=e=>{
        e.preventDefault();const card=ref.current;const start=card.getBoundingClientRect().height;
        desired.current=!desired.current;
        if(animation.current){animation.current.onfinish=null;animation.current.cancel();animation.current=null;}
        if(matchMedia(reduceQuery).matches || !card.animate){finish();return;}
        flushSync(()=>{setOpen(true);setExpanded(desired.current);});
        const style=getComputedStyle(card);
        const end=desired.current?card.getBoundingClientRect().height:card.querySelector('summary').getBoundingClientRect().height+parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
        card.style.overflow='hidden';
        animation.current=card.animate([{height:`${start}px`},{height:`${end}px`}],{duration:320,easing:'cubic-bezier(.2,.7,.2,1)'});
        animation.current.onfinish=finish;
    };
    return <details {...props} ref={ref} open={open} data-expanded={expanded}>
        {Children.map(children,child=>{
            if(!React.isValidElement(child))return child;
            if(child.type==='summary')return cloneElement(child,{onClick:toggle},Children.map(child.props.children,c=>React.isValidElement(c)&&c.type==='b'?cloneElement(c,{},expanded?'Close role':'View role'):c));
            return cloneElement(child,{inert:open&&!expanded?true:undefined});
        })}
    </details>;
}
