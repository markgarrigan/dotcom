// Renders the static pages into site/ from src/content.mjs.
// Run with `npm run build` (this, then Tailwind).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site, projects, LAYERS } from "./content.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "site");
// Shown next to the name in the title bar. Bump it with `npm version` when releasing.
const { version } = JSON.parse(readFileSync(join(ROOT, "..", "package.json"), "utf8"));

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const THEMES = [
  ["auto", "Auto", "Latte by day, Mocha by night", ["#eff1f5", "#1e1e2e"]],
  ["latte", "Latte", "Catppuccin, light", ["#eff1f5", "#4c4f69", "#8839ef"]],
  ["frappe", "Frappé", "Catppuccin, dusk", ["#303446", "#c6d0f5", "#ca9ee6"]],
  ["macchiato", "Macchiato", "Catppuccin, dark", ["#24273a", "#cad3f5", "#c6a0f6"]],
  ["mocha", "Mocha", "Catppuccin, darkest", ["#1e1e2e", "#cdd6f4", "#cba6f7"]],
  ["borland", "Borland", "Blue screen, grey bars", ["#0000aa", "#aaaaaa", "#ffff55"]],
];

// Nerd Fonts (Mono builds, subset). Borland allows only BigBlueTerm.
const FONTS = [
  ["saucecode", "SauceCodePro", "Source Code Pro, Nerd Font", "SauceCodePro NFM"],
  ["jetbrains", "JetBrains Mono", "JetBrains Mono, Nerd Font", "JetBrainsMonoNL NFM"],
  ["noto", "Noto Sans Mono", "Noto Sans Mono, Nerd Font", "NotoSansM NFM"],
  ["bigblue", "BigBlueTerm", "Borland theme only", "BigBlueTerm437 NFM"],
];

const when = (p) => `${p.from} → ${p.to}`;
const statusLabel = { live: "Live", soon: "Soon", priv: "Private" };
const st = (s) => `<span class="st st--${s}">${statusLabel[s]}</span>`;
const img = (src) => `/assets/img/work/${src}.webp`;

function shell({ title, description, path, tab, body, legend }) {
  const tabs = [["Work", "/"], ["About", "/about/"], ["Contact", "/contact/"]];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#eff1f5" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1e1e2e" media="(prefers-color-scheme: dark)">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231e1e2e'/%3E%3Crect x='3' y='3' width='26' height='26' fill='none' stroke='%23cba6f7' stroke-width='2'/%3E%3Cpath d='M9 22V10l4 6 4-6v12M21 10h3' stroke='%23cdd6f4' stroke-width='2.4' fill='none'/%3E%3C/svg%3E">
<link rel="preload" href="/assets/fonts/saucecodepro-400.woff2" as="font" type="font/woff2" crossorigin>
<script>try{var d=document.documentElement,t=localStorage.getItem("theme"),f=localStorage.getItem("font");if(t&&t!=="auto")d.dataset.theme=t;if(f&&f!=="saucecode")d.dataset.font=f}catch(e){}</script>
<link rel="stylesheet" href="/assets/css/site.css">
<script src="/assets/js/main.js" defer></script>
</head>
<body data-page="${esc(path)}">
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-sel focus:px-3 focus:py-1 focus:text-sel-fg">Skip to content</a>
<header class="titlebar">
  <span class="whitespace-nowrap"><a href="/" class="font-bold no-underline">${esc(site.name)}</a> <span class="titlebar-version">v${esc(version)}</span></span>
  <span class="hidden truncate md:block">${esc(site.role)}</span>
  <div class="flex shrink-0 items-center gap-[1ch]">
    <div class="relative">
      <button type="button" class="btn" id="font-btn" aria-haspopup="true" aria-expanded="false" aria-controls="font-menu" aria-keyshortcuts="F"><span><span class="tab-key">F</span>ont<span class="hidden lg:inline">: <span data-font-name>SauceCodePro</span></span></span></button>
      <div class="menu" id="font-menu" data-menu="font" hidden>
        ${FONTS.map(([id, name, note, family]) => `<button type="button" data-set="${id}"${id === "bigblue" ? " hidden" : ""}><span data-check aria-hidden="true"></span><span>${name} <span class="sr-only">(${note})</span></span><span class="sample sample--${id}" aria-hidden="true">Aa ├─┤</span></button>`).join("\n        ")}
      </div>
    </div>
    <div class="relative">
      <button type="button" class="btn" id="theme-btn" aria-haspopup="true" aria-expanded="false" aria-controls="theme-menu" aria-keyshortcuts="T"><span><span class="tab-key">T</span>heme<span class="hidden lg:inline">: <span data-theme-name>Auto</span></span></span></button>
      <div class="menu" id="theme-menu" data-menu="theme" hidden>
        ${THEMES.map(([id, name, note, sw]) => `<button type="button" data-set="${id}"><span data-check aria-hidden="true"></span><span>${name} <span class="sr-only">(${note})</span></span><span class="sw" aria-hidden="true">${sw.map((c) => `<i style="background:${c}"></i>`).join("")}</span></button>`).join("\n        ")}
      </div>
    </div>
  </div>
</header>
<nav class="tabs" aria-label="Sections">
  ${tabs.map(([n, h]) => `<a href="${h}"${n === tab ? ' aria-current="page"' : ""} aria-keyshortcuts="${n[0]}"><span class="tab-key">${n[0]}</span>${n.slice(1)}</a>`).join("")}
</nav>
<main id="main" class="flex-1 px-[2ch] pt-8 pb-10">
${body}
</main>
<footer class="legend" aria-label="Keys">
  ${legend}
  ${path === "/" ? `<span class="items-center gap-[1ch]" data-scroll-hint><span class="k">d</span><span class="k">u</span>Page</span>
  <span class="items-center gap-[1ch]" data-scroll-hint><span class="k">gg</span><span class="k">G</span>Top/End</span>` : `<span class="items-center gap-[1ch]" data-scroll-hint><span class="k">j</span><span class="k">k</span>Scroll</span>
  <span class="items-center gap-[1ch]" data-scroll-hint><span class="k">d</span><span class="k">u</span>Page</span>
  <span class="items-center gap-[1ch]" data-scroll-hint><span class="k">gg</span><span class="k">G</span>Top/End</span>`}
  <a href="mailto:${site.email}"><span class="k">E</span>Email</a>
  <a href="${site.resume}" download><span class="k">R</span>Resumé</a>
  <a href="${site.linkedin}" rel="me noopener" target="_blank"><span class="k">I</span>LinkedIn</a>
</footer>
</body>
</html>
`;
}

/* ---------- home ---------- */

const listItems = [];
for (const p of projects) {
  listItems.push({ id: p.slug, href: `/work/${p.slug}/`, name: p.name, desc: p.short, when: when(p), status: p.status });
  if (p.child) listItems.push({ id: `${p.slug}-${p.child.slug}`, href: `/work/${p.slug}/#${p.child.slug}`, name: p.child.name, desc: p.child.short, when: when(p.child.from ? p.child : p), status: "priv", child: true, parent: p });
}

function flags(p) {
  return `<div class="flags" aria-label="Layers">${LAYERS.map((l) => p.flags[l]
    ? `<span>[x] ${l}</span>` : `<span class="flag--off">[ ] ${l}</span>`).join("")}</div>`;
}

function helpFor(item) {
  const p = item.parent || projects.find((x) => x.slug === item.id);
  const isChild = !!item.child;
  const screen = isChild ? p.screens.find((s) => s.child) : p.screens[0];
  const pitch = isChild ? p.child.pitch : p.pitch;
  const statusLine = isChild ? `${st("priv")} <span class="text-muted">· Private tool, shown as illustrations</span>`
    : p.status === "live" ? `${st("live")} <a href="${p.url}" rel="noopener" target="_blank">${p.host}</a>`
    : `${st("soon")} <span class="text-muted">· Its own site is next</span>`;
  return `<h3 class="display text-[2rem]">${esc(item.name)}</h3>
  <p class="mt-2 text-[1rem]">${esc(pitch)}</p>
  <p class="mt-2">${statusLine}</p>
  <figure class="shot shot--help mt-4"><img src="${img(screen.src)}" width="1200" height="750" alt="" loading="lazy" decoding="async"><figcaption><b>${esc(screen.caption)}</b><span>[${screen.kind}]</span></figcaption></figure>
  <div class="mt-4">${flags(p)}</div>
  <dl class="kv mt-3"><dt>Stack</dt><dd>${esc(p.stack)}</dd><dt>Built</dt><dd class="tabular-nums">${esc(item.when)}</dd></dl>
  <p class="mt-4"><a class="btn btn--primary" href="${item.href}">Open ${esc(item.name)} ↵</a></p>`;
}

const skills = [
  ["Focus", "Product ownership, end to end"],
  ["Workflow", "Agentic since 2024: plan, guide, review, audit. Hand-coded before that."],
  ["Languages", "JavaScript, Go, Swift, Bash, SQL"],
  ["Runtimes", "Bun, Node.js, Express, Bubble Tea"],
  ["Data", "MySQL, SQLite, Postgres"],
  ["Interface", "Server-rendered HTML, Tailwind, htmx, Alpine.js, vanilla JS, TUIs"],
  ["Infra", "Docker, Caddy, Google Cloud Run, Raspberry Pi, single Linux hosts"],
  ["Integrations", "Stripe, EasyPost, Mailgun"],
];

const live = projects.filter((p) => p.status === "live").length;
const soon = projects.filter((p) => p.status === "soon").length;

const homeBody = `<h1 class="sr-only">${esc(site.name)}, ${esc(site.role.toLowerCase())}</h1>
<div class="grid gap-x-[2ch] gap-y-10 lg:grid-cols-12">
  <section class="pane pane--focus lg:col-span-7 lg:min-h-[calc(100svh-11.5rem)]" aria-labelledby="main-title">
    <h2 class="pane-title" id="main-title">Main</h2>
    <p class="display text-[clamp(2.75rem,6.2vw,5.25rem)]" aria-hidden="true">${esc(site.name)}</p>
    <p class="mt-4 text-muted">${esc(site.role)} · idea to production</p>
    <p class="mt-5 max-w-[60ch] text-[1.2rem] leading-snug">${esc(site.hook)} I work across the whole stack: interface, API, data, infrastructure and operations.</p>
    <p class="mt-4 text-muted">Owned end to end: <span class="text-fg">${site.stages.join(" ▸ ")}</span></p>
    <hr class="rule rule--double">
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h2 class="font-bold text-accent">Projects</h2>
      <p class="text-muted tabular-nums">${listItems.length} items · ${live} live · ${soon} soon · ${projects.filter((p) => p.child).length} private</p>
    </div>
    <nav aria-label="Projects" class="mt-3">
      <ul class="items" data-items>
        ${listItems.map((it, i) => `<li><a class="item${it.child ? " item--child" : ""}" href="${it.href}" data-item="${it.id}"${i === 0 ? " data-sel" : ""}>
          <span class="cur" aria-hidden="true">▸</span>
          <span class="min-w-0"><span class="name font-bold">${esc(it.name)}</span> <span class="desc">${esc(it.desc)}</span></span>
          <span class="when hidden sm:inline">${esc(it.when)}</span>
          ${st(it.status)}
        </a></li>`).join("\n        ")}
      </ul>
    </nav>
  </section>

  <section class="pane pane--panel lg:col-span-5 lg:min-h-[calc(100svh-11.5rem)]" aria-labelledby="help-title">
    <h2 class="pane-title" id="help-title">Item Specific Help</h2>
    <div data-help>${helpFor(listItems[0])}</div>
    ${listItems.map((it) => `<template data-help-for="${it.id}">${helpFor(it)}</template>`).join("\n    ")}
  </section>

  <section class="pane lg:col-span-12" aria-labelledby="sys-title">
    <h2 class="pane-title" id="sys-title">System Information</h2>
    <dl class="grid gap-x-[4ch] gap-y-2 md:grid-cols-2 xl:grid-cols-3">
      ${skills.map(([k, v]) => `<div class="kv"><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("\n      ")}
      <div class="kv"><dt>Contact</dt><dd><a href="mailto:${site.email}">${site.email}</a></dd></div>
    </dl>
  </section>
</div>`;

/* ---------- project pages ---------- */

function screensGrid(list, p) {
  if (list.length === 1 && p) {
    const s = list[0];
    return `<div class="grid gap-x-[4ch] gap-y-6 lg:grid-cols-12">
    <figure class="shot lg:col-span-8">
      <img src="${img(s.src)}" width="1200" height="750" alt="${esc(`${s.kind}: ${s.caption}`)}" loading="lazy" decoding="async">
      <figcaption><b>${esc(s.caption)}</b><span>[${s.kind}]</span></figcaption>
    </figure>
    <div class="lg:col-span-4">
      <dl class="kv"><dt>Site</dt><dd>${p.host ? `<a href="${p.url}" rel="noopener" target="_blank">${p.host}</a>` : "Not public yet"}</dd><dt>Status</dt><dd>${st(p.status)}</dd><dt>Built</dt><dd class="tabular-nums">${when(p)}</dd></dl>
      ${p.host ? `<p class="mt-5"><a class="btn btn--primary" href="${p.url}" rel="noopener" target="_blank">Visit ${p.host} ↗</a></p>` : ""}
    </div>
  </div>`;
  }
  return `<div class="grid gap-x-[2ch] gap-y-8 md:grid-cols-2">
    ${list.map((s, i) => `<figure class="shot${i === 0 && list.length % 2 === 1 ? " md:col-span-2" : ""}">
      <img src="${img(s.src)}" width="1200" height="750" alt="${esc(s.kind === "Illustration" ? `Illustration: ${s.caption}` : `Screenshot: ${s.caption}`)}" loading="lazy" decoding="async">
      <figcaption><b>${esc(s.caption)}</b><span>[${s.kind}]</span></figcaption>
    </figure>`).join("\n    ")}
  </div>`;
}

function projectPage(p, i) {
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const adminScreens = p.child ? p.screens.filter((s) => s.child) : [];
  const mainScreens = p.screens.filter((s) => !adminScreens.includes(s));
  const story = p.story;
  const statusLine = p.status === "live"
    ? `${st("live")} <a href="${p.url}" rel="noopener" target="_blank">${p.host} ↗</a>`
    : `${st("soon")} <span class="text-muted">· Not public yet. Its own site is next.</span>`;

  const body = `<p class="mb-6 text-muted"><a href="/" class="no-underline hover:underline">Work</a> › <span class="text-fg">${esc(p.name)}</span></p>
<div class="grid gap-x-[2ch] gap-y-10 lg:grid-cols-12">
  <section class="pane pane--focus lg:col-span-12" aria-labelledby="p-title">
    <span class="pane-title" aria-hidden="true">Overview</span>
    <div class="grid gap-x-[4ch] gap-y-6 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <h1 id="p-title" class="display text-[clamp(2.75rem,6vw,5rem)]">${esc(p.name)}</h1>
        <p class="mt-4 max-w-[48ch] text-[1.2rem] leading-snug">${esc(p.pitch)}</p>
        <p class="mt-4">${statusLine}</p>
      </div>
      <div class="lg:col-span-5">
        <dl class="kv">
          <dt>Role</dt><dd>${esc(p.role)}</dd>
          <dt>Built</dt><dd class="tabular-nums">${when(p)}</dd>
          <dt>History</dt><dd>${esc(p.commits)}</dd>
          <dt>Stack</dt><dd>${esc(p.stack)}</dd>
        </dl>
        <div class="mt-4">${flags(p)}</div>
      </div>
    </div>
  </section>

  <div class="grid content-start gap-y-10 lg:col-span-7">
  <section class="pane" aria-labelledby="story-title">
    <h2 class="pane-title" id="story-title">Story</h2>
    <div class="max-w-[68ch] space-y-4 text-[1rem]">${story.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
  </section>
    <section class="pane pane--focus" aria-labelledby="res-title">
      <h2 class="pane-title" id="res-title">Results</h2>
      <ul class="grid gap-3">${p.results.map((r) => `<li class="grid grid-cols-[2ch_1fr] gap-x-1"><span class="text-ok" aria-hidden="true">✓</span><span>${esc(r)}</span></li>`).join("")}</ul>
    </section>
  </div>

  <section class="pane pane--panel lg:col-span-5" aria-labelledby="sys-title">
    <h2 class="pane-title" id="sys-title">System, layer by layer</h2>
    <dl class="grid gap-4">
      ${LAYERS.map((l) => p.layers[l]
        ? `<div><dt class="font-bold">[x] ${l}</dt><dd class="mt-1">${esc(p.layers[l])}</dd></div>`
        : `<div class="text-muted"><dt>[ ] ${l}</dt><dd class="mt-1">Not part of this project.</dd></div>`).join("\n      ")}
    </dl>
  </section>

  ${p.slug === "stored" ? `<section class="pane pane--focus lg:col-span-12" aria-labelledby="merchant-title">
    <h2 class="pane-title" id="merchant-title">For merchants</h2>
    ${STORED_PITCH}
  </section>` : ""}



  <section class="pane lg:col-span-12" aria-labelledby="screens-title">
    <h2 class="pane-title" id="screens-title">Screens</h2>
    ${screensGrid(mainScreens, p)}
  </section>

  ${p.child ? `<section class="pane pane--focus scroll-mt-6 lg:col-span-12" id="${p.child.slug}" aria-labelledby="admin-title">
    <h2 class="pane-title" id="admin-title">Private tool: ${esc(p.child.name)}</h2>
    <div class="grid gap-x-[4ch] gap-y-6 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <p class="display text-[2rem]" aria-hidden="true">${esc(p.child.name)}</p>
        <p class="mt-3">${st("priv")} <span class="text-muted">· Private tool, shown as illustrations · ${p.child.from ? when(p.child) : ""}</span></p>
        <p class="mt-5 max-w-[60ch] text-[1rem]">${esc(p.child.intro)}</p>
        <ul class="mt-5 grid gap-2">${p.child.features.map((f) => `<li class="grid grid-cols-[2ch_1fr] gap-x-1"><span class="text-muted" aria-hidden="true">▸</span><span>${esc(f)}</span></li>`).join("")}</ul>
      </div>
      <div class="lg:col-span-7">${screensGrid(adminScreens)}</div>
    </div>
  </section>` : ""}

  <section class="pane lg:col-span-7" aria-labelledby="dec-title">
    <h2 class="pane-title" id="dec-title">Decisions</h2>
    <ol class="grid gap-5">
      ${p.decisions.map(([t, d], n) => `<li class="grid grid-cols-[4ch_1fr] gap-x-1"><span class="text-muted tabular-nums">${String(n + 1).padStart(2, "0")}</span><div><h3 class="font-bold">${esc(t)}</h3><p class="mt-1 max-w-[64ch]">${esc(d)}</p></div></li>`).join("\n      ")}
    </ol>
  </section>

  <div class="grid content-start gap-y-10 lg:col-span-5">

    <section class="pane" aria-labelledby="inv-title">
      <h2 class="pane-title" id="inv-title">In the box</h2>
      <ul class="grid gap-1.5">${p.inventory.map((r) => `<li class="grid grid-cols-[2ch_1fr] gap-x-1"><span class="text-muted" aria-hidden="true">·</span><span>${esc(r)}</span></li>`).join("")}</ul>
    </section>
  </div>

  <nav class="pane lg:col-span-12" aria-label="More projects">
    <span class="pane-title" aria-hidden="true">More projects</span>
    <div class="flex flex-wrap justify-between gap-4">
      <a class="btn" href="/work/${prev.slug}/" data-prev>◂ ${esc(prev.name)}</a>
      <a class="btn" href="/">All projects</a>
      <a class="btn" href="/work/${next.slug}/" data-next>${esc(next.name)} ▸</a>
    </div>
  </nav>
</div>`;

  return shell({
    title: `${p.name}: ${p.pitch} · Mark Garrigan`,
    description: `${p.pitch} ${p.story[0]}`.slice(0, 300),
    path: `/work/${p.slug}/`,
    tab: "Work",
    body,
    legend: `<a href="/" data-back><span class="k">h</span><span class="k">Esc</span>Back</a>
  <a href="/work/${prev.slug}/"><span class="k">←</span>${esc(prev.name)}</a>
  <a href="/work/${next.slug}/"><span class="k">→</span>${esc(next.name)}</a>`,
  });
}

/* ---------- stored merchant pitch ---------- */
const STORED_PITCH_LINES = [
  ["Sell before you spend", "No platform subscription. It runs on your own server, and you pay only the Stripe, EasyPost and Mailgun accounts you connect."],
  ["Your books and your stock, in one place", "Stock is checked before payment and taken off when the order commits, so you never oversell without knowing it."],
  ["Real shipping prices, one-click labels", "Customers pick live carrier rates or your flat rates. After the sale, buy the label from the order page and get tracking."],
  ["Emails that look like your brand", "Design order confirmations in a block editor and choose which store events send them."],
  ["A list that grows with every sale", "Paying customers join your mailing list on their own, ready for the next launch."],
  ["Your data stays yours", "Export the whole store (products, orders, customers, emails, settings) as one bundle, and import it anywhere stored runs."],
];
const STORED_PITCH = `<div class="grid gap-x-[4ch] gap-y-5 md:grid-cols-2 xl:grid-cols-3">
  ${STORED_PITCH_LINES.map(([t, d]) => `<div><h3 class="font-bold">▸ ${esc(t)}</h3><p class="mt-1">${esc(d)}</p></div>`).join("\n  ")}
</div>`;

/* ---------- about & contact ---------- */

const aboutBody = `<div class="grid gap-x-[2ch] gap-y-10 lg:grid-cols-12">
  <section class="pane pane--focus lg:col-span-7" aria-labelledby="about-title">
    <span class="pane-title" aria-hidden="true">About</span>
    <h1 id="about-title" class="display text-[clamp(2.5rem,5vw,4.25rem)]">I own it end to end, then I run it.</h1>
    <div class="mt-6 max-w-[64ch] space-y-4 text-[1rem]">
      <p>I'm Mark Garrigan, a full-stack engineer. I take products from the first idea to production, and I keep running them after launch.</p>
      <p>Most of my work starts with a problem I'm close to. Bibsee exists because my own race needed timing that works without a signal, and nurun-admin because race week lived in spreadsheets. Luna Coffee, a roaster I've worked with since the early 2000s, needed its whole business online; its platform is on its fourth version now. boxx came from wanting to host my own apps on one box.</p>
      <p>Until 2024 I hand-coded everything, and I was meticulous about it. Since then I've worked agentically: thorough planning sessions up front, guiding AI coding agents through the implementation, then reviewing and auditing the work before it ships. The plans, the architecture, the decisions and the review are mine, and so is responsibility for what runs.</p>
      <p>I like small, legible systems: one server, one database, plain HTML where it works, and a terminal UI when it helps.</p>
    </div>
  </section>
  <section class="pane pane--panel lg:col-span-5" aria-labelledby="how-title">
    <h2 class="pane-title" id="how-title">How I work</h2>
    <ol class="grid gap-4">
      ${[["Idea", "Work out the problem with the people who have it, before writing code."],
         ["Architecture", "Choose the fewest parts that will hold up."],
         ["Build", "Interface, API, data and infrastructure. Since 2024, AI coding agents implement against my plans while I guide the work; before that, I hand-coded all of it."],
         ["Review", "Review and audit everything before it ships: the code, the tests and the decisions behind them."],
         ["Launch", "Ship it as a Docker image onto infrastructure I set up and understand."],
         ["Run", "Keep it running after launch: fixes, updates and the next version."]]
        .map(([t, d]) => `<li><h3 class="font-bold">▸ ${t}</h3><p class="mt-1">${d}</p></li>`).join("\n      ")}
    </ol>
  </section>
  <section class="pane lg:col-span-12" aria-labelledby="site-title">
    <h2 class="pane-title" id="site-title">This site</h2>
    <dl class="grid gap-x-[4ch] gap-y-2 md:grid-cols-2">
      <div class="kv"><dt>Made with</dt><dd>Static HTML, Tailwind 4, a little vanilla JavaScript</dd></div>
      <div class="kv"><dt>Type</dt><dd>Nerd Fonts: SauceCodePro, JetBrains Mono or Noto Sans Mono; BigBlueTerm in the Borland theme</dd></div>
      <div class="kv"><dt>Colour</dt><dd>Catppuccin Latte, Frappé, Macchiato and Mocha, plus Borland</dd></div>
      <div class="kv"><dt>Ships as</dt><dd>A Docker image, deployed with <a href="/work/boxx/">boxx</a></dd></div>
    </dl>
  </section>
</div>`;

const contactBody = `<div class="grid gap-x-[2ch] gap-y-10 lg:grid-cols-12">
  <section class="pane pane--focus lg:col-span-5" aria-labelledby="contact-title">
    <span class="pane-title" aria-hidden="true">Contact</span>
    <h1 id="contact-title" class="display text-[clamp(2.5rem,5vw,4.25rem)]">Let's talk.</h1>
    <p class="mt-5 max-w-[40ch] text-[1rem]">Email is the quickest way to reach me. The resumé is a PDF.</p>
    <dl class="kv mt-6">
      <dt>Email</dt><dd><a href="mailto:${site.email}">${site.email}</a></dd>
      <dt>LinkedIn</dt><dd><a href="${site.linkedin}" rel="me noopener" target="_blank">in/markgarrigan</a></dd>
      <dt>Resumé</dt><dd><a href="${site.resume}" download>markgarrigan.pdf</a></dd>
    </dl>
    <p class="mt-6 flex flex-wrap gap-2"><a class="btn btn--primary" href="mailto:${site.email}">Email me</a><a class="btn" href="${site.resume}" download>Download resumé</a></p>
  </section>
  <section class="pane pane--panel lg:col-span-7" aria-labelledby="form-title">
    <h2 class="pane-title" id="form-title">Send a message</h2>
    <form id="contact-form" class="grid gap-5" novalidate data-email="${site.email}">
      <div class="field"><label for="f-name">Your name</label><input id="f-name" name="name" autocomplete="name" required aria-describedby="e-name"><p class="err" id="e-name">Add your name so I know who's writing.</p></div>
      <div class="field"><label for="f-email">Your email</label><input id="f-email" name="email" type="email" inputmode="email" autocomplete="email" required aria-describedby="e-email"><p class="err" id="e-email">That email address doesn't look complete.</p></div>
      <div class="field"><label for="f-company">Company</label><input id="f-company" name="company" autocomplete="organization" placeholder="optional"></div>
      <div class="field"><label for="f-message">Message</label><textarea id="f-message" name="message" required aria-describedby="e-message" placeholder="The role, the team, or the thing you'd like built."></textarea><p class="err" id="e-message">Write a line or two about what you have in mind.</p></div>
      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-4">
        <p id="form-status" role="status" aria-live="polite" class="text-muted">Sending opens your email app with the message ready to go.</p>
        <button type="submit" class="btn btn--primary">Send ↵</button>
      </div>
    </form>
  </section>
</div>`;

/* ---------- write ---------- */

function out(rel, html) {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const homeLegend = `<span class="hidden sm:inline-flex items-center gap-[1ch]"><span class="k">j</span><span class="k">k</span><span class="k">↑↓</span>Move</span>
  <a href="/work/${projects[0].slug}/" data-open class="max-sm:!hidden"><span class="k">l</span><span class="k">↵</span>Open</a>`;

out("index.html", shell({
  title: `${site.name}, ${site.role.toLowerCase()}`,
  description: `${site.hook} Six projects, from a race-timing appliance to a commerce engine.`,
  path: "/", tab: "Work", body: homeBody, legend: homeLegend,
}));
out("about/index.html", shell({
  title: `About · ${site.name}`, description: "Mark Garrigan builds products end to end, then runs them.",
  path: "/about/", tab: "About", body: aboutBody, legend: `<a href="/" data-back><span class="k">h</span><span class="k">Esc</span>Back</a>`,
}));
out("contact/index.html", shell({
  title: `Contact · ${site.name}`, description: "Email, LinkedIn, resumé, or send a message.",
  path: "/contact/", tab: "Contact", body: contactBody, legend: `<a href="/" data-back><span class="k">h</span><span class="k">Esc</span>Back</a>`,
}));
projects.forEach((p, i) => out(`work/${p.slug}/index.html`, projectPage(p, i)));
console.log(`built ${3 + projects.length} pages`);
