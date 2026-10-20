import { preload } from 'react-dom'
import SiteScript from './SiteScript'

// Home opened at /#work (the Work link from another page): show the nav as it looks past the hero
// (name pill in, links pill open) right away, instead of sliding it open after load.
const HOME_AT_WORK = `(function(){if(location.hash!=='#work')return;var p=document.getElementById('pp'),l=document.getElementById('lk'),d=document.documentElement;
p.classList.add('instant','sc');l.querySelector('[data-k=work]').classList.add('on');document.getElementById('nm').inert=false;
if(d.classList.contains('m'))return;p.classList.add('op');l.inert=false;document.getElementById('pill').style.width=l.offsetWidth+'px'})()`

type Font = 'corben-700' | 'corben-400' | 'shantell-full'

/**
 * Renders one page: its static markup (built from the sketch at build time),
 * the generated phone/palette CSS, the theme-dissolve canvas, and the scripts.
 */
export default function Page({ id, built, fonts }: { id: string; built: { html: string; css: string }; fonts: Font[] }) {
	fonts.forEach(f => preload(`/fonts/${f}.woff2`, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }))
	return (
		<>
			<style href={`page-${id}`} precedence="default">{built.css}</style>
			<div className="pp" id="pp" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: built.html }} />
			{id === 'home' && <script dangerouslySetInnerHTML={{ __html: HOME_AT_WORK }} />}
			<div className="mmo" id="mmo" aria-hidden="true" />
			<canvas id="cv" aria-hidden="true" />
			<SiteScript home={id === 'home'} />
		</>
	)
}
