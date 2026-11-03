---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: ["site/work"]
---

# Portfolio: home and project pages (site/index.html, site/work/*)

Mode: Persuade. Visitor: a recruiter or hiring manager judging a full-stack engineer. They need to see the role, the edge (product ownership) and a way to reach him within seconds, then go deep on any project. Actions: email (mrkgrrgn@gmail.com), résumé (/markgarrigan.pdf), LinkedIn, contact form. Pages: home (the project menu), one page per project (Bibsee, nurun co. with nurun-admin, Luna Coffee, Plainwork, boxx, stored), About, Contact. Proof: live screenshots of the four public sites, labelled illustrations of private tools (nurun-admin, stored, boxx, Bibsee app and console, Luna admin), and the story facts from Mark's interview in PRODUCT.md. stored is pitched to merchants ("own your store"). Replaces the Box Wall world, which Mark rejected ("it just isn't me").

## Direction contract

THESIS: The portfolio is a setup utility. You navigate Mark's work the way you'd configure a machine: tabs, an item list, a help pane that explains the selected item, and a key legend that is the real set of actions. It refuses the dark "terminal portfolio" of prompts, typing effects and cards in a grid.

OWN-WORLD: A character-cell grid in one monospace face (Iosevka; VT323 in the Borland theme). Inverse-video title and legend bars. Box-drawing panes with their titles inset in the top rule. The selection bar is an inverse highlight. Status is set in brackets ([Live], [Soon], [Private]) with checkbox layer flags [x]. The theme menu offers Catppuccin Latte (light default), Frappé, Macchiato, Mocha (dark default) and Borland (blue field, grey bars, yellow headings).

STORY: The visitor reads who he is in the first pane and scans six items with dates and status. The help pane sells the selected one, and Enter opens it. On a project page, dense ruled panes give the problem, the system layer by layer, the screens, the decisions and the results. Then they email, take the résumé or open LinkedIn from the legend.

FIRST VIEWPORT: A title bar with name and role on the left and the theme control on the right. Tabs: Work, About, Contact. A left pane holds the name at display size, the one-line hook, "Owned end to end: Idea ▸ Architecture ▸ Build ▸ Launch ▸ Run", then the project list. The first item is selected, and nurun-admin is a child row under nurun co. The right "Item Specific Help" pane shows the selected project's pitch, preview screen, layer flags, stack, dates and an Open action. The legend bar is pinned to the bottom: ↑↓ Select · ↵ Open · E Email · R Résumé · L LinkedIn · T Theme, every one a working link or key.

FORM: Setup Utility, the roll's assignment (candidate 7 of 7 TUI flavours), with Mark's theme steer. Donor raises: dense ruled panes; everything on the cell grid; visited items keep a mark; tabular timestamps. Signature interaction: a keyboard-and-pointer selection bar that drives the help pane, plus the theme menu. Motion is instant state swaps, as in a real TUI. seed:a154dbaf38cde920

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions
- The résumé PDF is being revised; the link is /markgarrigan.pdf.
- The contact form handler is undecided, so the form composes an email.
