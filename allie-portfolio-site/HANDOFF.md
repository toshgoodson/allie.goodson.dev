# allie.goodson.dev rebuild: handoff for Claude Code

This folder holds the approved sketches for every page of Allie Goodson's new portfolio, plus every asset they use. Rebuild the site in this repo so it matches the sketches, then ship it the way the current site already deploys (GitHub Pages on the custom domain allie.goodson.dev).

This handoff folder can live in the repo as a design reference, but keep it out of the deployed site (not in `public/` and not in the export).

## What's here

| Path | What it is |
|---|---|
| `reference/*.html` | One self-contained sketch per page. Everything is inlined, so each one opens in a browser on its own. **These are the spec.** |
| `reference/screenshots/` | Each page in light and dark mode, on desktop and on a phone (`*-phone-*`). Home has three states: hero at rest, hero after the scroll animation, and the work list. |
| `source/<page>/` | The readable source of each sketch (`*.src.html`) plus every image, video, and font it uses, already at final web size. |
| `source/gh_build.py` | Rebuilds a reference file from its source: `python3 source/gh_build.py source/about/about.src.html /tmp/about.html` |
| `public/AllieGoodson_Resume_2026.pdf` | The new resume. |

## Pages and URLs

| Route | Reference | Source |
|---|---|---|
| `/` | `reference/home.html` | `source/home/` |
| `/glasshive` | `reference/glasshive.html` | `source/glasshive/` |
| `/boss-startup-science` | `reference/boss-startup-science.html` | `source/boss-startup-science/` |
| `/about` | `reference/about.html` | `source/about/` |
| `/contact` | `reference/contact.html` | `source/contact/` |
| `/AllieGoodson_Resume_2026.pdf` | | `public/` |

Keep these URLs. `/glasshive`, `/boss-startup-science`, `/about`, and `/contact` already exist on the live site.

**Old URLs.** Put a copy of the new resume at `/resume-2026-04-29.pdf` too, so old links get the new resume. Redirect these retired pages: `/clean-sf` and `/marshawarma` go to `/#work`, `/multimedia` goes to `/about`, and `/copyright` goes to `/`. GitHub Pages can't do server redirects, so make each one a tiny static page with a meta refresh, a canonical link, and a plain link.

**Links.** The sketches leave links empty, so wire them up like this:
- The name pill goes to `/`. Work goes to `/#work` (on the home page, scroll to the project list). About goes to `/about` and Contact to `/contact`. Resume opens the PDF in a new tab.
- Each home project row links to its case study.
- Next project rows: GlassHive goes to BOSS Startup Science, and BOSS Startup Science goes to GlassHive.
- "Open in email" is `mailto:allie@goodson.dev`. LinkedIn is `https://www.linkedin.com/in/alliegoodson/` and opens in a new tab, as does the Resume button on Contact.

## Stack and deploy

- Use Next.js (App Router) with `output: 'export'` and `images: { unoptimized: true }`. Static pages only, no server.
- Deploy with GitHub Pages. If the repo already has a Pages workflow, keep it. If not, add the standard `actions/upload-pages-artifact` + `actions/deploy-pages` workflow.
- Before replacing the old site, list what's in the repo. Keep `CNAME` (allie.goodson.dev), the favicon and icons, the deploy workflow, and anything else hosting depends on. Keep `<meta name="theme-color" content="#FF5B4D">`.
- Port the sketch CSS as-is, into CSS Modules or one global stylesheet. No CSS framework.
- Work on a new branch and open a pull request. Don't push to main. Allie reviews it and Tosh merges.

## Match the sketches exactly

The sketches are final and approved. Copy the text verbatim, curly apostrophes included. Keep every color, size, rotation, offset, shadow, z-order, and timing.

**Layout model.** Every page has two fixed canvases, each scaled with CSS `zoom`. Recompute zoom on resize, and don't block pinch zoom.
- **600px and wider (tablet and desktop):** a 680px canvas, with zoom = clamp(viewport width / 680, 0.88, 1.6).
- **Under 600px (phones):** a 390px canvas, with zoom = clamp(viewport width / 390, 0.8, 1.5). The sketches add the class `m` to `<html>` in this mode.

Pick the mode with a media query (`max-width: 599.98px`) and measure with `document.documentElement.clientWidth`. Don't use `window.innerWidth`, because mobile browsers report the zoomed-out width when content overflows.

**Images.** Images are about 3.2× their display width so they stay sharp at 1.6 zoom on retina screens. Use plain `<img>` with explicit width and height, and add `loading="lazy"` below the fold. Alt text is in the sketches.

**Fonts.** Self-host the woff2 files and preload them.
- Corben 700 is for Allie's name only.
- Corben 400 is only for the home line "And easy on the eyes."
- Shantell Sans (variable) is for sticky notes, with `font-variation-settings: 'BNCE' 60, 'INFM' 60`.
- Everything else uses the system font stack from the sketches.

**Icons.** Icons are Tabler outline icons, and the exact paths are inline in the sketches. Using `@tabler/icons-react` is fine.

## Phones (under 600px)

Every page has a full phone layout in the same files. To see it, open a reference on a phone or make the browser narrower than 600px.

- **`data-m` attributes.** An element with `data-m` gets those inline-style overrides on phones: positions, sizes, and band heights. Treat each one as that element's phone-breakpoint styles.
- **`.dsk` and `.mob`.** These show an element only on desktop or only on phones. For example, each hero has a phone shape layer (`#svm`, drawn from its own list `HSm`) and a phone badge layer (`#svbm`). Annotation doodles on the case studies are desktop only.
- **Rules under `html.m`.** The CSS rules under `html.m` hold the rest of the phone styles (type sizes, paddings, grids).
- **Nav.** On phones the links pill becomes a hamburger (`.hb`) that opens a full-width menu panel (`.mm`). The panel drops down from the top with the same scalloped bottom edge as the nav backdrop and shows big links, with the current page in a light-blue pill (the same chip as the desktop nav). A yellow sun shape sits in its corner. The X, a tap outside, or Escape closes it. In the real site, also dim the page behind it and keep focus inside while it's open.
- **Home.** The hero stage is 390×700, and each shape has phone states `am` and `bm` (the `SM` list). The end text has phone sizes via `data-m`. Phones can't hover, so each project row shows its picture as a card (`.pcard`), and its label uses normal ink instead of the difference blend. The "Phone view" button under the home sketch is a review tool only, so don't build it.
- **Case studies.** The Next project row becomes a heading plus a picture card (`.nxm`). Meta grids use two columns, and the outcome cards stack.
- **Email row.** The address wraps above "Open in email".

## Shared pieces

- **Nav.** The name pill is Corben in #FF6B5C on the navy pill. The links pill shows the active page as a light chip. The theme toggle is a clover shape with Tabler sun and moon icons. On inner pages, once you scroll, a page-colored backdrop with a scalloped bottom edge slides in behind the nav (`.nbk`). On home, the name pill fades in and the links pill expands from a hamburger once you're past the hero.
- **Light and dark.** The `.dk` class swaps the CSS variables, and the hero shapes switch palettes (`PAL.l` and `PAL.d`). The toggle runs a two-stage noise dissolve on a canvas (700ms covering, 700ms revealing, with an orange edge). Default to the visitor's system setting and remember their choice in localStorage. Apply it before first paint so there's no flash.
- **Hero shapes.** Every blob, sun, clover, star, and badge is an SVG path generated by `shapeD()` and `smooth()` from the formula table `F`. Port these into one small TypeScript module and render the paths at build time.
- **Scrapbook pieces.** Tilted photo frames with hard offset shadows (`.fr`), tape, sticky notes (`.note`), mono label chips (`.lbl`), and stickers.
- **Hover peeks.** Home project rows and the Next project rows reveal a picture layer through a wobbly blob that springs open around the cursor (the `tick()` loop). The label uses `mix-blend-mode: difference`. On touch devices skip the peek and let a tap navigate.
- **Email row** (About and Contact). The address and the yellow sunburst sticker are one button that copies the address. It uses the Clipboard API with an execCommand fallback, shows a "copy" tag on hover and a "copied!" tag plus checkmark after a click, spins the sticker on hover, pops it on click, and announces the copy to screen readers. "Open in email" is a separate outline link.
- **Reduced motion.** Respect `prefers-reduced-motion`: no spinning clock hands, wobble, sticker spin or pop, or video autoplay (show the poster), and swap the dissolve for a plain crossfade.

## Page notes

- **Home.** The reference is shown inside a viewer frame with a fake scroll slider and a "Scroll" button. Drop the frame and controls and drive the same animation from real scroll:
  - The hero pins for one hero-height of scroll while each shape morphs from its state `a` to state `b`, staggered by `tm`.
  - The "Product designer" badge text fades out over the first 26%, and the two end lines fade in from 72%.
  - Then the page releases and scrolls normally. Keep the pin short, because Allie doesn't want scroll hijacking beyond it.
  - "Selected work" lists two projects, GlassHive and BOSS Startup Science, with the count "02".
- **GlassHive and BOSS Startup Science.** Each has a hero with a title blob and badge, a meta row, sections, scrapbook bands, "Looking back", and a Next project row.
- **About.** It has a polaroid hero, the clock badge (hands spin, badge wiggles), a Burning Man band, an art band with a muted, looping, inline video (`spine.mp4`, poster `spine_poster.webp`), and the email row.
- **Contact.** The postcard (squiggles, perforated stamp, postmark) is drawn in code and is decorative, so mark it `aria-hidden`. A yellow references sticky note is stuck on its corner. Below the hero are the email row and the LinkedIn and Resume buttons.

## Titles and descriptions

| Route | `<title>` | Meta description |
|---|---|---|
| `/` | Allie Goodson \| Product designer | I turn tangled systems into calm, clear interfaces. Research, flows, UI, and brand, usually as the only designer in the room. |
| `/glasshive` | GlassHive \| Allie Goodson | The go-to designer on a CRM/PRM, from scheduling to storefronts. |
| `/boss-startup-science` | BOSS Startup Science \| Allie Goodson | The only designer at an edtech startup for founders: the design system, the academy, and the admin tools. |
| `/about` | About \| Allie Goodson | Product designer by day. The rest of the time, I make things out of whatever I can get my hands on. |
| `/contact` | Contact \| Allie Goodson | Have a question, a project, or just want to talk shop? My inbox is open. |

## Scope

Only the five pages above ship, with exactly the projects shown in the sketches. Don't add other projects, pages, or placeholder links.

## Before calling it done

- `next build` succeeds and the exported `out/` folder works from a plain static server, including the redirects and both resume URLs.
- Compare every page against `reference/` at 680px and 1088px wide, and on phones at 360px, 390px, and 430px, in light and dark mode. Nothing may scroll sideways on a phone.
- Check the hover peeks, theme toggle, copy buttons, video, nav links, and Next project rows.
- You can reach every link and button by keyboard, with a visible focus ring.
- Run a Lighthouse accessibility check and fix anything under 95.
