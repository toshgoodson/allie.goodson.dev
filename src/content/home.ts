import { buildPage, ICON, navLinks, phoneMenu, themeToggle } from '@/lib/markup'
import { shapeD, type ShapeName } from '@/lib/shapes'
import { BADGE_INDEX, frame, HERO, nameD, NAME_W, PAL } from './homeHero'

// ---- Hero: one <g> per shape, in first-frame order ----
function heroSvg(mobile: boolean) {
	return frame(0, mobile).map(({ i, transform }) => {
		const s = HERO[i]
		let inner: string
		if (s.fn === 'name') {
			inner = `<path class="f-${s.k}" d="${nameD(...NAME_W)}"/>` +
				'<text x="-244" y="-46" font-size="66" dominant-baseline="central" class="st f-O">Allie</text>' +
				'<text x="-120" y="42" font-size="66" dominant-baseline="central" class="st f-O">Goodson</text>'
		} else {
			inner = `<path class="f-${s.k}" d="${shapeD(s.fn)}"/>`
			if (i === BADGE_INDEX) inner += '<text class="ttl" x="0" y="0" text-anchor="middle" font-size="26" font-weight="600" fill="#2A1240" style="font-family:inherit"><tspan x="0" dy="-.15em">Product</tspan><tspan x="0" dy="1.15em">designer</tspan></text>'
		}
		return `<g data-i="${i}" transform="${transform}">${inner}</g>`
	}).join('')
}

// ---- Project rows: hover peek (desktop) and picture card (phone) ----
const fr = (src: string, l: number, t: number, w: number, h: number, r: number) =>
	`<div class="pf" style="left:${l}px;top:${t}px;width:${w}px;height:${h}px;transform:rotate(${r}deg)"><img src="${src}" alt=""></div>`
const pk = (src: string, l: number, t: number, w: number) =>
	`<img class="pk" src="${src}" alt="" style="left:${l}px;top:${t}px;width:${w}px;transform:rotate(12deg)">`
const blobs = (vb: string, c1: string, c2: string, b: [number, number, number], c: [number, number, number]) =>
	`<svg viewBox="${vb}"><path fill="${c1}" d="${shapeD('blob', ...b, .3)}"/><path fill="${c2}" d="${shapeD('clover', ...c, .4)}"/></svg>`

type Project = { name: string; tag: string; href: string; bg: string; peek: string; card: string }
const PROJECTS: Project[] = [
	{
		name: 'GlassHive', tag: 'SaaS UX/UI', href: '/glasshive', bg: '#7A5410',
		peek: blobs('0 0 680 120', '#FFC857', '#7476F0', [560, 96, 118], [300, -10, 70]) +
			fr('gh_c_booking.webp', 14, 30, 150, 97, -4) + fr('gh_c_month.webp', 176, 10, 172, 115, 3) + fr('gh_m_store.webp', 362, -8, 88, 131, -3) +
			fr('gh_f_review.webp', 462, 16, 92, 105, 4) + fr('gh_o_kit.webp', 566, 58, 150, 56, -3) + pk('gh_bee.webp', 588, -2, 66),
		card: blobs('0 0 346 170', '#FFC857', '#7476F0', [290, 150, 96], [130, -6, 58]) +
			fr('gh_c_month.webp', 14, 34, 168, 112, -3) + fr('gh_m_store.webp', 196, 14, 78, 118, 3) + fr('gh_f_review.webp', 268, 72, 66, 76, -4) + pk('gh_bee.webp', 282, 4, 50),
	},
	{
		name: 'BOSS Startup Science', tag: '0 to 1', href: '/boss-startup-science', bg: '#2A2C9E',
		peek: blobs('0 0 680 120', '#7476F0', '#DAECFF', [560, 96, 118], [300, -10, 70]) +
			fr('pv_b_topics.webp', 14, 26, 150, 97, -4) + fr('pv_b_donut.webp', 176, -8, 76, 109, 4) + fr('pv_b_collect.webp', 266, 8, 160, 115, -3) +
			fr('pv_b_pricing.webp', 440, 16, 100, 100, 4) + fr('pv_b_access.webp', 552, 52, 150, 82, -3) + pk('pv_b_tile.webp', 590, -6, 66),
		card: blobs('0 0 346 170', '#7476F0', '#DAECFF', [290, 150, 96], [130, -6, 58]) +
			fr('pv_b_collect.webp', 14, 30, 168, 121, -3) + fr('pv_b_donut.webp', 198, 14, 70, 100, 4) + fr('pv_b_pricing.webp', 262, 74, 74, 74, -3) + pk('pv_b_tile.webp', 290, 2, 46),
	},
]
const rows = PROJECTS.map(p =>
	`<a class="row" href="${p.href}" data-peek="96"><div class="layer"><div class="shot pv" style="background:${p.bg}"><div class="pvi">${p.peek}</div></div></div>` +
	`<div class="lab"><span style="font-size:38px;font-weight:500;letter-spacing:-1.5px">${p.name}</span><span style="font-size:12px">${p.tag}</span></div>` +
	`<div class="pcard" style="background:${p.bg}" aria-hidden="true">${p.card}</div></a>`).join('')

// Same link markup and sizing as the other pages' nav, so the pill lines up exactly everywhere
const resumeIcon = `<svg class="ic" viewBox="0 0 24 24" style="font-size:12px">${ICON.arrowUpRight}</svg>`

const head = /* html */ `<header class="top"><div class="nbk"></div>
  <nav class="nav" aria-label="Main">
    <a class="nm cb" id="nm" href="/" inert>Allie Goodson</a>
    <span style="flex:1"></span>
    <div class="pill" id="pill">
      <button class="bgr" id="hb" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mm">${ICON.menu}${ICON.x}</button>
      <div class="lk" id="lk" inert>${navLinks(null, resumeIcon)}</div>
    </div>
    ${themeToggle()}${phoneMenu(null)}
  </nav>
</header>`

const hero = /* html */ `<h1 class="sr">Allie Goodson, product designer</h1>
<div class="pinw"><span id="work"></span><span class="snapat s0"></span><span class="snapat s1"></span>
  <div class="pg">
    <div class="hero" id="hero"><div class="stage" id="stage">
      <svg viewBox="0 0 680 400" class="dsk" id="sv">${heroSvg(false)}</svg>
      <svg viewBox="0 0 390 700" class="mob" id="svm">${heroSvg(true)}</svg>
      <div class="tx end" data-m="left:195px;top:330px;width:320px" style="left:250px;top:256px;transform:translate(-50%,-50%);width:360px;text-align:center;white-space:nowrap;color:#2A1240;opacity:0;translate:0 14px"><div data-m="font-size:23px;line-height:31px" style="font-size:29px;font-weight:500;line-height:38px;letter-spacing:-.6px">Hard things, made easy.</div><div class="cr" data-m="font-size:27px;line-height:36px" style="font-size:34px;line-height:44px;letter-spacing:-.4px;color:#FFE1DC">And easy on the eyes.</div></div>
      <div class="tx end" data-m="left:195px;top:574px;width:272px" style="left:530px;top:146px;transform:translate(-50%,-50%);width:236px;text-align:center;font-size:16px;line-height:1.45;color:var(--blurb);opacity:0;translate:0 14px">I turn tangled systems into calm, clear interfaces. Research, flows, UI, and brand, usually as the only designer in the room.</div>
      <button class="cue" id="cue" type="button">Scroll<svg class="ic" viewBox="0 0 24 24"><path d="M6 9l6 6l6 -6"/></svg></button>
    </div></div>`

const rest = /* html */ `
    <section class="work" aria-labelledby="work-h"><div class="hd"><h2 id="work-h">Selected work</h2><span>02</span></div>
    <div class="rows">${rows}</div></section>
  </div>
  <div class="pinsp"></div>
</div>`

export default buildPage('home', { head, hero, rest }, PAL)
