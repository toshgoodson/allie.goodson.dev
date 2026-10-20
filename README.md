# Code for https://allie.goodson.dev

👋 Hello! You're looking at the codebase for Allie Goodson's personal website.

## Licensing

### Code

Unless mentioned otherwise, all scripts, html, stylesheets, and such things that might generally be considered "code" are Copyright 2021 Tosh Goodson and are distributed under the [AGPLv3 license](/LICENSE).

### Assets

Unless mentioned otherwise, all art assets (files in `public/`) are Copyright 2021 Allie Goodson and may not be used without permission.

### Text Content

Unless mentioned otherwise, all textual contents of the site are Copyright 2021 Allie Goodson and may not be used without permission.
## Working on the site

- `yarn dev` runs a local dev server at http://localhost:8084.
- `yarn build` writes the static site to `out/`; `yarn serve` serves it like GitHub Pages does.
- `yarn release` builds and copies `out/` to `docs/` for the `live` branch (how the site deploys today). `.github/workflows/deploy.yml` can take over once Pages is switched to GitHub Actions.

Pages are static HTML ported from the approved sketches in `allie-portfolio-site/reference/` (not deployed):

- `src/content/*.ts`: each page's markup and text. Elements with `data-m="…"` carry their phone (<600px) styles.
- `src/styles/`: CSS ported from the sketches (`shared.css` for the inner pages, one file per page, `base.css` site-wide).
- `src/lib/shapes.ts`: the blob/sun/clover/star/badge shape generator.
- `src/client/`: interactions (theme dissolve, phone menu, hover peeks, copy email, home scroll animation).
