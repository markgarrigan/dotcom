# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

markgarrigan.com, Mark Garrigan's portfolio, designed as a TUI "setup utility". Product facts and project stories live in `PRODUCT.md`. The visual system is in `DESIGN.md`, and the home page's direction contract in `.impeccable/surfaces/site-index-html.md`.

## Commands

- `npm install`: install Tailwind 4 (the only dependency)
- `npm run build`: render the pages (`node src/build.mjs`), then compile `src/site.css` to `site/assets/css/site.css`
- `npm run dev`: one terminal for local work (`src/dev.mjs`). It re-renders the pages when `src/` changes, recompiles the CSS, and serves `site/` at http://localhost:4321 (`PORT` overrides it). Reload the browser to see changes; Ctrl-C stops everything.
- Docker: `docker build -t markgarrigan-dotcom .` serves the site on port 80, and `GET /up` returns 200 for boxx.

There is no test suite or linter.

## CI and releases

Same model as nurun: a tag is the release, and nothing runs on branch pushes.

- To release: `npm version X.Y.Z --no-git-tag-version` (bumps `package.json` and `package-lock.json`), add an entry at the top of `CHANGELOG.md`, commit `chore: release X.Y.Z`, then `git tag vX.Y.Z && git push origin main vX.Y.Z`.
- `.github/workflows/publish.yml` runs on `v*` tags. It builds linux/amd64 and linux/arm64, pushes `ghcr.io/markgarrigan/dotcom` as `X.Y.Z`, `X.Y`, `X` and `latest`, then creates the GitHub Release with generated notes. The Dockerfile renders the pages and refuses to build without `site/markgarrigan.pdf`, so a broken build fails before anything is pushed.
- Point production in boxx at `:1` (or `:latest`) with update policy `auto` to deploy each stable release.
- When real tests exist, add a job that runs them on every push.

## Architecture

- `src/content.mjs` holds every project's facts: story, layers, decisions, results, inventory and screens. Every claim must be sourced from the repos or Mark's interview (PRODUCT.md › Project Stories). Don't add metrics or outcomes.
- `src/build.mjs` is a tiny static generator. It renders the shared shell (title bar with the font and theme menus, tabs, key legend) and writes `site/index.html`, `site/about/`, `site/contact/` and `site/work/<slug>/index.html`. The generated HTML is build output, so edit the generator or the content, not the HTML.
- `src/site.css` holds Tailwind 4 plus five themes as CSS variables on `:root[data-theme=…]`: Catppuccin Latte and Mocha (the OS-driven defaults), Frappé, Macchiato and Borland. Fonts are self-hosted Nerd Fonts Mono builds (subset woff2): SauceCodePro (default), JetBrains Mono NL and Noto Sans Mono via `:root[data-font=…]`, with BigBlueTerm437 forced in Borland. Components: `.pane`, `.item`, `.st`, `.btn`, `.legend`, `.menu`.
- `site/assets/js/main.js` is progressive enhancement only. It handles the theme and font menus (live preview, persisted in localStorage), the vim-style keys (j/k move or scroll, d/u half page, gg/G ends, l open, h back, W/A/C tabs, E/R/I/F/T), list selection driving the help pane, keyboard shortcuts, visited marks, the resumé "(soon)" fallback, and the contact form, which composes a `mailto:` because there's no server handler yet.
- Images in `site/assets/img/work/` are screenshots of the live sites or illustrations of private tools, rendered from `src/mockups/*.html` with invented demo data. Each has a `.webp.json` provenance sidecar. Never use real entrant or customer data in mockups, and never show the Rosebee author's name.

## Open items

- `site/markgarrigan.pdf` is the public resumé, rendered from `~/Desktop/Mark Garrigan Résumé 2026/resume.html`. Re-copy it when the resumé changes.
- The contact form has no server-side handler.
- boxx and stored are "coming soon": no repo, install or registry links until they're public.
