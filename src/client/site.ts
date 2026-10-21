// Behaviors shared by every page. The markup is static HTML from the sketches,
// so these hook into it by id/class. Each init returns a cleanup function.

import { PHONE_QUERY, zoomFor } from '@/lib/boot'
import { peekBlob } from '@/lib/shapes'
import { transition } from './dissolve'

export type Off = () => void
const noop: Off = () => {}

export const listen = (t: EventTarget, type: string, fn: (e: Event) => void, opts?: AddEventListenerOptions): Off => {
	t.addEventListener(type, fn, opts)
	return () => t.removeEventListener(type, fn, opts)
}
export const $ = <T extends Element = HTMLElement>(id: string) => document.getElementById(id) as T | null
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

/** Current canvas: phone (390px) or desktop (680px), and its zoom. */
export const view = { mobile: false, zoom: 1 }

// ---- Canvas mode + zoom (fires site:mode when phone/desktop flips, site:fit on any resize) ----
function initFit(): Off {
	const d = document.documentElement
	view.mobile = d.classList.contains('m')
	const fit = () => {
		const m = matchMedia(PHONE_QUERY).matches, z = zoomFor(m, d.clientWidth), changed = m !== view.mobile
		d.classList.toggle('m', m)
		d.style.setProperty('--z', String(z))
		d.style.setProperty('--bleed', Math.max(0, (d.clientWidth / z - (m ? 390 : 680)) / 2) + 'px')
		view.mobile = m
		view.zoom = z
		if (changed) dispatchEvent(new Event('site:mode'))
		dispatchEvent(new Event('site:fit'))
	}
	fit()
	// The root also resizes when a classic scrollbar appears, which fires no resize event.
	const ro = new ResizeObserver(fit)
	ro.observe(d)
	const off = listen(window, 'resize', fit)
	return () => { ro.disconnect(); off() }
}

// ---- Light/dark toggle ----
function initTheme(): Off {
	const tg = $('tg')
	if (!tg) return noop
	const d = document.documentElement
	const dark = () => d.classList.contains('dk')
	const label = () => tg.setAttribute('aria-label', dark() ? 'Switch to light mode' : 'Switch to dark mode')
	const set = (dk: boolean) => { d.classList.toggle('dk', dk); label() }
	label()
	let busy = false
	const offClick = listen(tg, 'click', () => {
		if (busy) return
		busy = true
		const dk = !dark()
		transition(dk ? [20, 18, 64] : [253, 250, 243], () => {
			set(dk)
			try { localStorage.setItem('theme', dk ? 'dark' : 'light') } catch {}
		}, () => { busy = false })
	})
	// Until the visitor picks, follow the system setting.
	const sys = matchMedia('(prefers-color-scheme: dark)')
	const onSys = () => {
		let saved: string | null = null
		try { saved = localStorage.getItem('theme') } catch {}
		if (!saved) set(sys.matches)
	}
	sys.addEventListener('change', onSys)
	return () => { offClick(); sys.removeEventListener('change', onSys) }
}

// ---- Phone menu: hamburger (#hb) opens #mm; X, a tap outside, or Escape closes it ----
function initMenu(): Off {
	const hb = $('hb'), mm = $('mm'), pp = $('pp'), dim = $('mmo')
	if (!hb || !mm || !pp) return noop
	const nav = mm.closest('nav') ?? pp
	const isOpen = () => mm.classList.contains('open')
	const set = (o: boolean) => {
		if (o === isOpen()) return
		mm.classList.toggle('open', o)
		mm.setAttribute('aria-hidden', String(!o))
		mm.inert = !o
		hb.setAttribute('aria-expanded', String(o))
		hb.setAttribute('aria-label', o ? 'Close menu' : 'Open menu')
		dim?.classList.toggle('on', o)
		pp.classList.toggle('mo', o)
		dispatchEvent(new Event('site:menu'))
	}
	// While open, Tab cycles through the nav's visible controls only.
	const trap = (e: KeyboardEvent) => {
		const els = [...nav.querySelectorAll<HTMLElement>('a[href],button')].filter(el => !el.closest('[inert]') && el.getClientRects().length)
		if (!els.length) return
		const first = els[0], last = els[els.length - 1], i = els.indexOf(document.activeElement as HTMLElement)
		if (e.shiftKey && (i <= 0)) { e.preventDefault(); last.focus() }
		else if (!e.shiftKey && (i === -1 || i === els.length - 1)) { e.preventDefault(); first.focus() }
	}
	const offs = [
		listen(hb, 'click', e => {
			if (!view.mobile) return
			e.stopPropagation()
			set(!isOpen())
		}),
		listen(document, 'click', e => { if (isOpen() && !mm.contains(e.target as Node)) set(false) }),
		listen(document, 'keydown', e => {
			const k = e as KeyboardEvent
			if (!isOpen()) return
			if (k.key === 'Escape') { set(false); hb.focus() }
			else if (k.key === 'Tab') trap(k)
		}),
		listen(window, 'site:mode', () => set(false)),
		listen(window, 'site:closemenu', () => set(false)),
	]
	return () => { set(false); offs.forEach(f => f()) }
}

// ---- Inner pages: page-colored scalloped backdrop slides in behind the nav once you scroll ----
function initBackdrop(): Off {
	const pp = $('pp')
	if (!pp) return noop
	const f = () => pp.classList.toggle('sc', scrollY > 40 * view.zoom)
	f()
	return listen(window, 'scroll', f, { passive: true })
}

// ---- Email row: the address + sunburst sticker copy the address ----
function initCopy(): Off {
	const b = $('cpy'), status = $('cpys')
	if (!b) return noop
	const text = 'allie@goodson.dev'
	let t = 0
	const off = listen(b, 'click', async () => {
		let ok = false
		try {
			await navigator.clipboard.writeText(text)
			ok = true
		} catch {
			const a = document.createElement('textarea')
			a.value = text
			a.style.position = 'fixed'
			a.style.opacity = '0'
			document.body.appendChild(a)
			a.select()
			try { ok = document.execCommand('copy') } catch {}
			a.remove()
		}
		b.classList.toggle('ok', ok)
		if (status) status.textContent = ok ? 'Email address copied' : 'Copy failed'
		clearTimeout(t)
		t = window.setTimeout(() => {
			b.classList.remove('ok')
			if (status) status.textContent = ''
		}, 1600)
	})
	return () => { clearTimeout(t); off() }
}

// ---- Looping art videos: play while on screen, never with reduced motion (poster stays) ----
function initVideo(): Off {
	const vids = [...document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]')]
	if (!vids.length) return noop
	const mq = matchMedia('(prefers-reduced-motion: reduce)')
	const seen = new Set<HTMLVideoElement>()
	const apply = () => vids.forEach(v => {
		if (!mq.matches && seen.has(v)) {
			v.muted = true
			v.play().catch(() => {})
		} else v.pause()
	})
	const io = new IntersectionObserver(es => {
		es.forEach(e => e.isIntersecting ? seen.add(e.target as HTMLVideoElement) : seen.delete(e.target as HTMLVideoElement))
		apply()
	})
	vids.forEach(v => io.observe(v))
	mq.addEventListener('change', apply)
	return () => { io.disconnect(); mq.removeEventListener('change', apply) }
}

// ---- Hover peeks: a wobbly blob springs open around the cursor and reveals the picture layer ----
type Peek = {
	el: HTMLElement; layer: HTMLElement; shot: HTMLElement; R: number
	h: boolean; mx: number; my: number; cx: number; cy: number; r: number; v: number; ox: number; oy: number; s: number
	// Row geometry, measured once per hover (and after scroll/resize) instead of on every move or frame
	box: { left: number; top: number; k: number; w: number; h: number } | null
}
function initPeeks(): Off {
	const ps: Peek[] = [...document.querySelectorAll<HTMLElement>('[data-peek]')].flatMap(el => {
		const layer = el.querySelector<HTMLElement>('.layer'), shot = el.querySelector<HTMLElement>('.shot')
		return layer && shot ? [{ el, layer, shot, R: Number(el.dataset.peek), h: false, mx: 0, my: 0, cx: 0, cy: 0, r: 0, v: 0, ox: 0, oy: 0, s: 1.1, box: null }] : []
	})
	if (!ps.length) return noop
	const measure = (o: Peek) => {
		const b = o.el.getBoundingClientRect(), k = o.el.offsetWidth / b.width
		return (o.box = { left: b.left, top: b.top, k, w: o.el.clientWidth, h: o.el.clientHeight })
	}
	let raf = 0, last = 0
	const tick = (now: number) => {
		const T = now / 1000, still = reducedMotion()
		// Frame-rate independent easing: n is how many 60fps frames have passed.
		const n = last ? Math.min(4, (now - last) / 16.7) : 1, ease = (rate: number) => 1 - Math.pow(1 - rate, n)
		last = now
		let busy = false
		for (const o of ps) {
			const box = o.box ?? measure(o)
			if (still) {
				o.r = o.h ? o.R : 0; o.v = 0; o.cx = o.mx; o.cy = o.my; o.ox = o.oy = 0; o.s = o.h ? 1.04 : 1.1
			} else {
				for (let i = 0; i < Math.round(n); i++) { o.v += ((o.h ? o.R : 0) - o.r) * .045; o.v *= .85; o.r += o.v }
				// The blob trails the cursor a little (the playful lag from the sketch, which used .14); the pictures drift lazily.
				o.cx += (o.mx - o.cx) * ease(.18); o.cy += (o.my - o.cy) * ease(.18)
				const tx = o.h ? (o.mx - box.w / 2) * .03 : 0, ty = o.h ? (o.my - box.h / 2) * .08 : 0
				o.ox += (tx - o.ox) * ease(.03); o.oy += (ty - o.oy) * ease(.03); o.s += ((o.h ? 1.04 : 1.1) - o.s) * ease(.025)
			}
			o.shot.style.transform = 'translate(' + o.ox.toFixed(1) + 'px,' + o.oy.toFixed(1) + 'px) scale(' + o.s.toFixed(3) + ')'
			o.layer.style.clipPath = o.r < 1 && !o.h ? 'circle(0 at 0 0)' : "path('" + peekBlob(o.cx, o.cy, o.r, T, still ? 0 : 1) + "')"
			if (o.h || o.r >= .5 || Math.abs(o.v) > .01 || Math.abs(o.s - 1.1) > .002 || Math.abs(o.ox) > .05 || Math.abs(o.oy) > .05) busy = true
		}
		raf = busy ? requestAnimationFrame(tick) : 0
		if (!raf) last = 0
	}
	const wake = () => { if (!raf) raf = requestAnimationFrame(tick) }
	// Mouse only: on touch screens a tap just follows the link.
	const pos = (o: Peek, e: PointerEvent) => {
		const b = o.box ?? measure(o)
		o.mx = (e.clientX - b.left) * b.k
		o.my = (e.clientY - b.top) * b.k
	}
	const forget = () => ps.forEach(o => { o.box = null })
	const offs = ps.flatMap(o => [
		listen(o.el, 'pointerenter', e => {
			const p = e as PointerEvent
			if (p.pointerType !== 'mouse' || view.mobile) return
			measure(o); pos(o, p); o.cx = o.mx; o.cy = o.my; o.h = true; wake()
		}),
		listen(o.el, 'pointermove', e => { const p = e as PointerEvent; if (p.pointerType === 'mouse') pos(o, p) }),
		listen(o.el, 'pointerleave', () => { o.h = false; wake() }),
	])
	offs.push(listen(window, 'scroll', forget, { passive: true }), listen(window, 'site:fit', forget))
	ps.forEach(o => { o.shot.style.transform = 'translate(0px,0px) scale(1.100)' })
	return () => { cancelAnimationFrame(raf); offs.forEach(f => f()) }
}

export function initSite(page: 'home' | 'inner'): Off {
	const offs = [initFit(), initTheme(), initMenu(), initCopy(), initVideo(), initPeeks()]
	if (page === 'inner') offs.push(initBackdrop())
	return () => offs.forEach(f => f())
}
