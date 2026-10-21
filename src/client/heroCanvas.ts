// Paints the home hero's shapes onto one canvas. Redrawing the same shapes as SVG every
// scroll frame made Firefox repaint the whole screen-sized header each time and stutter
// (~20ms frames, spikes over 200ms); a canvas fill of the same paths stays near 9ms.
// The SVG drawing from the server stays in the page (hidden once the canvas is ready) as
// the source of the shapes, colors and fonts, and as the fallback without script.

import { BACKDROP_INDEX, BADGE_INDEX, BADGE_LINES, badgeTextOpacity, frameValues, HERO } from '@/content/homeHero'

type Svg = { g: SVGSVGElement[] | SVGGElement[] }
type Geo = { ox: number; oy: number; k: number }

export function createHeroCanvas(hero: HTMLElement, stage: HTMLElement, svgs: { d: Svg; m: Svg }) {
	const cv = document.createElement('canvas')
	cv.className = 'hcv'
	cv.setAttribute('aria-hidden', 'true')
	hero.insertBefore(cv, hero.firstChild)
	const ctx = cv.getContext('2d')!
	const paths: Path2D[] = []
	const fills: string[] = []
	let nameFill = '#FF5B4D', badgeFont = '600 26px sans-serif'
	let geo: Geo = { ox: 0, oy: 0, k: 1 }, dpr = 1, mobile = false, ready = false, lastP = 0

	const source = () => (mobile ? svgs.m : svgs.d).g as SVGGElement[]
	const readShapes = () => {
		source().forEach((g, i) => { const p = g.querySelector('path'); if (p) paths[i] = new Path2D(p.getAttribute('d') ?? '') })
	}
	// Colors follow light/dark mode through the SVG's CSS classes.
	const readColors = () => {
		source().forEach((g, i) => { const p = g.querySelector('path'); if (p) fills[i] = getComputedStyle(p).fill })
		const t = source()[6]?.querySelector('text')
		if (t) nameFill = getComputedStyle(t).fill
		badgeFont = '600 26px ' + getComputedStyle(document.body).fontFamily
	}

	/** Size the canvas to the hero and find where the stage's (0,0) sits, after any resize or mode change. */
	function resize(isMobile: boolean) {
		mobile = isMobile
		dpr = Math.min(2, window.devicePixelRatio || 1)
		const h = hero.getBoundingClientRect(), s = stage.getBoundingClientRect()
		cv.width = Math.round(h.width * dpr)
		cv.height = Math.round(h.height * dpr)
		geo = { ox: (s.left - h.left) * dpr, oy: (s.top - h.top) * dpr, k: (s.width / (mobile ? 390 : 680)) * dpr }
		readShapes()
		readColors()
		if (ready) draw(lastP)
	}

	// "Allie" / "Goodson": Corben 700 66px, -1.3px tracking. The SVG centers them with
	// dominant-baseline:central (halfway between the font's ascent and descent), which canvas
	// has no exact match for, so the baseline is shifted by the same amount from the font's metrics.
	// Browsers without canvas letterSpacing get it letter by letter.
	const spacing = 'letterSpacing' in (ctx as object)
	let central = 0
	const measureCentral = () => {
		ctx.font = '700 66px Corben'
		const m = ctx.measureText('Allie')
		central = ((m.fontBoundingBoxAscent ?? 0) - (m.fontBoundingBoxDescent ?? 0)) / 2
	}
	const nameText = (text: string, x: number, y: number) => {
		y += central
		if (spacing) { ctx.fillText(text, x, y); return }
		for (const ch of text) { ctx.fillText(ch, x, y); x += ctx.measureText(ch).width - 1.3 }
	}

	function draw(p: number) {
		lastP = p
		if (!ready) return
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.clearRect(0, 0, cv.width, cv.height)
		for (const o of frameValues(p, mobile)) {
			if (o.i === BACKDROP_INDEX || !paths[o.i]) continue
			ctx.setTransform(geo.k, 0, 0, geo.k, geo.ox, geo.oy)
			ctx.translate(o.x, o.y)
			ctx.rotate(o.rot)
			ctx.scale(o.sx, o.sy)
			ctx.fillStyle = fills[o.i]
			ctx.fill(paths[o.i])
			if (HERO[o.i].fn === 'name') {
				ctx.font = '700 66px Corben'
				if (spacing) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '-1.3px'
				ctx.textAlign = 'left'
				ctx.textBaseline = 'alphabetic'
				ctx.fillStyle = nameFill
				nameText('Allie', -244, -46)
				nameText('Goodson', -120, 42)
				if (spacing) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px'
			} else if (o.i === BADGE_INDEX) {
				const a = badgeTextOpacity(p)
				if (a > 0) {
					ctx.globalAlpha = a
					ctx.font = badgeFont
					ctx.textAlign = 'center'
					ctx.textBaseline = 'alphabetic'
					ctx.fillStyle = '#2A1240'
					for (const [t, y] of BADGE_LINES) ctx.fillText(t, 0, y)
					ctx.globalAlpha = 1
				}
			}
		}
	}

	// Theme switches change the SVG's fill colors; repaint with the new ones.
	const mo = new MutationObserver(() => { readColors(); draw(lastP) })
	mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

	return {
		resize,
		draw,
		/** Take over from the SVG once the fonts are in (so the name is drawn in Corben). */
		start(p: number) {
			measureCentral()
			ready = true
			draw(p)
			hero.classList.add('painted')
		},
		/** The name's pill shapes change once the real text widths are measured. */
		refreshShapes() { readShapes(); draw(lastP) },
		destroy() { mo.disconnect(); cv.remove(); hero.classList.remove('painted') },
	}
}
