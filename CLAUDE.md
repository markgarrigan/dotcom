# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

markgarrigan.com, Mark Garrigan's portfolio, designed as a TUI "setup utility". Product facts and project stories live in `PRODUCT.md`. The visual system is in `DESIGN.md`, and the home page's direction contract in `.impeccable/surfaces/site-index-html.md`.

## Commands

- `npm install`: install Tailwind 4 (the only dependency)
- `npm run build`: render the pages (`node src/build.mjs`), then compile `src/site.css` to `site/assets/css/site.css`
- `npm run dev`: render the pages, then watch the CSS
- Serve locally: `cd site && python3 -m http.server 4321`
- Docker: `docker build -t markgarrigan-dotcom .` serves the site on port 80, and `GET /up` returns 200 for boxx.

There is no test suite or linter.

## CI and releases

- `.github/workflows/ci.yml`: every pull request and push to main renders the site and builds the image. Pushes to main also publish `ghcr.io/markgarrigan/dotcom:edge` and `:sha-<short>` (never `latest`).
- `.github/workflows/release.yml`: runs after CI passes on a push to main (`workflow_run`), never alongside it. release-please keeps a release PR open from conventional commits (`feat:`, `fix:`, `feat!:`). Merging it bumps `package.json`, writes `CHANGELOG.md`, tags `vX.Y.Z` and publishes the GitHub Release. The `publish` job then pushes the image: `X.Y.Z` always, and `X.Y`, `X` and `latest` only for stable releases. It refuses to publish if the tag doesn't match `package.json`, or if `site/markgarrigan.pdf` is missing.
- Images carry a signed build-provenance attestation.
- boxx follows a tag's digest, so point production at `:1` (or `:latest`) with update policy `auto` to deploy each stable release, and a staging app at `:edge`.
- To force a version, put `Release-As: 1.0.0` in a commit body.

## Architecture

- `src/content.mjs` holds every project's facts: story, layers, decisions, results, inventory and screens. Every claim must be sourced from the repos or Mark's interview (PRODUCT.md › Project Stories). Don't add metrics or outcomes.
- `src/build.mjs` is a tiny static generator. It renders the shared shell (title bar with the font and theme menus, tabs, key legend) and writes `site/index.html`, `site/about/`, `site/contact/` and `site/work/<slug>/index.html`. The generated HTML is build output, so edit the generator or the content, not the HTML.
- `src/site.css` holds Tailwind 4 plus five themes as CSS variables on `:root[data-theme=…]`: Catppuccin Latte and Mocha (the OS-driven defaults), Frappé, Macchiato and Borland. Fonts are self-hosted Nerd Fonts Mono builds (subset woff2): SauceCodePro (default), JetBrains Mono NL and Noto Sans Mono via `:root[data-font=…]`, with BigBlueTerm437 forced in Borland. Components: `.pane`, `.item`, `.st`, `.btn`, `.legend`, `.menu`.
- `site/assets/js/main.js` is progressive enhancement only. It handles the theme and font menus (live preview, persisted in localStorage), the vim-style keys (j/k move or scroll, d/u half page, gg/G ends, l open, h back, W/A/C tabs, E/R/I/F/T), list selection driving the help pane, keyboard shortcuts, visited marks, the résumé "(soon)" fallback, and the contact form, which composes a `mailto:` because there's no server handler yet.
- Images in `site/assets/img/work/` are screenshots of the live sites or illustrations of private tools, rendered from `src/mockups/*.html` with invented demo data. Each has a `.webp.json` provenance sidecar. Never use real entrant or customer data in mockups, and never show the Rosebee author's name.

## Open items

- `site/markgarrigan.pdf` is the public résumé, rendered from `~/Desktop/Mark Garrigan Résumé 2026/resume.html`. Re-copy it when the résumé changes.
- The contact form has no server-side handler.
- boxx and stored are "coming soon": no repo, install or registry links until they're public.
