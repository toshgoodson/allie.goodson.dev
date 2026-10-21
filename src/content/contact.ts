import { buildPage, copyStatus, emailRow, innerNav, LINKEDIN, NEW_TAB, RESUME, shapes, type HeroShape, type Palette } from '@/lib/markup'
import { shapeD } from '@/lib/shapes'

export const PAL: Palette = {
	l: { D: '#4F50CF', Y: '#FFC857', K: '#F49AD8', P: '#7476F0', I: '#DAECFF', O: '#FF5B4D', B: '#DAECFF' },
	d: { D: '#141240', Y: '#C98A26', K: '#8E3F86', P: '#3E40AE', I: '#FFE7A6', O: '#FF6B5C', B: '#2A2873' },
}
const HS: HeroShape[] = [['blob', 'P', 340, 190, 600, .6], ['blob', 'K', 600, 330, 190, 2.2], ['sun', 'Y', 650, 20, 120, .2], ['blob', 'D', 20, 30, 150, 1.2], ['flower', 'K', 26, 372, 120, .35], ['blob', 'B', 190, 240, 250, .4], ['star', 'Y', 326, 96, 28, .3]]
const HSm: HeroShape[] = [['blob', 'P', 195, 300, 560, .6], ['blob', 'K', 336, 560, 176, 2.2], ['sun', 'Y', 380, 22, 100, .2], ['blob', 'D', 0, 14, 116, 1.2], ['flower', 'K', 8, 592, 96, .35], ['blob', 'B', 134, 196, 196, .4], ['star', 'Y', 362, 292, 24, .3]]

// ---- Postcard (decorative): scribbled message, perforated stamp, postmark waves ----
const SQUIGGLES = (() => {
	let s = 7
	const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280 }
	let d = ''
	for (const [x0, y, w] of [[0, 10, 108], [0, 34, 100], [0, 58, 110], [0, 82, 54]]) {
		d += 'M' + x0 + ' ' + y
		for (let x = x0; x < x0 + w; x += 5) {
			const a = 1.6 + rnd() * 2.6, up = (x / 5) % 2 ? -1 : 1
			d += ' q2.5 ' + (up * a).toFixed(1) + ' 5 0'
		}
	}
	return d
})()
const STAMP = (() => {
	const W = 50, H = 58, r = 2.3, g = 6.25
	let p = 'M0 0'
	for (let i = 0; i < 8; i++) { const c = (i + .5) * g; p += ' L' + (c - r) + ' 0 A' + r + ' ' + r + ' 0 0 0 ' + (c + r) + ' 0' }
	p += ' L' + W + ' 0'
	for (let i = 0; i < 9; i++) { const c = (i + .5) * (H / 9); p += ' L' + W + ' ' + (c - r) + ' A' + r + ' ' + r + ' 0 0 0 ' + W + ' ' + (c + r) }
	p += ' L' + W + ' ' + H
	for (let i = 7; i >= 0; i--) { const c = (i + .5) * g; p += ' L' + (c + r) + ' ' + H + ' A' + r + ' ' + r + ' 0 0 0 ' + (c - r) + ' ' + H }
	p += ' L0 ' + H
	for (let i = 8; i >= 0; i--) { const c = (i + .5) * (H / 9); p += ' L0 ' + (c + r) + ' A' + r + ' ' + r + ' 0 0 0 0 ' + (c - r) }
	p += ' Z'
	return '<path d="' + p + '" fill="#DAECFF"/><rect x="5.5" y="5.5" width="39" height="47" rx="1.5" fill="none" stroke="#FDFAF3" stroke-width="1.4"/><path d="' + shapeD('flower', 25, 27, 12.5, .3) + '" fill="#FF5B4D"/><circle cx="25" cy="27" r="3.4" fill="#FFC857"/><path d="M25 41v6" stroke="#2BA36B" stroke-width="1.6" stroke-linecap="round"/>'
})()
const WAVES = [14, 22, 30, 38, 46].map(y => { let w = 'M50 ' + y; for (let x = 50; x < 118; x += 8) w += ' q4 -3 8 0'; return w }).join('')

const hero = /* html */ `
  <div class="hero">
    <svg viewBox="0 0 680 380" class="dsk">${shapes(HS)}</svg><svg viewBox="0 0 390 590" class="mob" style="width:390px;height:590px">${shapes(HSm)}</svg>
    <div class="pc" aria-hidden="true">
      <div class="msg">Hi Allie!</div>
      <svg class="sq" style="left:18px;top:58px;width:112px;height:100px" viewBox="0 0 112 100"><path d="${SQUIGGLES}"/></svg>
      <i class="dv"></i>
      <svg class="st" style="left:222px;top:14px;width:50px;height:58px" viewBox="0 0 50 58">${STAMP}</svg>
      <svg class="pm" style="left:166px;top:16px;width:120px;height:60px" viewBox="0 0 120 60"><circle cx="30" cy="30" r="18"/><circle cx="30" cy="30" r="14"/><text x="30" y="32.6" text-anchor="middle">CA</text><path d="${WAVES}"/></svg>
      <svg class="rl" style="left:158px;top:98px;width:116px;height:74px" viewBox="0 0 116 74"><path d="M1 23.5H115M1 47.5H115M1 71.5H115"/></svg><div class="to">Allie Goodson<br>Product designer<br>California</div>
    </div>
    <i class="tape" data-m="left:172px;top:314px" style="left:484px;top:76px;transform:rotate(-3deg);z-index:3"></i>
    <div class="note" data-m="left:22px;top:458px" style="left:350px;top:238px;transform:rotate(-5deg);background:#FFC857">References +<br>rec letters<br>on request :-)</div>
    <h1 class="ab ht" data-m="left:24px;top:104px;font-size:52px" style="left:44px;top:118px;font-size:58px;font-weight:500;letter-spacing:-2px;line-height:1">Let’s<br>talk.</h1>
    <div class="ab ht" data-m="left:26px;top:228px;width:300px" style="left:46px;top:258px;width:290px;font-size:16px;line-height:1.45">Have a question, a project, or just want to talk shop? My inbox is open.</div>
  </div>
`

const rest = /* html */ `

  <div class="cx" id="say-hi">
    <span class="hi-k">Email</span>
    <div class="hi-r">${emailRow()}</div>
    <span class="hi-k k2">Elsewhere</span>
    <div class="hi-r" style="gap:12px"><a class="hi-o" href="${LINKEDIN}" target="_blank" rel="noopener"><svg class="ic" viewBox="0 0 24 24"><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"/></svg>LinkedIn${NEW_TAB}</a><a class="hi-o" href="${RESUME}" target="_blank" rel="noopener"><svg class="ic" viewBox="0 0 24 24"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/><path d="M9 9l1 0"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/></svg>Resume${NEW_TAB}</a></div>
    ${copyStatus}
  </div>
`

export default buildPage('contact', { head: innerNav('contact'), hero, rest, heroBg: 'P' }, PAL)
