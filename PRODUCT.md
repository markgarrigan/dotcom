# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, Tailwind CSS 4, and vanilla JavaScript. No front-end framework.

Deployment: a Docker image run on a hosted VM, deployed with **boxx**, one of Mark's own projects. boxx lives in Mark's work directory, which he will share with whoever builds the site. It is one of the projects the portfolio presents, so the site is deployed by work it showcases.

## Users

**Primary: recruiters and hiring managers** looking at Mark Garrigan for full-stack engineering roles. They are judging whether he can own a product from end to end, and they decide quickly whether to get in touch.

Other audiences have not been confirmed.

## Product Purpose

A personal portfolio at markgarrigan.com. It presents Mark's work so that a recruiter or employer can see what he builds and how he builds it. Success means a qualified recruiter or hiring manager gets in touch, downloads the resumé, or follows through on LinkedIn.

## Positioning

**Product ownership.** Mark takes products end to end: idea, architecture, build, launch, and running them in production. The portfolio should show that whole arc in each piece of work, not only the finished screens or the code. The fact that the site itself is shipped with his own tooling (boxx) is direct evidence of this.

## Operating Context

- Visitors usually arrive from a job application, a recruiter search, LinkedIn, or a referral link, and look at the site briefly to evaluate him.
- The work is presented through a mix of **image mockups, animated SVGs, and coded (live, interactive) examples**. (This was Mark's answer to how showcase pages should be built; it is recorded here as the way the work is presented.)
- Conversion paths, all confirmed:
  - Email
  - LinkedIn
  - Resumé download (PDF hosted on the site)
  - Contact form. Since the stack is static, the form needs a handler. One could run in the Docker/VM deployment, or an external service could be used. Which one is **undecided**.

## Capabilities and Constraints

- Static-first site. Any server behavior (the contact form handler) must fit inside the Docker image or come from an external service.
- **Contact (confirmed 2026-11-01):** email mrkgrrgn@gmail.com; LinkedIn https://www.linkedin.com/in/markgarrigan/. The resumé (/markgarrigan.pdf) is being revised. The contact form's handler and spam protection are **undecided**.
- **Decided (2026-11-01):** the six projects and their order are in Evidence on Hand below: Bibsee, nurun co., Luna Coffee, Plainwork, boxx, stored. nurun must come before Luna; Bibsee leading was Claude's assumption; Mark hasn't confirmed or changed it.

## Evidence on Hand

### Selected projects

Confirmed with Mark on 2026-11-01 after going through `~/Development`. He confirmed nothing outside that folder belongs in the portfolio. Paths are relative to `~/Development`. Live URLs confirmed by Mark on 2026-11-01.

| Entry | Status | Repos | What it is |
|---|---|---|---|
| **Bibsee** | Live: https://bibsee.com | `BibTime/bibsee`, `BibTime/bibsee.com` | Offline-first race timing. A Raspberry Pi or Debian/Ubuntu box runs it in Docker and serves it over local HTTPS. iPads record bib passes, and nothing needs internet on race day. Includes the marketing site, which serves the installer at `get.bibsee.com`. The largest body of work: about 240 commits, Sep 2025 to Oct 2026. |
| **Luna Coffee** (one case study; the repos say "lunacafe", the live brand is Luna Coffee) | Live: https://lunacafe.com | `luna/lunacafe.com`, `luna/admin.lunacafe.com`, `luna/api.lunacafe.com`, `luna/delivery.lunacafe.com`, `luna/static.lunacafe.com`, `luna/stripereports` | The whole platform for a cafe: storefront with cart, checkout, delivery and fundraising; admin; API; delivery app; static image host; Stripe sales reporting. Built since the early 2000s; site v4, admin v3 (repos from 2025). |
| **nurun co.** | Live: https://nurun.co | `nurun`, `nurun-admin` | Public race site (race details, updates, results; it does not do registration), plus a race operations admin (entrant imports, bib assignment per race date, t-shirt sizes). Site built 2017 (1.0), 2.0 in 2018, 3.0 in 2021; the repo moved to a new home in May 2026, so git history starts there. nurun-admin is new in 2026. |
| **boxx** | Live: https://boxxup.com (repo public: https://github.com/plainwork/boxx) | `boxx`, `boxxup` | A TUI and CLI in Go for installing and orchestrating dockerized apps on a single Linux host. It also deploys this site. |
| **Plainwork** (one section) | Live: https://plainwork.github.io | `plainwork/paper`, `rated`, `taken`, `taken-cli`, `timed`, `website`, plus the `homebrew-*` taps | A family of tiny macOS menu bar apps in Swift, each distributed through its own Homebrew tap: Paper (plain text notes), Rated (0 to 5 ratings over time), Taken (clipboard to Markdown notebooks, with the `tkn` CLI), Timed (timer). Also the Plainwork website (plainwork.github.io). Dec 2025 to Jan 2026. |
| **stored** | Coming soon | `stored` | A headless e-commerce backend with a server-rendered admin, built on Bun and MySQL with no framework. Publishes versioned multi-arch Docker images to ghcr.io. May to Jul 2026. |

Mark decided to leave these out: simonses, dsdev, jayz, barded, wifi.sh, checked, fit, rosebee, the Bear Mark Publishing website, P1, p1tennis, the Sovereign AI deck, and `BibTime/bibsee_bk` (a backup copy). Don't bring them back without asking.

- **boxx went public on 2026-11-06:** its site https://boxxup.com is live (repo `boxxup`; Mark confirmed 2026-11-06 that boxxup.com and get.boxxup.com both run on boxx, and that markgarrigan.com does too), the installer is `curl https://get.boxxup.com | sh`, and the repo github.com/plainwork/boxx is public. Its entry is live and links to boxxup.com. The rule below now applies only to stored.
- **Coming soon: boxx and stored.** Neither has any public exposure right now (Mark, 2026-11-01). Each still gets a fully built-out portfolio entry, as deep as the live projects, clearly labeled **coming soon**. Their own public sites are the next things Mark will build after this portfolio. Until they launch, the site must not link to a repo, install command, image registry or live instance for either one, and must not suggest that a visitor can use them today. Once a site launches, the entry switches to live and gains its link. Any claim about them should be one that can be checked once they go public.

Absent, so must not be fabricated: testimonials, client names, employer names, metrics or outcomes, press, and the resumé contents. Use only what Mark supplies.

## Project Stories

From Mark's interview on 2026-11-01. These are the facts each project page tells; don't add outcomes beyond them.

- **Bibsee:** built first to time Mark's own race, the Black River Trail Classic (BRTC), and now becoming a product for other trail race directors. It timed BRTC in **2025 and 2026**. Offline-first because trail races run where the signal ends.
- **nurun co.:** Mark's own race company; it puts on the BRTC. The site dates to **2017 (1.0), 2.0 in 2018, 3.0 in 2021**; git history only starts in May 2026 because the repo moved. **nurun-admin is new in 2026.** The public site carries race details, updates and results. **The site does not do registration** (Mark, 2026-11-01). Never claim it does, never name the third-party registration platform anywhere on the site (copy or screenshots), and don't mention future plans for registration. **nurun-admin** is the tool Mark runs race operations in, replacing his spreadsheets: imports from CSV exports, bib assignment, shirt sizes, thank-you notes, marketing emails, race history, and a CSV export straight into Bibsee. Mark is the only user.
- **Luna Coffee:** a client, a small-batch roaster (it can be named). Mark has built its website **since the early 2000s**, before he used GitHub. The current platform is the **site's 4th version and the admin's 3rd**; today's repos only date from 2025. The current version is the whole online business: storefront, admin, API, **the delivery app the local driver uses to deliver orders**, Stripe reports and an image host. Over the versions it **opened new sales channels**: online ordering with pickup, local delivery and shipping, gift cards and fundraisers. (Correction 2026-11-01: an earlier note said Luna had no online store before; that was wrong.)
- **Plainwork:** an **experiment**: how small a useful app can be, shipped as four macOS menu bar apps and a CLI through Homebrew, without a paid Apple developer account.
- **boxx:** Mark tried **ONCE and Kamal** (not Coolify; corrected 2026-11-06). He admired those tools and wanted to see what it would be like to make one **tailored to his own use**. Local development **mimicking the hosted environment with very little setup** was a **requirement from the start**, not a side benefit (Mark, 2026-11-01). Databases are **optional**: the installer asks none/MySQL/Postgres; boxx runs the database on a private Docker network, generates the credentials and injects DATABASE_URL, so nobody stores a password (verified in boxx/engine/db and cmd/db.go). Storage is **not part of the contract** (the contract is only: Docker image, port 80, GET /up); boxx mounts a named Docker volume (boxx_storage_<app>) at /storage in every app container; it survives redeploys, and `boxx remove` deletes it unless --keep-data (verified in engine/installer and cmd/remove.go). It deploys **bibsee.com, nurun.co and nurun-admin** today, and **rosebee and stored** are next.
- **stored:** "own your store". Prebuilt e-commerce is expensive when you have no sales yet; you want to control every cost, and extra features cost more on SaaS. Before you've sold a product, the spend is hard to justify. The **first store** on it will be Mark's wife's self-published book series, from her company **Bear Mark Publishing** (https://bearmarkpublishing.com/), which can be named.

Naming is cleared for Luna Coffee, the BRTC, nurun co. and Bear Mark Publishing. Mark also approved (2026-11-01) showing the **Rosebee Family** series name, book titles and covers on stored's page as its first store, as long as **no author name** appears. The cover copies in src/mockups/assets have the author line painted out. The rosebee repo itself stays off the project list.

## How the Work Gets Built (be transparent)

Mark's words (2026-11-02; date corrected to 2024 on 2026-11-05): until 2024 he hand-coded everything, meticulously. Since then he has taken an active role in agentic development: thorough planning sessions, guidance during implementation, then reviews and audits. It would not be truthful to say "I built" many of the latest things. **Don't write "I built" and don't write "AI built"** about recent work. Describe projects by what they are and do, keep "I" for ownership, decisions, operations and pre-2024 hand-coded work, and state the workflow plainly where it matters (About page, resumé, cover letters, LinkedIn).

## Product Principles

1. **Show the whole arc.** Each project shows ownership from problem to production, not only output.
2. **Proof over claims.** Prefer live links, running code, and working examples over adjectives. A recruiter should be able to check anything the site says.
3. **Fast to judge.** A recruiter skimming for a minute should come away knowing his role, his edge, and how to reach him.
4. **The site is part of the evidence.** How it is built and shipped (static, fast, deployed with boxx) should hold up if an engineer looks closely.
5. **Honest about what's pending.** Upcoming work is labeled as upcoming. Nothing is padded.
