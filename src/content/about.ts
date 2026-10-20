import { badge, buildPage, copyStatus, emailRow, innerNav, shapes, type HeroShape, type Palette } from '@/lib/markup'

export const PAL: Palette = {
	l: { D: '#4F50CF', Y: '#FFC857', K: '#F49AD8', P: '#7476F0', I: '#DAECFF', O: '#FF5B4D', B: '#DAECFF' },
	d: { D: '#141240', Y: '#C98A26', K: '#8E3F86', P: '#3E40AE', I: '#FFE7A6', O: '#FF6B5C', B: '#2A2873' },
}
const HS: HeroShape[] = [['blob', 'K', 340, 190, 600, 0], ['blob', 'D', 40, 40, 175, 1.2], ['clover', 'Y', 640, 40, 150, .3], ['sun', 'P', 30, 360, 150, .2], ['blob', 'B', 190, 250, 250, .4], ['star', 'Y', 372, 54, 38, .3]]
const HSm: HeroShape[] = [['blob', 'K', 195, 330, 560, 0], ['blob', 'D', 0, 6, 118, 1.2], ['clover', 'Y', 386, 26, 104, .3], ['sun', 'P', 6, 612, 112, .2], ['blob', 'B', 138, 196, 196, .4], ['star', 'Y', 70, 372, 28, .3]]

const hero = /* html */ `
  <div class="hero">
    <svg viewBox="0 0 680 380" class="dsk">${shapes(HS)}</svg><svg viewBox="0 0 390 620" class="mob" style="width:390px;height:620px">${shapes(HSm)}</svg>
    <div class="fr" data-m="left:150px;top:318px;width:196px;height:246px" style="left:446px;top:54px;width:190px;height:238px;transform:rotate(4deg);border-width:6px 6px 24px;border-radius:3px"><img src="me.webp" alt="Allie Goodson"></div>
    <i class="tape" data-m="left:220px;top:306px" style="left:512px;top:42px;transform:rotate(-3deg)"></i>
    <svg viewBox="0 0 680 380" class="dsk" style="position:absolute;inset:0;width:680px;height:380px;z-index:3;pointer-events:none">${badge(410, 318, 48, -8, ['Designer', '+ maker'], 12, 'Y')}</svg><svg viewBox="0 0 390 620" class="mob" style="position:absolute;inset:0;width:390px;height:620px;z-index:3;pointer-events:none">${badge(142, 546, 48, -8, ['Designer', '+ maker'], 12, 'Y')}</svg>
    <h1 class="ab ht" data-m="left:24px;top:104px;font-size:52px" style="left:44px;top:118px;font-size:58px;font-weight:500;letter-spacing:-2px;line-height:1">Hi, I’m<br>Allie.</h1>
    <div class="ab ht" data-m="left:26px;top:228px;width:300px" style="left:46px;top:258px;width:300px;font-size:16px;line-height:1.45">Product designer by day. The rest of the time, I make things out of whatever I can get my hands on.</div>
  </div>
`

const rest = /* html */ `

  <div class="wrap">
    <p class="gist" style="margin-top:40px">I’m a product designer in California with a BFA in Digital Media Art from San José State. I’ve worked across climate tech, SaaS, healthcare, and edtech, usually as the only designer on the team. Startups need everything at once: the app, the website, the brand and logo, the design system, emails, merch, even letterhead and email signatures. That’s&nbsp;a&nbsp;lot&nbsp;of&nbsp;hats. Good thing I’m a hat person.</p>
    <div class="ch"><div class="chh"><span class="num clk" data-c="#FFC857"><svg class="hands" viewBox="0 0 40 40" aria-hidden="true"><line class="hr" x1="20" y1="20" x2="20" y2="12.5"/><line class="mn" x1="20" y1="20" x2="20" y2="8.5"/><circle cx="20" cy="20" r="2"/></svg></span><h3>Off the clock</h3></div>
      <p class="body">I built a big chunk of the two-story bar we bring to Burning Man, and I lead our camp, which mostly means spreadsheets and herding cats. The rest of the time I paint, weld, knot, and solder.</p></div>
  </div>

  <div class="band" data-m="height:624px" style="height:470px;background:var(--band)">
    <span class="lbl lt" data-m="left:18px;top:14px" style="left:28px;top:16px;transform:rotate(-2deg)">burning man · camp lead</span>
    <div class="fr" data-m="left:16px;top:46px;width:300px;height:225px" style="left:26px;top:48px;width:356px;height:267px;transform:rotate(-3deg);z-index:1"><img src="bm_day.webp" alt="The two-story bar Allie built, at sunset on the playa"></div>
    <div class="fr" data-m="left:72px;top:300px;width:296px;height:222px" style="left:330px;top:176px;width:318px;height:239px;transform:rotate(4deg);z-index:2"><img src="bm_night.webp" alt="The bar at night, lit up and full of people"></div>
    <i class="tape" data-m="left:140px;top:36px" style="left:170px;top:38px;transform:rotate(-4deg)"></i>
    <i class="tape" data-m="left:196px;top:290px" style="left:460px;top:166px;transform:rotate(5deg)"></i>
    <div class="note" data-m="left:258px;top:212px" style="left:470px;top:44px;transform:rotate(5deg);background:#FFC857">Camp lead,<br>a.k.a. chief<br>cat herder</div>
    <div class="note" data-m="left:16px;top:530px" style="left:58px;top:342px;transform:rotate(-4deg);background:#F49AD8">I built dis<br>two-story bar :-)</div>
  </div>

  <div class="band" data-m="height:856px" style="height:520px;margin-top:28px;background:var(--tp)">
    <div class="fr" data-m="left:16px;top:38px;width:172px;height:252px" style="left:24px;top:40px;width:186px;height:273px;transform:rotate(-3deg);z-index:2"><img src="tiger.webp" alt="Tiger 1: acrylic on wood in a sunburst frame"></div>
    <div class="fr" data-m="left:212px;top:30px" style="left:226px;top:30px;width:150px;height:199px;transform:rotate(3deg);z-index:2;background:#000"><video src="/img/spine.mp4" poster="/img/spine_poster.webp" muted loop playsinline preload="none" data-autoplay aria-label="Spine Jacket: 3D-printed vertebrae lit with LEDs, cycling through colors"></video></div>
    <div class="fr" data-m="left:26px;top:354px" style="left:398px;top:42px;width:150px;height:151px;transform:rotate(-4deg);z-index:2"><img src="weld1.webp" alt="Welded steel star, practice piece 1"></div>
    <div class="fr" data-m="left:210px;top:328px;width:146px;height:144px" style="left:500px;top:170px;width:140px;height:138px;transform:rotate(5deg);z-index:3"><img src="weld2.webp" alt="Welded steel star, practice piece 2"></div>
    <div class="fr" data-m="left:46px;top:556px;width:126px;height:253px" style="left:262px;top:258px;width:120px;height:241px;transform:rotate(-2deg);z-index:2"><img src="macrame.webp" alt="Macrame doorway curtain"></div>
    <i class="tape" data-m="left:76px;top:28px" style="left:90px;top:30px;transform:rotate(-5deg)"></i>
    <i class="tape" data-m="left:260px;top:20px" style="left:274px;top:22px;transform:rotate(4deg)"></i>
    <span class="lbl" data-m="left:22px;top:306px" style="left:30px;top:334px;transform:rotate(-2deg)">tiger · acrylic on wood</span>
    <span class="lbl" data-m="left:150px;top:244px" style="left:204px;top:236px;transform:rotate(2deg)">spine jacket · 3D prints + LEDs</span>
    <span class="lbl" data-m="left:212px;top:488px" style="left:476px;top:322px;transform:rotate(-2deg)">welding · steel</span>
    <span class="lbl" data-m="left:154px;top:806px" style="left:396px;top:478px;transform:rotate(2deg)">macrame · fiber</span>
    <div class="note" data-m="left:222px;top:612px" style="left:62px;top:384px;transform:rotate(-4deg);background:#DAECFF">Any medium<br>I can get my<br>hands on</div>
  </div>

  <div class="hi" id="say-hi"><span class="hi-k">Say hi</span><div class="hi-r">${emailRow()}</div>${copyStatus}</div>
  <div style="height:40px"></div>
`

export default buildPage('about', { head: innerNav('about'), hero, rest, heroBg: 'K' }, PAL)
