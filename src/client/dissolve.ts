// Theme-switch transition: a two-stage noise dissolve on a full-screen canvas
// (cover, swap, reveal) with an orange edge. Ported from the sketches.

type RGB = [number, number, number]
const cl = (v: number) => Math.max(0, Math.min(1, v))

/** Smooth value noise on a gw × gh grid, sampled with u, v in 0–1. */
function grid(gw: number, gh: number) {
	const g: number[] = []
	for (let i = 0; i < (gw + 2) * (gh + 2); i++) g.push(Math.random())
	const at = (a: number, b: number) => g[b * (gw + 2) + a]
	return (u: number, v: number) => {
		const x = u * gw, y = v * gh, x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0
		const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy)
		return (at(x0, y0) * (1 - sx) + at(x0 + 1, y0) * sx) * (1 - sy) + (at(x0, y0 + 1) * (1 - sx) + at(x0 + 1, y0 + 1) * sx) * sy
	}
}

function dissolve(cv: HTMLCanvasElement, dur: number, cover: boolean, col: RGB, done: () => void) {
	const cx = cv.getContext('2d')!
	const W = Math.max(1, Math.round(innerWidth / 2)), H = Math.max(1, Math.round(innerHeight / 2))
	cv.width = W
	cv.height = H
	const g1 = grid(5, Math.ceil(5 * H / W)), g2 = grid(13, Math.ceil(13 * H / W)), N = new Float32Array(W * H)
	for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) N[j * W + i] = .62 * g1(i / W, j / H) + .38 * g2(i / W, j / H)
	const img = cx.createImageData(W, H), u32 = new Uint32Array(img.data.buffer)
	const pk = (r: number, g: number, b: number, a: number) => (a << 24) | (b << 16) | (g << 8) | r
	const FILL = pk(col[0], col[1], col[2], 255), EDGE = pk(255, 91, 77, 255), bw = .016, t0 = performance.now()
	const f = (now: number) => {
		const q = cl((now - t0) / dur), e = q < .5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2, th = .08 + e * .9
		for (let i = 0; i < u32.length; i++) {
			const d = cover ? th - N[i] : N[i] - th
			u32[i] = d <= 0 ? 0 : d < bw ? EDGE : FILL
		}
		cx.putImageData(img, 0, 0)
		if (q < 1) requestAnimationFrame(f)
		else done()
	}
	f(t0)
}

/** Plain crossfade for visitors who prefer reduced motion. */
function fade(cv: HTMLCanvasElement, dur: number, cover: boolean, col: RGB, done: () => void) {
	const cx = cv.getContext('2d')!
	cv.width = cv.height = 1
	cx.fillStyle = `rgb(${col.join(',')})`
	cx.fillRect(0, 0, 1, 1)
	const t0 = performance.now()
	const f = (now: number) => {
		const q = cl((now - t0) / dur)
		cv.style.opacity = String(cover ? q : 1 - q)
		if (q < 1) requestAnimationFrame(f)
		else done()
	}
	f(t0)
}

/** Covers the screen in `col`, calls swap(), then reveals the page again. */
export function transition(col: RGB, swap: () => void, done: () => void) {
	const cv = document.getElementById('cv') as HTMLCanvasElement | null
	if (!cv) { swap(); done(); return }
	const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
	const run = reduced ? fade : dissolve, dur = reduced ? 250 : 700
	run(cv, dur, true, col, () => {
		swap()
		run(cv, dur, false, col, () => {
			cv.getContext('2d')!.clearRect(0, 0, cv.width, cv.height)
			cv.style.opacity = ''
			done()
		})
	})
}
