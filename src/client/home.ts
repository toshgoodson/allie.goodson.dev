// Home: the full-screen hero pins for one screen of scroll while its shapes
// morph, holds on the finished words a little longer, then the page scrolls
// normally. Stop scrolling partway through the morph and the page glides on to
// the words (or back to the top if you were heading up). Past the hero, the name
// pill fades in and (on desktop) the hamburger expands into the links pill.

import { badgeTextOpacity, endLine, frame, nameD } from '@/content/homeHero'
import { createHeroCanvas } from './heroCanvas'
import { $, listen, reducedMotion, view, type Off } from './site'

/** Pinned scroll, in screens: 1 to animate + .25 holding on the words. Keep in sync with .pinsp in home.css. */
const HOLD = 1.25
/** Scroll down past this much of the morph and the page glides on to the words; up past 1 - this, back to the top. */
const SNAP_AT = .08
const cl = (v: number) => Math.max(0, Math.min(1, v))
const easeInOut = (u: number) => (u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2)

export function initHome(): Off {
	const pp = $('pp'), pill = $('pill'), lk = $('lk'), hb = $('hb'), nm = $('nm'), stage = $('stage'), mm = $('mm')
	const heroEl = $('hero'), anchor = $('work'), cue = $('cue'), svD = $<SVGSVGElement>('sv'), svM = $<SVGSVGElement>('svm')
	if (!pp || !pill || !lk || !hb || !nm || !stage || !mm || !heroEl || !anchor || !cue || !svD || !svM) return () => {}
	const groups = (svg: SVGSVGElement) => {
		const g: SVGGElement[] = []
		svg.querySelectorAll<SVGGElement>('g[data-i]').forEach(el => { g[Number(el.dataset.i)] = el })
		return g
	}
	const hero = {
		d: { svg: svD, g: groups(svD), ttl: svD.querySelector<SVGTextElement>('.ttl'), order: '' },
		m: { svg: svM, g: groups(svM), ttl: svM.querySelector<SVGTextElement>('.ttl'), order: '' },
	}
	const ends = [...pp.querySelectorAll<HTMLElement>('.end')]
	// The shapes are painted on a canvas once fonts are ready; until then the SVG drawing animates.
	const canvas = createHeroCanvas(heroEl, stage, hero)
	let painting = false
	const work = lk.querySelector<HTMLElement>('[data-k=work]')
	let manual = false

	function draw(p: number) {
		if (painting) canvas.draw(p)
		else {
			const h = view.mobile ? hero.m : hero.d, f = frame(p, view.mobile)
			f.forEach(({ i, transform }) => h.g[i].setAttribute('transform', transform))
			const order = f.map(o => o.i).join()
			if (order !== h.order) { f.forEach(({ i }) => h.svg.appendChild(h.g[i])); h.order = order }
			if (h.ttl) h.ttl.style.opacity = String(badgeTextOpacity(p))
		}
		ends.forEach((el, i) => {
			const [o, mt] = endLine(p, i)
			el.style.opacity = String(o)
			el.style.translate = '0 ' + mt.toFixed(2) + 'px'
		})
	}

	// Scale the hero's 680×400 (phone 390×700) stage to fit the screen; keep in sync with the boot script.
	let H = 1
	const fitHero = () => {
		const w = heroEl.clientWidth
		H = heroEl.clientHeight || innerHeight
		document.documentElement.style.setProperty('--hs', String(view.mobile ? Math.min(w / 390, H / 700) : Math.min(w / 680, H / 400)))
		canvas.resize(view.mobile)
	}
	const maxScroll = () => document.documentElement.scrollHeight - innerHeight
	const workY = () => anchor.getBoundingClientRect().top + scrollY

	// The drawn progress eases toward the scroll position each frame, so the
	// shapes move smoothly between scroll ticks instead of jumping.
	let target = 0, shown = -1, drawRaf = 0, lastT = 0
	const frameTick = (t: number) => {
		const dt = lastT ? Math.min(64, t - lastT) : 16.7
		lastT = t
		if (shown < 0 || reducedMotion()) shown = target
		else shown += (target - shown) * (1 - Math.pow(.8, dt / 16.7))
		if (Math.abs(target - shown) < .0008) shown = target
		draw(shown)
		if (shown !== target) drawRaf = requestAnimationFrame(frameTick)
		else { drawRaf = 0; lastT = 0 }
	}
	const redraw = () => { if (!drawRaf) drawRaf = requestAnimationFrame(frameTick) }

	// All in screen px: the shapes animate over the first H px of scroll (one screen); the pin lasts HOLD screens.
	function update() {
		const M = view.mobile, Z = view.zoom, y = scrollY, p = cl(y / H), pin = H * HOLD
		if (p !== target || shown < 0) { target = p; redraw() }
		// Scroll cue: shown at the start, and again once the words have landed, until you leave the hold.
		const cueO = Math.max(1 - p / .12, cl((p - .9) / .1) * cl((pin - y) / (.15 * H)))
		cue!.style.opacity = String(cueO)
		cue!.inert = cueO < .05
		const tr = Math.max(0, y - pin), maxY = maxScroll()
		const sc = tr > Math.min(M ? H * .55 : H - 30 * Z, maxY - pin - 10 * Z), op = !M && (sc || manual)
		pp!.classList.toggle('sc', sc)
		pp!.classList.toggle('op', op)
		work?.classList.toggle('on', sc)
		pill!.style.width = (op ? lk!.offsetWidth : 40) + 'px'
		lk!.inert = !op
		nm!.inert = !(sc || pp!.classList.contains('mo'))
		// Desktop: the hamburger only expands the links pill, and hides once they show.
		// (tabIndex, not inert: making the focused button inert would blur it and collapse the pill again)
		hb!.tabIndex = op ? -1 : 0
		if (!M) {
			hb!.setAttribute('aria-controls', 'lk')
			hb!.setAttribute('aria-expanded', String(op))
			hb!.setAttribute('aria-label', 'Open menu')
		} else hb!.setAttribute('aria-controls', 'mm')
	}

	// Scripted scrolling (links, cue, glide). `go` can start at speed v0 (px/ms), so a glide carries
	// on from your own scroll instead of restarting from a standstill.
	let raf = 0, auto = 0 // direction of a running scripted scroll; 0 = none
	// Momentum bookkeeping: while gliding or just landed, wheel ticks that keep fading are the same
	// gesture's momentum (swallowed); a tick that grows is a new scroll, which takes control back.
	let tailDir = 0, tailUntil = 0, lastAbs = 0, glideT0 = 0
	const go = (to: number, ms: number, v0 = 0) => {
		cancelAnimationFrame(raf)
		const from = scrollY, dist = to - from, dir = Math.sign(dist)
		if (reducedMotion() || Math.abs(dist) < 1) { scrollTo(0, to); return }
		auto = dir
		// Cubic Hermite from (from, v0) to (to, still). The start speed is capped low so the glide never
		// rushes or overshoots, and the shapes have time to play out.
		const m = Math.min(Math.abs(v0) * ms, 1.2 * Math.abs(dist)) * dir
		const t0 = glideT0 = performance.now()
		const f = (n: number) => {
			const u = Math.min(1, (n - t0) / ms), u2 = u * u, u3 = u2 * u
			scrollTo(0, v0
				? from * (2 * u3 - 3 * u2 + 1) + m * (u3 - 2 * u2 + u) + to * (3 * u2 - 2 * u3)
				: from + dist * easeInOut(u))
			if (u < 1) raf = requestAnimationFrame(f)
			else {
				auto = 0
				// Swallow what's left of the gesture's momentum so the page doesn't drift past where it landed.
				tailDir = dir
				tailUntil = performance.now() + 250
			}
		}
		raf = requestAnimationFrame(f)
	}
	const stop = () => { cancelAnimationFrame(raf); auto = 0 }
	const goWork = () => go(Math.min(maxScroll(), workY()), 1600)
	const collapse = () => { if (manual) { manual = false; update() } }

	// Glide: a little way past your name (SNAP_AT), the page takes your scroll and carries it on to
	// the words in one motion; heading back up past the words, it carries you to the top.
	let lastY = scrollY, lastScrollT = performance.now(), vel = 0, dir = 0, settleT = 0
	const glide = (to: number, push = 0) => {
		const speed = Math.max(Math.abs(vel), Math.abs(push) / 16)
		go(to, 900 + 900 * Math.abs(to - scrollY) / H, speed)
	}
	const onWheel = (ev: Event) => {
		const e = ev as WheelEvent
		if (e.ctrlKey) return // pinch zoom
		const d = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1), s = Math.sign(d), now = performance.now()
		if (!d) return
		const a = Math.abs(d), fresh = a > lastAbs * 1.4 + 2
		if (auto) {
			// Keep gliding through the rest of this gesture; a new scroll (or one the other way) takes back control.
			if (s === auto && !(fresh && now - glideT0 > 120)) { e.preventDefault(); lastAbs = a }
			else { stop(); lastAbs = 0 }
			return
		}
		if (s === tailDir && now < tailUntil && !fresh) { e.preventDefault(); lastAbs = a; return }
		tailDir = 0
		lastAbs = a
		// A mouse-wheel click (a big single step) always starts the glide; a trackpad starts it once past SNAP_AT.
		const y = scrollY, next = y + d, click = Math.abs(d) >= 40
		if (s > 0 && y < H - 2 && (click || next > SNAP_AT * H)) { e.preventDefault(); glide(H, d) }
		else if (s < 0 && y > 2 && y <= H + 2 && (click ? next < H : next < (1 - SNAP_AT) * H)) { e.preventDefault(); glide(0, d) }
	}
	// Keyboard scrolling gets the same treatment (unless a control has focus and wants the key).
	const DOWN = ['ArrowDown', 'PageDown', ' '], UP = ['ArrowUp', 'PageUp']
	const onKey = (ev: Event) => {
		const e = ev as KeyboardEvent
		stop()
		if (e.key === 'Escape' && manual && !view.mobile) { collapse(); hb.focus(); return }
		const t = e.target as Element
		if (e.altKey || e.ctrlKey || e.metaKey || t.closest('a,button,input,textarea,select')) return
		const y = scrollY, down = DOWN.includes(e.key) && !e.shiftKey, up = UP.includes(e.key) || (e.key === ' ' && e.shiftKey)
		if (down && y < H - 2) { e.preventDefault(); glide(H) }
		else if (up && y > 2 && y <= H + 2) { e.preventDefault(); glide(0) }
	}
	// Touch: within the hero the page follows your finger itself (the browser's own scrolling would
	// coast and stall partway), and when you let go it glides on, at your swipe's speed, to the top or
	// the words, whichever way you were swiping. Swiping down from the words scrolls normally.
	// The decision is made on the first move of each swipe, because after that iOS won't let the
	// page take over the browser's scrolling.
	type Touch = { y0: number; s0: number; lastY: number; lastT: number; v: number; mode: '' | 'drag' | 'native' }
	let touch: Touch | null = null, touchEndT = 0
	const onTouchStart = (ev: Event) => {
		const e = ev as TouchEvent
		stop()
		touch = e.touches.length === 1 ? { y0: e.touches[0].clientY, s0: scrollY, lastY: e.touches[0].clientY, lastT: e.timeStamp, v: 0, mode: '' } : null
	}
	const onTouchMove = (ev: Event) => {
		const e = ev as TouchEvent
		if (!touch || e.touches.length !== 1) return
		const fy = e.touches[0].clientY
		if (!touch.mode) {
			const y = scrollY, up = fy > touch.y0
			touch.mode = y < H - 2 || (Math.abs(y - H) <= 2 && up) ? 'drag' : 'native'
		}
		if (touch.mode === 'drag' && e.cancelable) {
			e.preventDefault()
			scrollTo(0, Math.max(0, Math.min(H, touch.s0 + touch.y0 - fy)))
			const dt = Math.max(1, e.timeStamp - touch.lastT), v = (touch.lastY - fy) / dt
			touch.v = touch.v * .6 + v * .4
		}
		touch.lastY = fy
		touch.lastT = e.timeStamp
	}
	const onTouchEnd = (ev: Event) => {
		const t = touch
		touch = null
		touchEndT = (ev as TouchEvent).timeStamp
		if (t?.mode !== 'drag') return
		const y = scrollY, moved = y - t.s0
		const down = Math.abs(t.v) > .05 ? t.v > 0 : moved > 0
		if (Math.abs(moved) < 4 && Math.abs(t.v) < .05) return
		const to = down ? H : 0
		if (Math.abs(to - y) > 1) go(to, 900 + 900 * Math.abs(to - y) / H, Math.abs(t.v))
	}
	// Fallback (e.g. dragging the scrollbar): once scrolling stops partway, finish the move.
	const settle = () => {
		const y = scrollY
		if (auto || touch || y <= 1 || y >= H - 1) return
		glide(dir >= 0 ? (y > SNAP_AT * H ? H : 0) : (y > (1 - SNAP_AT) * H ? H : 0))
	}

	let queued = 0
	const onScroll = () => {
		const y = scrollY, t = performance.now(), dt = t - lastScrollT
		if (y !== lastY) {
			dir = Math.sign(y - lastY)
			const v = (y - lastY) / Math.max(1, dt)
			vel = dt > 100 ? v : vel * .5 + v * .5
		}
		lastY = y
		lastScrollT = t
		if (!queued) queued = requestAnimationFrame(() => { queued = 0; update() })
		// A flick up from the work list whose momentum carries into the hero glides on to the top right away.
		if (!auto && !touch && dir < 0 && t - touchEndT < 2000 && y > 2 && y < H - 2) { glide(0); return }
		if (!auto && !touch) { clearTimeout(settleT); settleT = window.setTimeout(settle, 220) }
	}

	const offs = [
		listen(window, 'scroll', onScroll, { passive: true }),
		listen(window, 'site:fit', () => { fitHero(); update() }),
		listen(window, 'site:mode', () => { manual = false; fitHero(); shown = -1; update() }),
		listen(window, 'site:menu', update),
		listen(window, 'wheel', onWheel, { passive: false }),
		listen(window, 'touchstart', onTouchStart, { passive: true }),
		listen(window, 'touchmove', onTouchMove, { passive: false }),
		listen(window, 'touchend', onTouchEnd, { passive: true }),
		listen(window, 'touchcancel', onTouchEnd, { passive: true }),
		listen(window, 'keydown', onKey),
		listen(hb, 'click', e => {
			if (view.mobile) return
			manual = true
			update()
			// Keyboard users land on the first link once the pill opens.
			if ((e as MouseEvent).detail === 0) lk.querySelector<HTMLElement>('a')?.focus()
		}),
		listen(pill, 'focusout', e => { if (!pill.contains((e as FocusEvent).relatedTarget as Node)) collapse() }),
		listen(stage, 'click', e => { if (!cue.contains(e.target as Node)) collapse() }),
		listen(lk, 'click', e => {
			const a = (e.target as Element).closest('a')
			if (!a) return
			manual = false
			if (a.dataset.k === 'work') { e.preventDefault(); goWork() }
			update()
		}),
		listen(mm, 'click', e => {
			const a = (e.target as Element).closest('a')
			if (a?.dataset.k !== 'work') return
			e.preventDefault()
			dispatchEvent(new Event('site:closemenu'))
			goWork()
		}),
		listen(nm, 'click', e => { e.preventDefault(); manual = false; go(0, 1600) }),
		// Scroll cue: at the start it plays the hero through to the words; on the words it moves on to the work.
		listen(cue, 'click', () => (scrollY < H * .5 ? go(H, 1400) : goWork())),
	]

	// Size the name pills to the real text once Corben has loaded.
	document.fonts?.ready.then(() => {
		const g = (view.mobile ? hero.m : hero.d).g[6], [t1, t2] = g.querySelectorAll('text')
		const w1 = t1.getComputedTextLength(), w2 = t2.getComputedTextLength()
		if (!w1 || !w2) return
		const d = nameD(w1, w2)
		hero.d.g[6].querySelector('path')?.setAttribute('d', d)
		hero.m.g[6].querySelector('path')?.setAttribute('d', d)
	}).finally(() => {
		canvas.refreshShapes()
		painting = true
		canvas.start(shown < 0 ? target : shown)
	})

	// The hero's height follows the visible screen (100svh), which mobile toolbars change without a resize event.
	const ro = new ResizeObserver(() => { fitHero(); update() })
	ro.observe(heroEl)
	fitHero()
	// Take the initial nav state without animating (e.g. arriving at /#work or a restored scroll position),
	// then let it animate normally from the next frames on.
	pp.classList.add('instant')
	update()
	let settleIn = requestAnimationFrame(() => { settleIn = requestAnimationFrame(() => { update(); pp.classList.remove('instant') }) })
	return () => {
		cancelAnimationFrame(settleIn)
		ro.disconnect()
		canvas.destroy()
		stop()
		clearTimeout(settleT)
		cancelAnimationFrame(queued)
		cancelAnimationFrame(drawRaf)
		offs.forEach(f => f())
	}
}
