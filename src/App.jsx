import React, {useEffect} from 'react';
import CookieNotice from './CookieNotice.jsx';
import {SiteProvider} from './components.jsx';

function useReveals() {
    useEffect(()=>{
        const main=document.querySelector('.inner-page main');
        if(main){
            [...main.children].forEach(block=>{
                if(block.matches('figure'))block.classList.add('reveal');
                if(block.matches('section'))[...block.children].forEach(el=>el.classList.add('reveal'));
            });
            main.querySelectorAll('.values-grid,.team-grid,.portfolio-grid,.service-directory-list,.career-values,.job-list,.gallery-mosaic,.detail-gallery-grid').forEach(group=>{
                group.classList.remove('reveal');[...group.children].forEach(el=>el.classList.add('reveal'));
            });
        }
        const elements=document.querySelectorAll('.reveal');
        const reduced=matchMedia('(prefers-reduced-motion: reduce)');
        const show=()=>elements.forEach(el=>el.classList.add('is-visible'));
        if(reduced.matches||!('IntersectionObserver' in window)){show();return;}
        const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
        let frame2;const frame1=requestAnimationFrame(()=>{frame2=requestAnimationFrame(()=>elements.forEach(el=>observer.observe(el)));});
        const change=()=>{if(reduced.matches){observer.disconnect();show();}};
        reduced.addEventListener('change',change);
        return()=>{cancelAnimationFrame(frame1);cancelAnimationFrame(frame2);observer.disconnect();reduced.removeEventListener('change',change);};
    },[]);
}
export default function App({Page}) {
    useReveals();
    return <SiteProvider><Page /><CookieNotice /></SiteProvider>;
}
