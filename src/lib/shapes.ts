// Hero shapes: every blob, sun, clover, star and badge is a smoothed polar curve.
// Ported from the approved sketches (F, smooth, shapeD); keep the math identical
// so paths match them to the tenth of a pixel.

export type Pt = [number, number]
export type ShapeName = keyof typeof F

const PI2 = Math.PI * 2

const sp = (p: number, e: number) => {
	const c = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e))
	return Math.pow(Math.pow(c, p) + Math.pow(s, p), -1 / p)
}

export const F = {
	burst: (a: number) => .82 + .18 * (1 - Math.pow(Math.abs(Math.sin(5 * a)), .55)),
	flower: (a: number) => .62 + .38 * Math.pow(Math.abs(Math.cos(3 * a)), .55),
	sun: (a: number) => .8 + .2 * Math.pow(Math.abs(Math.cos(7 * a)), .4),
	badge: (a: number) => .9 + .08 * Math.pow(Math.abs(Math.cos(8 * a)), .6),
	star: (a: number) => sp(.55, a),
	clover: (a: number) => .64 + .36 * Math.pow(Math.abs(Math.cos(2 * a)), .5),
	blob: (a: number) => .86 + .09 * Math.sin(3 * a + 1) + .05 * Math.cos(5 * a - .5),
}

/** Closed quadratic curve through the midpoints of P. */
export function smooth(P: Pt[]): string {
	const n = P.length, m = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], f = (v: number) => v.toFixed(1)
	const s = m(P[n - 1], P[0])
	let d = 'M' + f(s[0]) + ' ' + f(s[1])
	for (let i = 0; i < n; i++) {
		const p = P[i], q = m(p, P[(i + 1) % n])
		d += 'Q' + f(p[0]) + ' ' + f(p[1]) + ' ' + f(q[0]) + ' ' + f(q[1])
	}
	return d + 'Z'
}

export function shapeD(fn: ShapeName, cx = 0, cy = 0, r = 100, rot = 0): string {
	const P: Pt[] = []
	for (let i = 0; i < 144; i++) {
		const a = i / 144 * PI2, q = r * F[fn](a)
		P.push([cx + q * Math.cos(a + rot), cy + q * Math.sin(a + rot)])
	}
	return smooth(P)
}

/** Horizontal stadium from x0 to x1, centered on cy. */
export const pillLR = (x0: number, x1: number, cy: number, r: number) =>
	'M' + (x0 + r) + ' ' + (cy - r) + 'H' + (x1 - r) + 'A' + r + ' ' + r + ' 0 0 1 ' + (x1 - r) + ' ' + (cy + r) +
	'H' + (x0 + r) + 'A' + r + ' ' + r + ' 0 0 1 ' + (x0 + r) + ' ' + (cy - r) + 'Z'

/** Wobbly blob used by the hover peeks; t is time in seconds, wob 0 disables the wobble. */
export function peekBlob(cx: number, cy: number, r: number, t: number, wob = 1): string {
	const P: Pt[] = []
	for (let i = 0; i < 36; i++) {
		const a = i / 36 * PI2
		const rr = Math.max(0, r * (1 + wob * (.13 * Math.sin(3 * a + t * 1.4) + .08 * Math.sin(5 * a - t * 1.9) + .05 * Math.cos(2 * a + t * .8))))
		P.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)])
	}
	return smooth(P)
}
