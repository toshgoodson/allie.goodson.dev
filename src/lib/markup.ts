// Build-time HTML helpers. Pages are written as HTML strings copied from the
// approved sketches; these helpers fill in what the sketches generated with
// script (shapes, badges, nav) and apply the phone-layout overrides.

import sizes from '@/content/imageSizes.json'
import { shapeD, type ShapeName } from './shapes'

export const EMAIL = 'allie@goodson.dev'
export const LINKEDIN = 'https://www.linkedin.com/in/alliegoodson/'
// Not the PDF itself: PDF-tool extensions stick "Edit"/"Sign" buttons next to any link ending in .pdf.
// public/resume.html forwards to the PDF, so that's where to change the file name.
export const RESUME = '/resume'

/** Two palettes keyed by letter; shapes use class="f-<letter>" so dark mode is pure CSS. */
export type Palette = { l: Record<string, string>; d: Record<string, string> }
/** [shape, palette key, cx, cy, r, rotation] */
export type HeroShape = [ShapeName, string, number, number, number, number]

// ---- Tabler outline icons (paths copied from the sketches) ----
const ic = (paths: string, extra = '') => `<svg class="ic${extra}" viewBox="0 0 24 24">${paths}</svg>`
export const ICON = {
	sun: ic('<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>', ' i-sun'),
	moon: ic('<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>', ' i-moon'),
	menu: ic('<path d="M4 6h16M4 12h16M4 18h16"/>', ' i-menu'),
	x: ic('<path d="M18 6l-12 12M6 6l12 12"/>', ' i-x'),
	arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
	copy: ic('<path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>', ' i-cp'),
	check: ic('<path d="M5 12l5 5l10 -10"/>', ' i-ok'),
	mail: ic('<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/>'),
	linkedin: ic('<path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"/>'),
	file: ic('<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/><path d="M9 9l1 0"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/>'),
	check16: '<svg class="ic" viewBox="0 0 24 24" style="font-size:16px;stroke-width:2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
	arrowRight: '<svg class="ic" viewBox="0 0 24 24" style="font-size:32px"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
}
export const NEW_TAB = '<span class="sr"> (opens in a new tab)</span>'

// ---- Shapes ----
export const paletteCss = (pal: Palette) =>
	Object.keys(pal.l).map(k => `.f-${k}{fill:${pal.l[k]}}html.dk .f-${k}{fill:${pal.d[k]}}`).join('')

export const shapes = (list: HeroShape[]) =>
	list.map(([fn, k, cx, cy, r, rot]) => `<path class="f-${k}" d="${shapeD(fn, cx, cy, r, rot)}"/>`).join('')

/** Scalloped hero badge with a two-line label. */
export const badge = (X: number, Y: number, R: number, rot: number, lines: string[], fs: number, k: string) =>
	`<path class="f-${k}" d="${shapeD('badge', X, Y, R, .17)}"/>` +
	`<text x="${X}" y="${Y}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="#2A1240" transform="rotate(${rot} ${X} ${Y})">` +
	lines.map((l, i) => `<tspan x="${X}" dy="${i ? '1.2em' : '-.2em'}">${l}</tspan>`).join('') + '</text>'

/** "What changed" outcome cards: [shape, color, title, text]. */
export const outcomes = (list: [ShapeName, string, string, string][]) =>
	list.map(([fn, c, b, s]) =>
		`<div class="oc"><svg viewBox="-110 -110 220 220"><path d="${shapeD(fn)}" fill="${c}"/></svg><b>${b}</b><span>${s}</span></div>`).join('')

// ---- Nav ----
type NavKey = 'work' | 'about' | 'contact'
const LINKS: [NavKey | 'resume', string, string][] = [
	['work', 'Work', '/#work'],
	['about', 'About', '/about'],
	['contact', 'Contact', '/contact'],
	['resume', 'Resume', RESUME],
]
const link = (k: string, label: string, href: string, active: string | null, icon: string) => {
	const on = k === active ? ' class="on" aria-current="page"' : ''
	const blank = k === 'resume' ? ' target="_blank" rel="noopener"' : ''
	return `<a href="${href}" data-k="${k}"${on}${blank}>${label}${k === 'resume' ? ` ${icon}${NEW_TAB}` : ''}</a>`
}
export const navLinks = (active: string | null, icon: string) =>
	LINKS.map(([k, l, h]) => link(k, l, h, active, icon)).join('')

export const themeToggle = () =>
	`<button class="tg" id="tg" type="button" aria-label="Switch to dark mode"><svg class="bg" viewBox="-104 -104 208 208"><path class="cl" d="${shapeD('clover')}"/></svg><span class="ti">${ICON.sun}${ICON.moon}</span></button>`

/** Phone menu panel; opened by the hamburger (#hb). */
export const phoneMenu = (active: NavKey | null) =>
	`<div class="mm" id="mm" aria-hidden="true" inert>${navLinks(active, `<svg class="ic" viewBox="0 0 24 24">${ICON.arrowUpRight}</svg>`)}<svg class="mmd" viewBox="-110 -110 220 220"><path d="${shapeD('sun')}"/></svg></div>`

/** Header used on every page except home. */
export const innerNav = (active: NavKey) => `<header class="top"><div class="nbk"></div>
    <nav class="nav" aria-label="Main"><a class="nm" href="/">Allie Goodson</a><span style="flex:1"></span>
      <div class="lk dsk">${navLinks(active, `<svg class="ic" viewBox="0 0 24 24" style="font-size:12px">${ICON.arrowUpRight}</svg>`)}</div>
      <button class="hb mob" id="hb" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mm">${ICON.menu}${ICON.x}</button>${themeToggle()}${phoneMenu(active)}
    </nav>
  </header>`

// ---- Email row (About and Contact) ----
export const emailRow = () =>
	`<button class="hi-m" id="cpy" type="button"><span class="sr">Copy </span>${EMAIL}<span class="hi-i"><svg class="hi-b" viewBox="-110 -110 220 220"><path fill="#FFC857" d="${shapeD('burst', 0, 0, 104, .1)}"/></svg>${ICON.copy}${ICON.check}<span class="tip"><span class="t-c">copy</span><span class="t-ok">copied!</span></span></span></button>` +
	`<a class="hi-o" href="mailto:${EMAIL}">${ICON.mail}Open in email</a>`
export const copyStatus = '<span class="sr" id="cpys" role="status"></span>'

// ---- Transforms ----

/** Section numbers: drop the scalloped badge behind each .num (data-c is its color). */
const BADGE = shapeD('badge', 0, 0, 100, .2)
const numBadges = (html: string) =>
	html.replace(/<span class="num([^"]*)" data-c="(#[0-9A-Fa-f]{6})"([^>]*)>/g,
		(_, cls, c, rest) => `<span class="num${cls}"${rest}><svg class="bdg" viewBox="-110 -110 220 220"><path d="${BADGE}" fill="${c}"/></svg>`)

/** Local image names → /img/ paths with intrinsic size; lazy-load below the hero. */
const images = (html: string, lazy: boolean) =>
	html.replace(/<img\b([^>]*?)\ssrc="([\w.-]+\.(?:webp|jpg|png))"([^>]*)>/g, (all, a, f, b) => {
		const wh = (sizes as Record<string, number[]>)[f]
		if (!wh) throw new Error(`Unknown image ${f}`)
		return `<img${a} src="/img/${f}" width="${wh[0]}" height="${wh[1]}"${lazy ? ' loading="lazy"' : ''} decoding="async"${b}>`
	})

/** Every SVG here is decorative; the text next to it carries the meaning. */
const hideSvgs = (html: string) => html.replace(/<svg(?![^>]*aria-hidden)/g, '<svg aria-hidden="true"')

/**
 * Phone overrides: an element's data-m="…" holds its <600px styles (as in the
 * sketches). Each one becomes a class plus an `html.m` rule that wins over the
 * inline desktop style.
 */
function phoneStyles(html: string, prefix: string) {
	let n = 0
	const rules: string[] = []
	const out = html.replace(/<([a-z][a-z0-9]*)\b([^>]*?)\sdata-m="([^"]*)"([^>]*)>/g, (_, tag, a, m, b) => {
		const cls = `${prefix}${n++}`
		rules.push(`html.m .${cls}{${m.split(';').map((d: string) => d.trim()).filter(Boolean).map((d: string) => d + '!important').join(';')}}`)
		let attrs = a + b
		attrs = /\sclass="/.test(attrs) ? attrs.replace(/\sclass="([^"]*)"/, (_m: string, c: string) => ` class="${c} ${cls}"`) : ` class="${cls}"` + attrs
		return `<${tag}${attrs}>`
	})
	return { html: out, css: rules.join('\n') }
}

/** Runs all build-time transforms over a page. `hero` images load eagerly, `rest` lazily. */
export function buildPage(key: string, parts: { head?: string; hero: string; rest: string; heroBg?: string }, pal?: Palette) {
	let hero = parts.hero, bg = ''
	// Inner pages: the header runs edge to edge (filled with its biggest shape's color) while its content stays on the canvas.
	if (parts.heroBg && pal) {
		const end = hero.lastIndexOf('</div>')
		hero = hero.slice(0, end).replace('<div class="hero">', '<div class="hero hbg"><div class="hin">') + '</div>' + hero.slice(end)
		bg = `.hbg{background:${pal.l[parts.heroBg]}}html.dk .hbg{background:${pal.d[parts.heroBg]}}\n`
	}
	const raw = (parts.head ?? '') + '<main>' + images(hero, false) + images(parts.rest, true) + '</main>'
	const { html, css } = phoneStyles(hideSvgs(numBadges(raw)).replace(/<(\/?)h3>/g, '<$1h2>'), `m-${key}-`)
	return { html, css: (pal ? paletteCss(pal) + '\n' : '') + bg + css }
}
