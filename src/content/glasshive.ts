import { badge, buildPage, innerNav, outcomes, shapes, type HeroShape, type Palette } from '@/lib/markup'
import { shapeD } from '@/lib/shapes'

export const PAL: Palette = {
	l: { D: '#4F50CF', Y: '#FFC857', K: '#F49AD8', P: '#7476F0', I: '#DAECFF', O: '#FF5B4D' },
	d: { D: '#141240', Y: '#C98A26', K: '#8E3F86', P: '#3E40AE', I: '#FFE7A6', O: '#FF6B5C' },
}
const HS: HeroShape[] = [['blob', 'D', 340, 190, 600, 0], ['blob', 'P', 40, 40, 175, 1.2], ['clover', 'K', 620, 30, 160, .3], ['sun', 'P', 640, 350, 170, .2], ['blob', 'Y', 185, 262, 245, .4], ['star', 'I', 330, 66, 42, .3]]
const HSm: HeroShape[] = [['blob', 'D', 195, 300, 560, 0], ['blob', 'P', 0, 24, 120, 1.2], ['clover', 'K', 386, 32, 106, .3], ['sun', 'P', 372, 596, 120, .2], ['blob', 'Y', 140, 150, 180, .4], ['star', 'I', 356, 234, 28, .3]]
// Pull-quote band shapes
const PULL: HeroShape[] = [['sun', 'P', -18, 150, 105, .2], ['clover', 'K', 656, 16, 78, .4], ['star', 'O', 586, 148, 30, .3]]
const PULLm: HeroShape[] = [['sun', 'P', -34, 168, 88, .2], ['clover', 'K', 386, 8, 62, .4], ['star', 'O', 350, 176, 22, .3]]
const OUT: Parameters<typeof outcomes>[0] = [
	['sun', '#FFC857', 'Calendar became a core productivity tool', 'Daily and weekly views, booking links, and auto confirmations.'],
	['star', '#7476F0', 'Partner launch landed', 'Strong recognition from the partner team.'],
	['clover', '#F49AD8', 'Whole team on Figma', 'Moved over with minimal disruption.'],
]

const hero = /* html */ `
  <div class="hero">
    <svg viewBox="0 0 680 380" class="dsk">${shapes(HS)}</svg><svg viewBox="0 0 390 600" class="mob" style="width:390px;height:600px">${shapes(HSm)}</svg>
    <div class="fr" data-m="left:40px;top:262px;width:250px;height:163px" style="left:394px;top:74px;width:230px;height:150px;transform:rotate(-6deg)"><img src="h_cal.jpg" alt="GlassHive month calendar" style="object-position:top left"></div>
    <div class="fr" data-m="left:198px;top:368px;width:170px;height:120px" style="left:470px;top:168px;width:170px;height:120px;transform:rotate(5deg)"><img src="h_modal.jpg" alt="Day overview" style="object-position:top"></div>
    <div class="fr" data-m="left:30px;top:420px;width:136px;height:100px" style="left:372px;top:214px;width:136px;height:100px;transform:rotate(-2deg)"><img src="h_stats.jpg" alt="Sent campaign stats"></div>
    <svg viewBox="0 0 680 380" class="dsk" style="position:absolute;inset:0;width:680px;height:380px;z-index:3;pointer-events:none">${badge(404, 338, 48, 10, ['UX/UI', 'B2B SaaS'], 12, 'O')}</svg><svg viewBox="0 0 390 600" class="mob" style="position:absolute;inset:0;width:390px;height:600px;z-index:3;pointer-events:none">${badge(306, 542, 48, 10, ['UX/UI', 'B2B SaaS'], 12, 'O')}</svg>
    <h1 class="ab" data-m="left:24px;top:104px;font-size:52px" style="left:44px;top:184px;font-size:60px;font-weight:500;letter-spacing:-2px;line-height:1;color:#262068">GlassHive</h1>
    <div class="ab" data-m="left:26px;top:168px;width:310px" style="left:46px;top:256px;width:320px;font-size:16px;line-height:1.45;color:#262068">The go-to designer on a CRM/PRM, from scheduling to storefronts.</div>
  </div>
`

const rest = /* html */ `

  <div class="wrap">
    <div class="meta"><div><b>Role</b><span>Product designer</span></div><div><b>Team</b><span>Product, engineering, partner devs</span></div><div><b>Focus</b><span>Calendar, integrations, marketplace, design ops</span></div><div><b>Tools</b><span>Figma, Adobe XD, Jira</span></div></div>
    <p class="gist">GlassHive is a CRM/PRM that helps tech companies and their partners create, send, and track sales content from one place. I owned core product UX: I rebuilt the calendar into a real scheduling hub, led design on a high-stakes partner integration, shaped the marketplace's vendor storefronts, and moved the whole team from XD to Figma.</p>
    <div class="ch"><div class="chh"><span class="num" data-c="#FFC857">01</span><h3>Calendar redesign</h3></div>
      <p class="body">The old calendar was a static grid, so reps booked meetings somewhere else. I mapped every scheduling scenario end to end, then rebuilt it with daily and weekly views, booking links, and automated confirmation emails.</p></div>
  </div>

  <div class="band" data-m="height:756px" style="height:480px;background:var(--band)">
    <div class="fr" data-m="left:14px;top:40px;width:340px;height:228px" style="left:24px;top:40px;width:360px;height:241px;transform:rotate(-3.5deg);z-index:1"><img src="c_month.jpg" alt="Month view"></div>
    <div class="fr" data-m="left:22px;top:300px;width:150px;height:170px" style="left:362px;top:24px;width:168px;height:191px;transform:rotate(4deg);z-index:2"><img src="c_day.jpg" alt="Day overview modal" style="object-position:top"></div>
    <div class="fr" data-m="left:198px;top:306px;width:164px;height:48px" style="left:504px;top:56px;width:150px;height:44px;transform:rotate(7deg);z-index:3;border-radius:3px"><img src="c_note.jpg" alt="Design note: a secondary tag reduces visual clutter"></div>
    <div class="fr" data-m="left:184px;top:380px;width:194px;height:75px" style="left:396px;top:236px;width:270px;height:106px;transform:rotate(-2.5deg);z-index:2"><img src="c_overlay.jpg" alt="Campaign cards: scheduled, unscheduled, sent"></div>
    <div class="fr" data-m="left:150px;top:532px;width:222px;height:143px" style="left:196px;top:300px;width:230px;height:140px;transform:rotate(2.5deg);z-index:3"><img src="c_booking.jpg" alt="Booking link page"></div>
    <div class="fr" data-m="left:16px;top:532px;width:106px;height:77px" style="left:18px;top:306px;width:110px;height:80px;transform:rotate(-6deg);z-index:2;border-width:5px 5px 14px"><img src="c_google.jpg" alt="Google Calendar reference" style="object-position:top left"></div>
    <div class="fr" data-m="left:42px;top:604px;width:100px;height:64px" style="left:62px;top:368px;width:104px;height:66px;transform:rotate(5deg);z-index:3;border-width:5px 5px 14px"><img src="c_outlook.jpg" alt="Outlook reference" style="object-position:top left"></div>
    <i class="tape" data-m="left:150px;top:30px" style="left:178px;top:30px;transform:rotate(-5deg)"></i>
    <i class="tape" data-m="left:300px;top:298px" style="left:552px;top:48px;transform:rotate(12deg);width:40px"></i>
    <i class="tape" data-m="left:236px;top:524px" style="left:286px;top:292px;transform:rotate(4deg)"></i>
    <svg class="dsk" viewBox="0 0 680 480" style="position:absolute;inset:0;width:100%;height:100%;z-index:4;pointer-events:none"><path d="M236 150c34-22 118-24 146-2 18 16 2 44-44 54-52 11-118 6-130-16-8-15 6-25 22-32" fill="none" stroke="#FF5B4D" stroke-width="4" stroke-linecap="round"/><path d="M585 112c-14 10-26 20-38 34m0 0-3-13m3 13 12-6" fill="none" stroke="#FFC857" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <div class="note" data-m="left:206px;top:226px" style="left:300px;top:196px;transform:rotate(-4deg);background:#FFC857">Every event type,<br>one calendar</div>
    <div class="note" data-m="left:40px;top:446px" style="left:556px;top:122px;transform:rotate(-5deg);background:#DAECFF">One click,<br>full context</div>
    <div class="note" data-m="left:244px;top:668px" style="left:440px;top:360px;transform:rotate(4deg);background:#F49AD8">Booking links<br>built in</div>
    <span class="lbl" data-m="left:16px;top:690px" style="left:18px;top:446px;transform:rotate(-2deg)">research: what people already use</span>
  </div>


  <div class="band" data-m="height:210px" style="height:190px;margin-top:40px;background:var(--bf);transition:background .3s">
    <svg class="dsk" viewBox="0 0 680 190" style="position:absolute;inset:0;width:100%;height:100%">${shapes(PULL)}</svg><svg class="mob" viewBox="0 0 390 210" style="position:absolute;inset:0;width:100%;height:100%">${shapes(PULLm)}</svg>
    <div data-m="width:290px;font-size:23px" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:380px;text-align:center;font-size:26px;font-weight:500;line-height:1.3;letter-spacing:-.4px;color:var(--ink)">If a dev has to guess,<br>I'm not finished.</div>
  </div>

  <div class="wrap"><div class="ch" style="padding-top:28px"><div class="chh"><span class="num" data-c="#F49AD8">02</span><h3>Partner integration</h3></div>
    <p class="body">A partner that books sales meetings wanted to sell through GlassHive. As the design liaison between their team and our engineers, I mapped the whole purchase path (request, do-not-contact lists, review, payment) and spelled out every payment state, email, and edge case for engineering.</p></div></div>

  <div class="band" data-m="height:792px" style="height:440px;background:var(--tk)">
    <svg class="dsk" viewBox="0 0 680 440" style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none"><path d="M40 150C90 80 130 220 200 140S300 60 360 140 440 220 520 140 620 70 660 120" fill="none" stroke="#FF5B4D" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/></svg>
    <div class="fr" data-m="left:24px;top:44px;width:150px;height:171px" style="left:22px;top:58px;width:130px;height:148px;transform:rotate(-3deg);z-index:1"><img src="f_request.jpg" alt="Request appointments" style="object-position:top"></div>
    <div class="fr" data-m="left:208px;top:70px;width:150px;height:171px" style="left:186px;top:92px;width:130px;height:148px;transform:rotate(2deg);z-index:1"><img src="f_lists.jpg" alt="Do-not-contact lists" style="object-position:top"></div>
    <div class="fr" data-m="left:24px;top:296px;width:150px;height:171px" style="left:350px;top:52px;width:130px;height:148px;transform:rotate(-2deg);z-index:1"><img src="f_review.jpg" alt="Review" style="object-position:top"></div>
    <div class="fr" data-m="left:208px;top:322px;width:150px;height:171px" style="left:514px;top:88px;width:130px;height:148px;transform:rotate(3deg);z-index:1"><img src="f_invoice.jpg" alt="Make a payment" style="object-position:top"></div>
    <span class="lbl" data-m="left:30px;top:228px" style="left:30px;top:222px;transform:rotate(-3deg)">1 request</span>
    <span class="lbl" data-m="left:198px;top:256px" style="left:196px;top:254px;transform:rotate(2deg)">2 do-not-contact lists</span>
    <span class="lbl" data-m="left:30px;top:480px" style="left:358px;top:216px;transform:rotate(-2deg)">3 review</span>
    <span class="lbl" data-m="left:214px;top:508px" style="left:524px;top:252px;transform:rotate(3deg)">4 pay</span>
    <div class="fr" data-m="left:58px;top:572px;width:300px;height:172px" style="left:384px;top:280px;width:256px;height:147px;transform:rotate(-2deg);z-index:2"><img src="f_edge.jpg" alt="Payment method needed modal with a dev note"></div>
    <div class="note" data-m="left:18px;top:692px" style="left:258px;top:304px;transform:rotate(-5deg);background:#FF5B4D;color:#2A1240">Edge cases,<br>written down</div>
    <i class="tape" data-m="left:180px;top:564px" style="left:484px;top:272px;transform:rotate(-3deg)"></i>
  </div>

  <div class="band" data-m="height:300px" style="height:258px;background:var(--board)">
    <img src="f_callouts.jpg" alt="Dev handoff board: appointments table with tooltip and filter callouts" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
    <span class="lbl" style="left:16px;top:16px;background:#FDFAF3;color:#262068">dev handoff: appointments table</span>
    <div class="note" data-m="left:18px;top:196px" style="left:28px;top:150px;transform:rotate(-4deg);background:#FFC857">Every state,<br>called out<br>for devs</div>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#7476F0" style="color:#FFF0C7;font-weight:600">03</span><h3>Vendor storefronts</h3></div>
    <p class="body">Vendors needed a home in the marketplace where partners could find them. I designed a guided storefront builder (header, brand colors, video, featured content) with a review step before anything went live, plus co-branded sign-up pages for vendor-sponsored accounts.</p></div></div>

  <div class="band" data-m="height:716px" style="height:420px;background:var(--tp)">
    <div class="fr" data-m="left:16px;top:40px;width:168px;height:231px" style="left:30px;top:34px;width:196px;height:270px;transform:rotate(-3deg);z-index:1"><img src="m_builder.jpg" alt="Storefront builder" style="object-position:top"></div>
    <div class="fr" data-m="left:198px;top:28px;width:176px;height:263px" style="left:262px;top:22px;width:196px;height:293px;transform:rotate(2.5deg);z-index:2"><img src="m_store.jpg" alt="Published storefront" style="object-position:top"></div>
    <div class="fr" data-m="left:18px;top:366px;width:204px;height:105px" style="left:470px;top:68px;width:196px;height:100px;transform:rotate(5deg);z-index:2"><img src="m_signup1.jpg" alt="Co-branded sign-up page"></div>
    <div class="fr" data-m="left:166px;top:486px;width:204px;height:105px" style="left:478px;top:186px;width:186px;height:95px;transform:rotate(-4deg);z-index:3"><img src="m_signup2.jpg" alt="Co-branded sign-up page"></div>
    <i class="tape" data-m="left:258px;top:18px" style="left:332px;top:12px;transform:rotate(3deg)"></i>
    <i class="tape" data-m="left:94px;top:358px" style="left:542px;top:60px;transform:rotate(8deg);width:44px"></i>
    <svg class="dsk" viewBox="0 0 680 420" style="position:absolute;inset:0;width:100%;height:100%;z-index:4;pointer-events:none"><path d="M206 92c22-26 50-34 74-24m0 0-12-9m12 9-6 13" fill="none" stroke="#FF5B4D" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <div class="note" data-m="left:118px;top:262px" style="left:176px;top:262px;transform:rotate(-5deg);background:#FFC857">Build it<br>without<br>a designer</div>
    <div class="note" data-m="left:254px;top:366px" style="left:344px;top:318px;transform:rotate(3deg);background:#F49AD8">Reviewed<br>before it<br>goes live</div>
    <div class="note" data-m="left:24px;top:512px" style="left:548px;top:300px;transform:rotate(5deg);background:#DAECFF">Co-branded<br>sign-up</div>
    <div class="st" data-m="left:20px;top:654px" style="left:24px;top:372px;transform:rotate(-2deg)"><b style="background:#FDFAF3;color:#262068;box-shadow:0 0 0 .5px rgba(38,32,104,.25)">Draft</b><i>→</i><b style="background:#FFC857;color:#3A2A06">Pending</b><i>→</i><b style="background:#4F50CF;color:#FDFAF3">Approved</b><b style="background:#FF5B4D;color:#2A1240">Denied</b></div>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#DAECFF">04</span><h3>Design ops</h3></div>
    <p class="body">I led the move from Adobe XD to Figma with minimal disruption, built a handoff kit (dev notes, status stickers, a color cheatsheet) so engineers always knew what was final, and paired with developers to squash inconsistencies across the app.</p></div></div>

  <div class="band" data-m="height:640px" style="height:356px;background:var(--ty)">
    <div class="fr" data-m="left:14px;top:40px;width:350px;height:131px" style="left:24px;top:36px;width:400px;height:150px;transform:rotate(-2deg);z-index:1"><img src="o_kit.jpg" alt="Dev handoff kit: notes, stickers, color cheatsheet"></div>
    <div class="fr" data-m="left:42px;top:484px;width:320px;height:125px" style="left:398px;top:206px;width:256px;height:100px;transform:rotate(3deg);z-index:2"><img src="o_todo.jpg" alt="To do and review notes"></div>
    <img class="stk" src="s_spirit.png" alt="Team bee sticker" data-m="left:270px;top:150px;width:104px" style="left:520px;top:30px;width:124px;transform:rotate(8deg)">
    <div class="dn" data-m="left:26px;top:216px" style="left:34px;top:232px;transform:rotate(9deg)">Spare dev note, cuz you gunna need it.</div>
    <div class="fr" data-m="left:200px;top:290px" style="left:200px;top:212px;width:150px;height:94px;transform:rotate(-3deg);z-index:2;background:#FDFAF3"><svg viewBox="0 0 150 94" style="display:block;width:100%;height:100%"><rect x="18" y="22" width="44" height="44" rx="12" fill="#7476F0"/><text x="40" y="50" text-anchor="middle" font-size="15" font-weight="500" fill="#FDFAF3" font-family="inherit">XD</text><path d="M70 44h12m-5-5 5 5-5 5" stroke="#262068" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="90" y="22" width="44" height="44" rx="12" fill="#FF5B4D"/><circle cx="105" cy="37" r="6" fill="#FDFAF3"/><circle cx="119" cy="37" r="6" fill="#FFC857"/><circle cx="105" cy="51" r="6" fill="#DAECFF"/><circle cx="119" cy="51" r="6" fill="#F49AD8"/></svg></div>
    <i class="tape" data-m="left:160px;top:30px" style="left:196px;top:30px;transform:rotate(-4deg)"></i>
    <div class="note" data-m="left:36px;top:352px" style="left:430px;top:96px;transform:rotate(4deg);background:#F49AD8">My dev<br>handoff kit</div>
    <span class="lbl" data-m="left:196px;top:400px" style="left:198px;top:322px;transform:rotate(-2deg)">xd → figma, team by team</span>
  </div>

  <div class="wrap"><div class="ch"><div class="chh"><span class="num" data-c="#FF5B4D"><svg class="ic" viewBox="0 0 24 24" style="font-size:16px;stroke-width:2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h3>What changed</h3></div>
    <div class="out">${outcomes(OUT)}</div>
    <b style="display:block;font-size:12px;font-weight:400;color:var(--mut);margin:28px 0 6px">Looking back</b>
    <p class="body">Being the go-to designer taught me to move fast and write everything down. Next time I'd lock in success metrics up front, so the wins come with numbers, not just happy reps.</p></div></div>

  <a class="nx" id="nx" href="/boss-startup-science" data-peek="100"><div class="layer"><div class="shot"><div class="pvi"><svg viewBox="0 0 680 130"><path fill="#7476F0" d="${shapeD('blob', 560, 96, 118, .3)}"/><path fill="#DAECFF" d="${shapeD('clover', 300, -10, 70, .4)}"/></svg><div class="fr" style="left:14px;top:30px;width:150px;height:97px;transform:rotate(-4deg)"><img src="pv_b_topics.webp" alt="" style="object-position:top left"></div><div class="fr" style="left:176px;top:-6px;width:76px;height:109px;transform:rotate(4deg)"><img src="pv_b_donut.webp" alt="" style="object-position:top"></div><div class="fr" style="left:266px;top:12px;width:160px;height:115px;transform:rotate(-3deg)"><img src="pv_b_collect.webp" alt="" style="object-position:top left"></div><div class="fr" style="left:440px;top:20px;width:100px;height:100px;transform:rotate(4deg)"><img src="pv_b_pricing.webp" alt="" style="object-position:top"></div><div class="fr" style="left:552px;top:58px;width:150px;height:82px;transform:rotate(-3deg)"><img src="pv_b_access.webp" alt="" style="object-position:top left"></div><img src="pv_b_tile.webp" alt="" style="position:absolute;left:590px;top:-4px;width:66px;transform:rotate(12deg);filter:drop-shadow(3px 4px 0 rgba(20,18,64,.32))"></div></div></div><div class="lab"><span style="font-size:12px;margin-bottom:6px">Next project</span><span style="font-size:38px;font-weight:500;letter-spacing:-1.5px;display:flex;align-items:center;gap:10px">BOSS Startup Science <svg class="ic" viewBox="0 0 24 24" style="font-size:32px"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span></div><div class="nxm" aria-hidden="true" style="background:#2A2C9E"><svg viewBox="0 0 346 170"><path fill="#7476F0" d="${shapeD('blob', 290, 150, 96, .3)}"/><path fill="#DAECFF" d="${shapeD('clover', 130, -6, 58, .4)}"/></svg><div class="fr" style="left:14px;top:30px;width:168px;height:121px;transform:rotate(-3deg);border-radius:8px"><img src="pv_b_collect.webp" alt=""></div><div class="fr" style="left:198px;top:14px;width:70px;height:100px;transform:rotate(4deg);border-radius:8px"><img src="pv_b_donut.webp" alt=""></div><div class="fr" style="left:262px;top:74px;width:74px;height:74px;transform:rotate(-3deg);border-radius:8px"><img src="pv_b_pricing.webp" alt=""></div><img class="pk" src="pv_b_tile.webp" alt="" style="left:290px;top:2px;width:46px;transform:rotate(12deg)"></div></a>
  <div style="height:40px"></div>
`

export default buildPage('gh', { head: innerNav('work'), hero, rest, heroBg: 'D' }, PAL)
