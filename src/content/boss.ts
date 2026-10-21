import { badge, buildPage, innerNav, outcomes, shapes, type HeroShape, type Palette } from '@/lib/markup'
import { shapeD } from '@/lib/shapes'

export const PAL: Palette = {
	l: { D: '#4F50CF', Y: '#FFC857', K: '#F49AD8', P: '#7476F0', I: '#DAECFF', O: '#FF5B4D', B: '#DAECFF' },
	d: { D: '#141240', Y: '#C98A26', K: '#8E3F86', P: '#3E40AE', I: '#FFE7A6', O: '#FF6B5C', B: '#2A2873' },
}
const HS: HeroShape[] = [['blob', 'P', 340, 190, 600, 0], ['blob', 'D', 40, 40, 175, 1.2], ['clover', 'K', 620, 30, 160, .3], ['sun', 'Y', 640, 350, 170, .2], ['blob', 'B', 185, 262, 245, .4], ['star', 'Y', 332, 60, 40, .3]]
const HSm: HeroShape[] = [['blob', 'P', 195, 320, 560, 0], ['blob', 'D', 0, 22, 120, 1.2], ['clover', 'K', 386, 32, 106, .3], ['sun', 'Y', 382, 618, 120, .2], ['blob', 'B', 138, 190, 204, .4], ['star', 'Y', 354, 300, 26, .3]]
const OUT: Parameters<typeof outcomes>[0] = [
	['sun', '#FFC857', 'Design system first', 'Engineers and I shared one reference from day one, so fast MVP work still matched.'],
	['star', '#7476F0', 'Learning, three ways', 'Courses founders can watch, listen to, or read, with analytics showing which way they pick.'],
	['clover', '#F49AD8', 'The whole MVP', 'Academy, founder profiles, chat, filterable tables, permissions, and dashboards.'],
]

const hero = /* html */ `
  <div class="hero">
    <svg viewBox="0 0 680 380" class="dsk">${shapes(HS)}</svg><svg viewBox="0 0 390 640" class="mob" style="width:390px;height:640px">${shapes(HSm)}</svg>
    <div class="fr" data-m="left:34px;top:372px;width:256px;height:166px" style="left:366px;top:60px;width:256px;height:166px;transform:rotate(-5deg)"><img src="h_topics.webp" alt="BOSS academy: course topics grouped for founders" style="object-position:top left"></div>
    <div class="fr" data-m="left:266px;top:418px;width:100px;height:143px" style="left:556px;top:150px;width:100px;height:143px;transform:rotate(7deg)"><img src="h_donut.webp" alt="Course analytics: how founders like to learn" style="object-position:top"></div>
    <img class="stk" src="h_tile.webp" alt="Accelerator prep collection icon" data-m="left:226px;top:526px;width:72px" style="left:452px;top:214px;width:84px;transform:rotate(-8deg);z-index:2">
    <svg viewBox="0 0 680 380" class="dsk" style="position:absolute;inset:0;width:680px;height:380px;z-index:3;pointer-events:none">${badge(402, 330, 48, -8, ['UX/UI', 'EdTech'], 12, 'Y')}</svg><svg viewBox="0 0 390 640" class="mob" style="position:absolute;inset:0;width:390px;height:640px;z-index:3;pointer-events:none">${badge(100, 588, 46, -8, ['UX/UI', 'EdTech'], 12, 'Y')}</svg>
    <h1 class="ab ht" data-m="left:24px;top:100px;font-size:50px" style="left:44px;top:92px;font-size:52px;font-weight:500;letter-spacing:-2px;line-height:1">BOSS<br>Startup<br>Science</h1>
    <div class="ab ht" data-m="left:26px;top:264px;width:316px" style="left:46px;top:262px;width:300px;font-size:16px;line-height:1.45">The only designer at an edtech startup for founders: the design system, the academy, and the admin tools.</div>
  </div>
`

const rest = /* html */ `

  <div class="wrap">
    <div class="meta" data-m="grid-template-columns:1fr 1fr" style="grid-template-columns:1fr 1.25fr 1.05fr 1.15fr"><div><b>Role</b><span>UX/UI designer</span></div><div><b>Timeline</b><span>Jul 2022 – Mar 2023</span></div><div><b>Focus</b><span>Design system, academy, admin + data</span></div><div><b>Tools</b><span>Figma, Adobe CC, Procreate, Jira</span></div></div>
    <p class="gist">BOSS Startup Science pairs pre-accelerator courses for founders with a database where investors, accelerators, and incubators find startups to back. As the only designer, I built the design system first, then designed the academy, the data-heavy tables, and the admin tools for the MVP.</p>
    <div class="ch"><div class="chh"><span class="num" data-c="#FFC857">01</span><h3>Design system</h3></div>
      <p class="body">Engineers and I needed one reference before anything else, so the system came first: a purple-led palette with ready-made text and background pairs, a type scale, spacing, shape, and elevation tokens, and every button and input state.</p></div>
  </div>

  <div class="band" data-m="height:820px" style="height:468px;background:var(--tp)">
    <div class="fr" data-m="left:20px;top:40px" style="left:26px;top:40px;width:150px;height:216px;transform:rotate(-3deg);z-index:1"><img src="d_palette.webp" alt="Color scales: purple, grurple, blue, green, yellow, red" style="object-position:top"></div>
    <div class="fr" data-m="left:184px;top:50px;width:190px;height:104px" style="left:196px;top:30px;width:262px;height:144px;transform:rotate(2deg);z-index:2"><img src="d_access.webp" alt="Accessible palette: text and background pairs" style="object-position:top left"></div>
    <div class="fr" data-m="left:186px;top:308px;width:186px;height:192px" style="left:182px;top:206px;width:206px;height:212px;transform:rotate(-2deg);z-index:3"><img src="d_buttons.webp" alt="Filled, elevated, tonal, outlined, and text buttons" style="object-position:top left"></div>
    <div class="fr" data-m="left:54px;top:560px;width:290px;height:229px" style="left:408px;top:196px;width:246px;height:194px;transform:rotate(3deg);z-index:2"><img src="d_type.webp" alt="Type scale: display and headline styles with tokens" style="object-position:top left"></div>
    <i class="tape" data-m="left:252px;top:42px" style="left:296px;top:22px;transform:rotate(4deg)"></i>
    <i class="tape" data-m="left:252px;top:300px" style="left:250px;top:198px;transform:rotate(-5deg)"></i>
    <span class="lbl" data-m="left:24px;top:274px" style="left:30px;top:278px;transform:rotate(-3deg)">boss design system</span>
    <span class="lbl" data-m="left:190px;top:514px" style="left:196px;top:428px;transform:rotate(2deg)">buttonsbuttonsbuttons</span>
    <div class="note" data-m="left:222px;top:178px" style="left:486px;top:40px;transform:rotate(4deg);background:#FFC857">One reference<br>for devs<br>and design</div>
    <div class="note" data-m="left:20px;top:330px" style="left:40px;top:318px;transform:rotate(-4deg);background:#F49AD8">Every text color<br>paired with<br>its background</div>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#F49AD8">02</span><h3>Academy</h3></div>
    <p class="body">The academy turns expert material into short courses founders can watch, listen to, or read. I designed the catalog, collections for each startup phase, and the progress and analytics views admins use to see what’s landing.</p></div></div>

  <div class="band" data-m="height:700px" style="height:500px;background:var(--band)">
    <div class="fr" data-m="left:16px;top:40px" style="left:28px;top:38px;width:340px;height:243px;transform:rotate(-2deg);z-index:1"><img src="a_collect.webp" alt="Collections for each startup phase: vision, product, go-to-market, accelerator prep" style="object-position:top left"></div>
    <div class="fr" data-m="left:24px;top:438px;width:340px;height:220px" style="left:300px;top:226px;width:350px;height:227px;transform:rotate(3deg);z-index:2"><img src="a_progress.webp" alt="Admin view: member table with each founder’s course progress" style="object-position:top left"></div>
    <img class="stk" src="a_tile.webp" alt="Vision phase collection icon" data-m="left:296px;top:16px;width:76px" style="left:410px;top:44px;width:86px;transform:rotate(9deg)">
    <i class="tape" data-m="left:140px;top:30px" style="left:150px;top:28px;transform:rotate(-4deg)"></i>
    <span class="lbl" data-m="left:22px;top:294px" style="left:34px;top:300px;transform:rotate(-2deg)">academy</span>
    <span class="lbl" data-m="left:174px;top:668px" style="left:326px;top:466px;transform:rotate(2deg)">admin: course progress</span>
    <div class="note" data-m="left:206px;top:300px" style="left:500px;top:52px;transform:rotate(5deg);background:#F49AD8">Watch, listen,<br>or read: every<br>course three ways</div>
    <div class="note" data-m="left:22px;top:334px" style="left:54px;top:350px;transform:rotate(-4deg);background:#FFC857">Collections for<br>every startup<br>phase</div>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#7476F0" style="color:#FFF0C7;font-weight:600">03</span><h3>Admin + data</h3></div>
    <p class="body">Behind the courses sit the tools that run the business: filterable tables for startups and members, invites with roles explained in plain words, credits and deals for founders, and dashboards for admins.</p></div></div>

  <div class="band" data-m="height:668px" style="height:412px;background:var(--ty)">
    <div class="fr" data-m="left:16px;top:44px;width:200px;height:179px" style="left:26px;top:44px;width:222px;height:199px;transform:rotate(-3deg);z-index:2"><img src="x_invite.webp" alt="Invite a member, with the chosen role explained" style="object-position:top left"></div>
    <div class="fr" data-m="left:198px;top:66px;width:176px;height:175px" style="left:262px;top:28px;width:206px;height:205px;transform:rotate(3deg);z-index:1"><img src="x_pricing.webp" alt="Pricing: one credit or a subscription" style="object-position:top"></div>
    <div class="fr" data-m="left:40px;top:404px;width:150px;height:217px" style="left:486px;top:40px;width:164px;height:237px;transform:rotate(-2deg);z-index:2"><img src="x_bars.webp" alt="Analytics: average rating by course" style="object-position:top"></div>
    <i class="tape" data-m="left:258px;top:56px" style="left:330px;top:18px;transform:rotate(3deg)"></i>
    <span class="lbl" data-m="left:18px;top:14px" style="left:26px;top:16px;transform:rotate(-2deg)">admin portal</span>
    <div class="note" data-m="left:22px;top:258px" style="left:44px;top:276px;transform:rotate(-4deg);background:#DAECFF">Roles explained<br>right where<br>you pick them</div>
    <div class="note" data-m="left:212px;top:276px" style="left:296px;top:262px;transform:rotate(3deg);background:#F49AD8">Credits or<br>a subscription,<br>side by side</div>
    <div class="note" data-m="left:220px;top:474px" style="left:512px;top:296px;transform:rotate(-3deg);background:#FFC857">Ratings by<br>course, any<br>time range</div>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#FF5B4D"><svg class="ic" viewBox="0 0 24 24" style="font-size:16px;stroke-width:2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h3>What changed</h3></div>
    <div class="out">${outcomes(OUT)}</div>
    <b style="display:block;font-size:12px;font-weight:400;color:var(--mut);margin:28px 0 6px">Looking back</b>
    <p class="body">Midway through, the company pivoted. What started as a learning platform for startups quickly became a way to match startups with investors by stage and interest. Building the design system first is what made that pivot easy, for me and for the devs. Speed sometimes won over polish, but the system kept the fast work consistent, and it’s the first thing I’d build again.</p></div></div>

  <a class="nx" id="nx" href="/glasshive" data-peek="100"><div class="layer"><div class="shot"><div class="pvi"><svg viewBox="0 0 680 130"><path fill="#FFC857" d="${shapeD('blob', 560, 96, 118, .3)}"/><path fill="#F49AD8" d="${shapeD('clover', 300, -10, 70, .4)}"/></svg><div class="fr" style="left:14px;top:30px;width:150px;height:97px;transform:rotate(-4deg)"><img src="gh_c_booking.webp" alt=""></div><div class="fr" style="left:176px;top:10px;width:172px;height:115px;transform:rotate(3deg)"><img src="gh_c_month.webp" alt=""></div><div class="fr" style="left:362px;top:-8px;width:88px;height:131px;transform:rotate(-3deg)"><img src="gh_m_store.webp" alt="" style="object-position:top"></div><div class="fr" style="left:462px;top:16px;width:92px;height:105px;transform:rotate(4deg)"><img src="gh_f_review.webp" alt="" style="object-position:top"></div><div class="fr" style="left:566px;top:58px;width:150px;height:56px;transform:rotate(-3deg)"><img src="gh_o_kit.webp" alt=""></div><img src="gh_bee.webp" alt="" style="position:absolute;left:588px;top:-2px;width:66px;transform:rotate(12deg)"></div></div></div><div class="lab"><span style="font-size:12px;margin-bottom:6px">Next project</span><span style="font-size:38px;font-weight:500;letter-spacing:-1.5px;display:flex;align-items:center;gap:10px">GlassHive <svg class="ic" viewBox="0 0 24 24" style="font-size:32px"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span></div><div class="nxm" aria-hidden="true" style="background:#7A5410"><svg viewBox="0 0 346 170"><path fill="#FFC857" d="${shapeD('blob', 290, 150, 96, .3)}"/><path fill="#7476F0" d="${shapeD('clover', 130, -6, 58, .4)}"/></svg><div class="fr" style="left:14px;top:34px;width:168px;height:112px;transform:rotate(-3deg);border-radius:8px"><img src="gh_c_month.webp" alt=""></div><div class="fr" style="left:196px;top:14px;width:78px;height:118px;transform:rotate(3deg);border-radius:8px"><img src="gh_m_store.webp" alt=""></div><div class="fr" style="left:268px;top:72px;width:66px;height:76px;transform:rotate(-4deg);border-radius:8px"><img src="gh_f_review.webp" alt=""></div><img class="pk" src="gh_bee.webp" alt="" style="left:282px;top:4px;width:50px;transform:rotate(12deg)"></div></a>
  <div style="height:40px"></div>
`

export default buildPage('boss', { head: innerNav('work'), hero, rest, heroBg: 'P' }, PAL)
