// markgarrigan.com: setup-utility behaviour. Everything here is an enhancement;
// every page reads and every link works without it.

const root = document.documentElement;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

/* ---------- theme and font menus ----------
   Moving through a menu previews the choice live across the page; Enter or a
   click commits it, and Esc, Tab or an outside click snaps back to the saved one.
   Borland allows only BigBlueTerm, so the font menu follows the (previewed) theme. */

const THEME_NAMES = { auto: "Auto", latte: "Latte", frappe: "Frappé", macchiato: "Macchiato", mocha: "Mocha", borland: "Borland" };
const FONT_NAMES = { saucecode: "SauceCodePro", jetbrains: "JetBrains Mono", noto: "Noto Sans Mono", bigblue: "BigBlueTerm" };

const state = {
  theme: { saved: store.get("theme") || "auto", shown: null },
  font: { saved: store.get("font") || "saucecode", shown: null },
};
if (!FONT_NAMES[state.font.saved] || state.font.saved === "bigblue") state.font.saved = "saucecode";

const isBorland = () => state.theme.shown === "borland";

function render() {
  const t = state.theme.shown, f = state.font.shown;
  if (t === "auto") delete root.dataset.theme; else root.dataset.theme = t;
  if (f === "saucecode") delete root.dataset.font; else root.dataset.font = f;
  document.querySelectorAll("[data-theme-name]").forEach((el) => { el.textContent = THEME_NAMES[t]; });
  document.querySelectorAll("[data-font-name]").forEach((el) => { el.textContent = isBorland() ? FONT_NAMES.bigblue : FONT_NAMES[f]; });
  // the font menu offers BigBlueTerm only under Borland, and only it there
  document.querySelectorAll('#font-menu [data-set]').forEach((b) => {
    b.hidden = isBorland() ? b.dataset.set !== "bigblue" : b.dataset.set === "bigblue";
  });
  marks();
}
function marks() {
  for (const kind of ["theme", "font"]) {
    const saved = kind === "font" && state.theme.saved === "borland" ? "bigblue" : state[kind].saved;
    document.querySelectorAll(`#${kind}-menu [data-set]`).forEach((b) => {
      const on = b.dataset.set === saved;
      b.setAttribute("aria-pressed", String(on));
      b.querySelector("[data-check]").textContent = on ? "●" : " ";
    });
  }
}
function preview(kind, id) { state[kind].shown = id; render(); }
function commit(kind, id) {
  if (kind === "font" && id === "bigblue") id = state.font.saved;   // Borland's font isn't a saved preference
  state[kind].saved = id; state[kind].shown = id;
  store.set(kind, id);
  render();
}
function revert() { state.theme.shown = state.theme.saved; state.font.shown = state.font.saved; render(); }

const menus = {
  theme: { btn: document.getElementById("theme-btn"), el: document.getElementById("theme-menu") },
  font: { btn: document.getElementById("font-btn"), el: document.getElementById("font-menu") },
};
const openMenuName = () => Object.keys(menus).find((k) => menus[k].el && !menus[k].el.hidden);

function openMenu(kind) {
  const m = menus[kind];
  if (!m.el) return;
  closeMenu(false);
  m.el.hidden = false;
  m.btn.setAttribute("aria-expanded", "true");
  const visible = [...m.el.querySelectorAll("[data-set]:not([hidden])")];
  (visible.find((b) => b.getAttribute("aria-pressed") === "true") || visible[0])?.focus();
}
function closeMenu(focusBack = true) {
  const kind = openMenuName();
  if (!kind) return;
  menus[kind].el.hidden = true;
  menus[kind].btn.setAttribute("aria-expanded", "false");
  revert();
  if (focusBack) menus[kind].btn.focus();
}

state.theme.shown = state.theme.saved; state.font.shown = state.font.saved; render();

for (const [kind, m] of Object.entries(menus)) {
  if (!m.el) continue;
  m.btn.addEventListener("click", () => (m.el.hidden ? openMenu(kind) : closeMenu()));
  m.el.querySelectorAll("[data-set]").forEach((b) => {
    b.addEventListener("focus", () => preview(kind, b.dataset.set));   // live preview
    b.addEventListener("mouseenter", () => b.focus());
    b.addEventListener("click", () => { commit(kind, b.dataset.set); closeMenu(); });
  });
  m.el.addEventListener("keydown", (e) => {
    e.stopPropagation();   // keys inside a menu belong to the menu
    if (e.key === "Escape") { e.preventDefault(); closeMenu(); return; }
    const items = [...m.el.querySelectorAll("[data-set]:not([hidden])")];
    const i = items.indexOf(document.activeElement);
    const to = (n) => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
    if (e.key === "ArrowDown" || e.key === "j") to(i + 1);
    else if (e.key === "ArrowUp" || e.key === "k") to(i - 1);
    else if (e.key === "l" || e.key === "ArrowRight") { e.preventDefault(); items[i]?.click(); }
    else if (e.key === "h" || e.key === "ArrowLeft") { e.preventDefault(); closeMenu(); }
    else if (e.key === "Home") to(0);
    else if (e.key === "End") to(items.length - 1);
    else if (e.key === "Tab") closeMenu(false);
  });
}
document.querySelectorAll("[data-menu-open]").forEach((b) => b.addEventListener("click", () => openMenu(b.dataset.menuOpen)));
document.addEventListener("click", (e) => {
  const kind = openMenuName();
  if (kind && !menus[kind].el.contains(e.target) && !e.target.closest("#theme-btn,#font-btn,[data-menu-open]")) closeMenu(false);
});

/* ---------- the item list (home) ---------- */

const list = document.querySelector("[data-items]");
const help = document.querySelector("[data-help]");
const openKey = document.querySelector("[data-open]");
const seen = new Set((store.get("seen") || "").split(",").filter(Boolean));

function select(item, { focus = false } = {}) {
  if (!item || !list) return;
  list.querySelectorAll(".item").forEach((el) => el.toggleAttribute("data-sel", el === item));
  const tpl = document.querySelector(`template[data-help-for="${item.dataset.item}"]`);
  if (tpl && help) help.replaceChildren(tpl.content.cloneNode(true));
  if (openKey) openKey.href = item.getAttribute("href");
  if (focus) item.focus();
}

if (list) {
  const items = () => [...list.querySelectorAll(".item")];
  items().forEach((el) => {
    if (seen.has(el.dataset.item)) {
      const mark = document.createElement("span");
      mark.className = "seen";
      mark.textContent = " ✓";
      mark.setAttribute("aria-label", "visited");
      el.querySelector(".name").after(mark);
    }
    el.addEventListener("mouseenter", () => select(el));
    el.addEventListener("focus", () => select(el));
  });
  document.addEventListener("keydown", (e) => {
    if (isTyping(e) || openMenuName()) return;
    const all = items();
    const cur = all.findIndex((el) => el.hasAttribute("data-sel"));
    if (e.key === "ArrowDown" || e.key === "j") { e.preventDefault(); select(all[Math.min(cur + 1, all.length - 1)], { focus: true }); }
    if (e.key === "ArrowUp" || e.key === "k") { e.preventDefault(); select(all[Math.max(cur - 1, 0)], { focus: true }); }
    if (e.key === "Enter" && document.activeElement === document.body) { all[cur]?.click(); }
    if (e.key === "l") { e.preventDefault(); all[cur]?.click(); }
  });
}

/* remember visited projects */
const page = document.body.dataset.page || "";
const m = page.match(/^\/work\/([^/]+)\/$/);
if (m) { seen.add(m[1]); store.set("seen", [...seen].join(",")); }

/* ---------- global keys ---------- */

/* h / Esc: back to where you came from on this site, else up to Work */
function back() {
  if (page === "/") return;
  let sameSite = false;
  try { sameSite = document.referrer && new URL(document.referrer).origin === location.origin; } catch { /* no referrer */ }
  if (sameSite && history.length > 1) history.back(); else location.href = "/";
}

function isTyping(e) {
  const t = e.target;
  return e.metaKey || e.ctrlKey || e.altKey || t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
}

/* ---------- scrolling: j/k lines (pages without a list), d/u half pages, gg/G ends ---------- */

const canScroll = () => document.documentElement.scrollHeight > innerHeight + 4;
function showScrollHints() {
  const on = canScroll();
  document.querySelectorAll("[data-scroll-hint]").forEach((el) => el.classList.toggle("is-on", on));
}
showScrollHints();
addEventListener("resize", showScrollHints);
addEventListener("load", showScrollHints);

const lineStep = () => 3 * parseFloat(getComputedStyle(document.body).lineHeight || 24);
let lastG = 0;
document.addEventListener("keydown", (e) => {
  if (isTyping(e) || openMenuName() || !canScroll()) return;
  const k = e.key;
  if (!list && (k === "j" || k === "k")) { e.preventDefault(); scrollBy({ top: k === "j" ? lineStep() : -lineStep(), behavior: "instant" }); }
  else if (k === "d" || k === "u") { e.preventDefault(); scrollBy({ top: (k === "d" ? 1 : -1) * innerHeight / 2, behavior: "instant" }); }
  else if (k === "G") { e.preventDefault(); scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }); }
  else if (k === "g") {
    const now = Date.now();
    if (now - lastG < 600) { e.preventDefault(); scrollTo({ top: 0, behavior: "instant" }); lastG = 0; } else lastG = now;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && openMenuName()) { closeMenu(); return; }
  if (isTyping(e) || openMenuName()) return;
  const legend = document.querySelector(".legend");
  const go = (sel) => legend?.querySelector(sel)?.click();
  switch (e.key.toLowerCase()) {
    case "e": go('a[href^="mailto:"]'); break;
    case "r": go('a[download]'); break;
    case "i": go('a[href*="linkedin"]'); break;
    case "h": back(); break;
    case "l": if (!list && document.activeElement?.matches("a[href]")) document.activeElement.click(); break;
    case "t": e.preventDefault(); openMenu("theme"); break;
    case "f": e.preventDefault(); openMenu("font"); break;
    case "w": if (page !== "/") location.href = "/"; break;
    case "a": if (page !== "/about/") location.href = "/about/"; break;
    case "c": if (page !== "/contact/") location.href = "/contact/"; break;
    case "escape": back(); break;
    case "arrowleft": if (m) document.querySelector("[data-prev]")?.click(); break;
    case "arrowright": if (m) document.querySelector("[data-next]")?.click(); break;
  }
});

/* ---------- résumé: say so plainly until the PDF is published ---------- */

fetch("/markgarrigan.pdf", { method: "HEAD" }).then((r) => {
  if (r.ok) return;
  document.querySelectorAll('a[href="/markgarrigan.pdf"]').forEach((a) => {
    a.removeAttribute("download");
    a.removeAttribute("href");
    a.setAttribute("aria-disabled", "true");
    a.classList.add("is-pending");
    const label = [...a.childNodes].reverse().find((n) => n.nodeType === 3 && n.textContent.trim());
    if (label) label.textContent = `${label.textContent.trim()} (soon)`;
  });
}).catch(() => {});

/* ---------- contact form ---------- */

const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("form-status");
  const f = { name: form.elements.name, email: form.elements.email, message: form.elements.message };
  const check = (input) => {
    const ok = input.type === "email"
      ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())
      : input.value.trim().length > 0;
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  };
  Object.values(f).forEach((input) => {
    input.addEventListener("blur", () => { if (input.value) check(input); });
    input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true") check(input); });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bad = Object.values(f).filter((input) => !check(input));
    if (bad.length) {
      status.textContent = bad.length === 1 ? "One field needs a fix before this can be sent." : `${bad.length} fields need a fix before this can be sent.`;
      bad[0].focus();
      return;
    }
    const company = form.elements.company.value.trim();
    const name = f.name.value.trim();
    const subject = `Hello from ${name}${company ? ` at ${company}` : ""}`;
    const body = `${f.message.value.trim()}\n\n${name}${company ? `, ${company}` : ""}\n${f.email.value.trim()}`;
    location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should be open with the message filled in. Press send there.";
  });
}
