// Runs first thing in <body>, before first paint: picks light/dark (saved choice, else the
// system setting), phone vs. desktop canvas, and the canvas zoom, so nothing
// flashes. The page always reserves room for a scrollbar (scrollbar-gutter), but this early the
// browser can still report the full window width, so the scrollbar's width is measured and taken off.
// Keep the zoom math in sync with fit() in src/client/site.ts, and
// --hs (home hero scale) in sync with src/client/home.ts. --bleed is the gutter beside the canvas
// (in canvas px), which full-width headers stretch into.
export const PHONE_QUERY = '(max-width: 599.98px)'

export const zoomFor = (mobile: boolean, width: number) =>
	mobile ? Math.max(.8, Math.min(1.5, width / 390)) : Math.max(.88, Math.min(1.6, width / 680))

export const BOOT_SCRIPT = `(function(){var d=document.documentElement,t;try{t=localStorage.getItem('theme')}catch(e){}
d.classList.toggle('dk',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches);
var s=document.createElement('div');s.style.cssText='position:absolute;top:-99px;width:60px;height:60px;overflow:scroll';document.body.appendChild(s);
var m=matchMedia('${PHONE_QUERY}').matches,w=Math.min(d.clientWidth,innerWidth-(s.offsetWidth-s.clientWidth));s.remove();d.classList.toggle('m',m);
d.style.setProperty('--z',String(m?Math.max(.8,Math.min(1.5,w/390)):Math.max(.88,Math.min(1.6,w/680))));
d.style.setProperty('--bleed',Math.max(0,(w/(m?Math.max(.8,Math.min(1.5,w/390)):Math.max(.88,Math.min(1.6,w/680)))-(m?390:680))/2)+'px');
d.style.setProperty('--hs',String(m?Math.min(w/390,innerHeight/700):Math.min(w/680,innerHeight/400)))})()`
