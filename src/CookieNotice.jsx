import React,{useEffect,useState} from 'react';
export default function CookieNotice(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{try{setOpen(localStorage.getItem('lumbao-privacy-v1')!=='acknowledged');}catch{setOpen(true);}const show=()=>setOpen(true);window.addEventListener('lumbao-cookie-settings',show);return()=>window.removeEventListener('lumbao-cookie-settings',show);},[]);
 function close(){try{localStorage.setItem('lumbao-privacy-v1','acknowledged');}catch{}setOpen(false);}
 return open?<aside className="cookie-notice" aria-label="Cookie information"><div><strong>Your privacy</strong><p>We do not use advertising or analytics cookies. We save your choice to dismiss this notice in your browser. <a href="/privacy">Read our privacy policy</a>.</p></div><button type="button" onClick={close}>Got it</button></aside>:null;
}
