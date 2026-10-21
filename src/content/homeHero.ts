// Home hero: each shape morphs from state `a` to state `b` as the hero pins.
// Used at build time (first frame) and in the browser (scroll-driven frames).

import { pillLR, type ShapeName } from '@/lib/shapes'
import type { Palette } from '@/lib/markup'

/** [x, y, scale, rotation (radians), z-order] */
export type HeroState = [number, number, number, number, number]
export type HeroItem = { fn: ShapeName | 'name'; k: string; a: HeroState; b: HeroState; am: HeroState; bm: HeroState; tm?: number }

export const PAL: Palette = {
	l: { D: '#4F50CF', Y: '#FFC857', K: '#F49AD8', P: '#7476F0', I: '#DAECFF', S: '#DAECFF', O: '#FF5B4D' },
	d: { D: '#141240', Y: '#C98A26', K: '#8E3F86', P: '#3E40AE', I: '#1E1B52', S: '#FFE7A6', O: '#FF6B5C' },
}

// Desktop states (a → b) from the sketch's S list, phone states (am → bm) from its SM list.
export const HERO: HeroItem[] = [
	{ fn: 'blob', k: 'D', a: [340, 200, 6, 0, 0], b: [340, 200, 6, .3, 0], am: [195, 350, 4.6, 0, 0], bm: [195, 350, 4.6, .3, 0] },
	{ fn: 'blob', k: 'Y', a: [195, -80, 2.6, .9, 2], b: [235, -55, 2.15, .9, 3], am: [70, -30, 1.9, .9, 2], bm: [110, -20, 1.6, .9, 3] },
	{ fn: 'clover', k: 'K', a: [615, 60, 1.72, .3, 3], b: [548, 146, 1.82, 1.571, 8], tm: -1, am: [360, 120, 1.25, .3, 3], bm: [195, 580, 1.55, 1.571, 6] },
	{ fn: 'sun', k: 'P', a: [600, 335, 1.95, .1, 2], b: [668, 22, 1.55, .6, 4], am: [330, 600, 1.45, .1, 2], bm: [372, 40, 1.1, .6, 4] },
	{ fn: 'flower', k: 'Y', a: [330, 382, 1.78, .25, 3], b: [615, 415, 1.9, .9, 3], am: [150, 700, 1.4, .25, 3], bm: [350, 724, 1.5, .9, 3] },
	{ fn: 'blob', k: 'P', a: [25, 345, 2.35, 2.2, 2], b: [0, 260, 2.6, .5, 2], am: [0, 520, 1.8, 2.2, 2], bm: [-10, 380, 2, .5, 2] },
	{ fn: 'name', k: 'I', a: [272, 150, .9, -.07, 7], b: [250, 262, .15, .4, 1.5], tm: 1, am: [208, 300, .64, -.07, 7], bm: [195, 330, .1, .4, 1.5] },
	{ fn: 'star', k: 'S', a: [600, 330, .55, .25, 8], b: [58, 78, .5, 1.2, 9], am: [330, 500, .42, .25, 8], bm: [56, 112, .4, 1.2, 9] },
	{ fn: 'badge', k: 'O', a: [70, 249, .54, .17, 8], b: [250, 262, 1.95, .5, 7], tm: -1, am: [100, 452, .52, .17, 8], bm: [195, 330, 1.6, .5, 7] },
]
export const BADGE_INDEX = 8


const cl = (v: number) => Math.max(0, Math.min(1, v))
const e3 = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export type FrameItem = { i: number; x: number; y: number; rot: number; sx: number; sy: number; z: number }

/** Each shape's position, rotation (radians) and scale for scroll progress p (0–1), back-to-front. */
export function frameValues(p: number, mobile: boolean): FrameItem[] {
	return HERO.map((s, i) => {
		const t = s.tm || 0, k = e3(cl((p - .1 - .12 * (t + 1)) / .55)), q = Math.sin(Math.PI * k) * .08
		const A = mobile ? s.am : s.a, B = mobile ? s.bm : s.b, sg = i % 2 ? 1 : -1
		const v = [0, 1, 2, 3, 4].map(j => A[j] + (B[j] - A[j]) * k)
		return { i, x: v[0], y: v[1], rot: v[3], sx: v[2] * (1 + sg * q), sy: v[2] * (1 - sg * q), z: v[4] }
	}).sort((A, B) => A.z - B.z)
}

/** The same, as SVG transforms (for the drawing shown before the canvas takes over, or without script). */
export const frame = (p: number, mobile: boolean) => frameValues(p, mobile).map(o => ({
	i: o.i, z: o.z,
	transform: 'translate(' + o.x.toFixed(1) + ' ' + o.y.toFixed(1) + ') rotate(' + (o.rot * 57.2958).toFixed(1) + ') scale(' + o.sx.toFixed(3) + ' ' + o.sy.toFixed(3) + ')',
}))

/** The big background blob is always the header's own background color, so it never needs drawing. */
export const BACKDROP_INDEX = 0
/** "Product designer" badge text lines: [text, baseline y] in shape units (26px, dy -.15em then +1.15em). */
export const BADGE_LINES: [string, number][] = [['Product', -3.9], ['designer', 26]]

/** "Product designer" fades out over the first 26%. */
export const badgeTextOpacity = (p: number) => cl(1 - p / .26)
/** The two end lines fade in from 72%; returns [opacity, margin-top px]. */
export function endLine(p: number, i: number): [number, number] {
	const v = cl(cl((p - .72) / .25) * 1.4 - i * .4)
	return [v, 14 * (1 - v)]
}

/** Two stadiums behind "Allie" / "Goodson", sized to the rendered text widths. */
export const nameD = (w1: number, w2: number) => pillLR(-292, -244 + w1 + 46, -44, 58) + pillLR(-168, -120 + w2 + 46, 44, 58)
/** Corben 700 at 66px with -1.3px tracking, measured in the browser; re-measured once fonts load. */
export const NAME_W: [number, number] = [192.3, 359.8]
