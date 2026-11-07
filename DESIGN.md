---
name: Mark Garrigan
description: "Mark Garrigan's portfolio, navigated like a firmware setup screen: one monospace face on a character grid, inverse-video bars, box-drawn panes and a selection bar that drives the help pane."
colors:
  latte-bg: "#eff1f5"
  latte-panel: "#e6e9ef"
  latte-fg: "#4c4f69"
  latte-muted: "#5c5f77"
  latte-rule: "#7c7f93"
  latte-bar-bg: "#4c4f69"
  latte-bar-fg: "#eff1f5"
  latte-key-bg: "#eff1f5"
  latte-key-fg: "#8839ef"
  latte-sel-bg: "#8839ef"
  latte-sel-fg: "#eff1f5"
  latte-accent: "#8839ef"
  latte-ok: "#2f7a21"
  latte-warn: "#c2410c"
  latte-priv: "#4a5bc4"
  latte-err: "#d20f39"
  frappe-bg: "#303446"
  frappe-panel: "#292c3c"
  frappe-fg: "#c6d0f5"
  frappe-muted: "#a5adce"
  frappe-rule: "#838ba7"
  frappe-bar-bg: "#c6d0f5"
  frappe-bar-fg: "#303446"
  frappe-key-bg: "#303446"
  frappe-key-fg: "#ca9ee6"
  frappe-sel-bg: "#ca9ee6"
  frappe-sel-fg: "#232634"
  frappe-accent: "#8caaee"
  frappe-ok: "#a6d189"
  frappe-warn: "#ef9f76"
  frappe-priv: "#babbf1"
  macchiato-bg: "#24273a"
  macchiato-panel: "#1e2030"
  macchiato-fg: "#cad3f5"
  macchiato-muted: "#a5adcb"
  macchiato-rule: "#8087a2"
  macchiato-bar-bg: "#cad3f5"
  macchiato-bar-fg: "#24273a"
  macchiato-key-bg: "#24273a"
  macchiato-key-fg: "#c6a0f6"
  macchiato-sel-bg: "#c6a0f6"
  macchiato-sel-fg: "#181926"
  macchiato-accent: "#8aadf4"
  macchiato-ok: "#a6da95"
  macchiato-warn: "#f5a97f"
  macchiato-priv: "#b7bdf8"
  mocha-bg: "#1e1e2e"
  mocha-panel: "#181825"
  mocha-fg: "#cdd6f4"
  mocha-muted: "#a6adc8"
  mocha-rule: "#7f849c"
  mocha-bar-bg: "#cdd6f4"
  mocha-bar-fg: "#1e1e2e"
  mocha-key-bg: "#1e1e2e"
  mocha-key-fg: "#cba6f7"
  mocha-sel-bg: "#cba6f7"
  mocha-sel-fg: "#11111b"
  mocha-accent: "#89b4fa"
  mocha-ok: "#a6e3a1"
  mocha-warn: "#fab387"
  mocha-priv: "#b4befe"
  borland-bg: "#0000aa"
  borland-panel: "#0000aa"
  borland-fg: "#ffffff"
  borland-muted: "#aaaaaa"
  borland-rule: "#aaaaaa"
  borland-bar-bg: "#aaaaaa"
  borland-bar-fg: "#000000"
  borland-key-bg: "#0000aa"
  borland-key-fg: "#ffffff"
  borland-sel-bg: "#aaaaaa"
  borland-sel-fg: "#0000aa"
  borland-accent: "#ffff55"
  borland-ok: "#55ff55"
  borland-warn: "#ffff55"
  borland-priv: "#55ffff"
typography:
  display:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontFeature: "\"liga\" 0"
  headline:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.375
  title:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"liga\" 0"
  label:
    fontFamily: "SauceCodePro NFM, ui-monospace, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  body-jetbrains:
    fontFamily: "JetBrainsMonoNL NFM, ui-monospace, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  body-noto:
    fontFamily: "NotoSansM NFM, ui-monospace, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  body-borland:
    fontFamily: "BigBlueTerm437 NFM, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  cell: "1ch"
  cell-2: "2ch"
  row: "0.3rem"
  pane-top: "1.6rem"
  pane-bottom: "1.4rem"
  rule-gap: "1.1rem"
  pane-stack: "2.5rem"
  page-top: "2rem"
components:
  button:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-fg}"
    rounded: "{rounded.none}"
    padding: "0.3rem 1ch"
  button-hover:
    backgroundColor: "{colors.latte-sel-bg}"
    textColor: "{colors.latte-sel-fg}"
  button-primary:
    backgroundColor: "{colors.latte-sel-bg}"
    textColor: "{colors.latte-sel-fg}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.3rem 1ch"
  titlebar:
    backgroundColor: "{colors.latte-bar-bg}"
    textColor: "{colors.latte-bar-fg}"
    height: "2.5rem"
    padding: "0 2ch"
  legend:
    backgroundColor: "{colors.latte-bar-bg}"
    textColor: "{colors.latte-bar-fg}"
    padding: "0.45rem 2ch"
  legend-key:
    backgroundColor: "{colors.latte-key-bg}"
    textColor: "{colors.latte-key-fg}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0 0.6ch"
    width: "2ch"
  tab:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-muted}"
    padding: "0.35rem 2ch"
  tab-current:
    backgroundColor: "{colors.latte-sel-bg}"
    textColor: "{colors.latte-sel-fg}"
    typography: "{typography.title}"
    padding: "0.35rem 2ch"
  pane:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-fg}"
    rounded: "{rounded.none}"
    padding: "1.6rem 2ch 1.4rem"
  pane-help:
    backgroundColor: "{colors.latte-panel}"
    textColor: "{colors.latte-fg}"
    rounded: "{rounded.none}"
    padding: "1.6rem 2ch 1.4rem"
  pane-title:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-accent}"
    typography: "{typography.title}"
    padding: "0 1ch"
  list-item:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-fg}"
    padding: "0.3rem 1ch"
  list-item-selected:
    backgroundColor: "{colors.latte-sel-bg}"
    textColor: "{colors.latte-sel-fg}"
    padding: "0.3rem 1ch"
  input:
    backgroundColor: "{colors.latte-panel}"
    textColor: "{colors.latte-fg}"
    rounded: "{rounded.none}"
    padding: "0.3rem 1ch"
  input-focus:
    backgroundColor: "{colors.latte-bg}"
    textColor: "{colors.latte-fg}"
  theme-menu:
    backgroundColor: "{colors.latte-bar-bg}"
    textColor: "{colors.latte-bar-fg}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0"
    width: "26ch"
  theme-menu-item-hover:
    backgroundColor: "{colors.latte-sel-bg}"
    textColor: "{colors.latte-sel-fg}"
    padding: "0.2rem 1.5ch"
---

# Design System: Mark Garrigan

## Overview

**Creative North Star: "Setup Utility"**

The portfolio is a setup utility. You move through Mark's work the way you'd configure a machine. A title bar names the system, tabs split it into Work, About and Contact, an item list carries the projects with dates and bracketed status, and an "Item Specific Help" pane explains whatever the selection bar is on. The key legend pinned to the bottom is the real set of actions. Every key in it works, and so does every pointer click. It's a configuration screen, not the dark "terminal portfolio" of prompts, typing effects and card grids.

Everything sits on a character-cell grid in one monospace face. Horizontal measure is counted in ch, structure is drawn with box rules, and emphasis comes from inverse video, not from shadows, gradients or rounded surfaces. It's dense on purpose: ruled panes hold key/value rows, layer flags and tabular timestamps, the way a BIOS screen packs a lot into one view without feeling crowded.

Five themes reskin the same screen. The defaults are Catppuccin Latte (light) and Mocha (dark), and Frappé, Macchiato and a Borland CGA theme can be picked from the menu. Every theme fills the same role tokens, so a component never knows which theme it's in.

**Key Characteristics:**
- One monospace Nerd Font at a time, chosen from the Font menu (F): SauceCodePro (default), JetBrains Mono or Noto Sans Mono at 400/700. Borland allows only BigBlueTerm. Ligatures off, on a character-cell grid.
- Inverse-video title bar and key legend. Key caps invert a second time.
- Box-drawing panes: 1px single rule at rest, 3px double rule for focus, title inset in the top rule.
- An inverse selection bar that drives the help pane, from the keyboard or the pointer.
- Bracketed status [Live] [Soon] [Private], [x] layer flags and [ Label ] buttons.
- Square corners everywhere. Flat, with one exception: the theme menu's Turbo Vision window shadow.
- Instant state swaps. No transitions.
- Five role-token themes: Latte, Frappé, Macchiato, Mocha, Borland.

## Colors
> **Latte contrast adjustment (2026-11-01):** Latte's accent is mauve (#8839ef) instead of Catppuccin blue, and its ok, warn and priv status colours are darker than the stock Latte green, peach and lavender (#2f7a21, #c2410c, #4a5bc4), so bracketed status and pane titles clear 4.5:1 on #eff1f5. Form errors use Latte red (#d20f39). Every other theme uses the published Catppuccin values unchanged.


The palette is five complete themes with the same fifteen roles. Catppuccin supplies four of them (pastel accents on lavender-grey fields), and Borland is the four-bit CGA palette at full saturation. The frontmatter is normative. Each key is `<theme>-<role>`.

### Primary
- **Selection Mauve** (`latte-sel-bg`, `frappe-sel-bg`, `macchiato-sel-bg`, `mocha-sel-bg`; CGA light grey `borland-sel-bg` in Borland): the inverse selection bar, active tab, primary button fill, button hover inversion, menu row highlight and `::selection`. Always paired with `*-sel-fg`.
- **Key Cap Letter** (`*-key-fg`): the letter on a legend key cap. Mauve in Catppuccin, white in Borland.

### Secondary
- **Focus and Title Accent** (`*-accent`: Catppuccin Blue; CGA yellow in Borland): inset pane titles, in-pane section heads such as "Projects", the :focus-within double frame, the 2px focus outline, the input focus ring and the text caret. Borland's yellow headings come from this role.

### Tertiary
- **Live Bracket** (`*-ok`, green), **Soon Bracket** (`*-warn`, peach; CGA yellow), **Private Bracket** (`*-priv`, lavender; CGA cyan): status bracket colours. Warn also strokes an invalid field.

### Neutral
- **Base Field** (`*-bg`): the page and the background behind inset pane titles. Key caps reuse it (`*-key-bg`).
- **Panel Field** (`*-panel`): one step deeper than the base, used to fill the help pane, inputs and screenshot plates. It's the same as the base in Borland.
- **Text** (`*-fg`) and **Muted Text** (`*-muted`): body text and names; descriptions, dates, labels, captions and button brackets.
- **Box Rule** (`*-rule`): every pane frame, divider, tab underline and field underline. Measured at 3.25 to 5.72:1 against base and panel across the five themes.
- **Inverse Bar** (`*-bar-bg`) and **Inverse Bar Text** (`*-bar-fg`): the title bar, key legend and theme menu. In Catppuccin they swap text and base. In Borland they're CGA grey with black text.

### Theme mechanics
Latte is set on `:root` and `[data-theme="latte"]`. Under `prefers-color-scheme: dark`, `:root:not([data-theme])` takes Mocha's values. Picking a theme from the menu (T, or the title-bar button) sets `data-theme` on `<html>` and stores it in localStorage under `theme`. An inline head script reapplies it before first paint. Auto removes the attribute.

### Named Rules
**The Inverse Video Rule.** The title bar and key legend are true inverse video. The bar field is the theme's text colour and its text is the base colour. Key caps invert again: a base-colour cap with the letter in the selection hue (mauve in Catppuccin; white on CGA blue in Borland). Never tint the bars with a brand colour or a translucent fill.

**The One Selection Rule.** The selection colour marks the one thing that's chosen or about to act: the selected list row, the active tab, the primary button, a hovered or focused button, a highlighted menu row and selected text. It always comes paired with its own selection-text colour. Never use it for decoration.

**The Bracket Status Rule.** The ok, warn and priv colours colour only the brackets of [Live], [Soon] and [Private]. The word stays in the text colour. On the selection bar the brackets take the selection-text colour. These three are signal colours, not text colours.

**The Role Token Rule.** Every colour is a role token (base, panel, text, muted, rule, bar, key, selection, accent, ok, warn, priv) defined in all five themes. Components use roles only. The one place a literal hex is allowed in markup is the theme menu's swatches, which preview the themes themselves.

## Typography

**Display Font:** the chosen Nerd Font: SauceCodePro by default (with ui-monospace, Menlo, monospace)
**Body Font:** the chosen Nerd Font: SauceCodePro by default, JetBrains Mono or Noto Sans Mono
**Label/Mono Font:** the same face. In Borland the whole stack becomes BigBlueTerm437 (with ui-monospace, monospace) at the normal 16px root, with `font-synthesis: none`, so it never gets a faux bold; Borland hierarchy comes from size and colour.

**Character:** One subset monospace face, OFL-licensed and self-hosted, at two weights. Display sizes are just bigger, bolder cells set tight (0.95 line height, -0.02em tracking), so a 5rem name still reads as part of the same character screen.

### Hierarchy
- **Display** (700, clamp(2.75rem, 6.2vw, 5.25rem), 0.95, -0.02em): the name in the home Main pane and project titles (clamp(2.75rem, 6vw, 5rem)). About and Contact headings use clamp(2.5rem, 5vw, 4.25rem). A private tool's name inside a project uses the 2rem headline size.
- **Headline** (700, 2rem, 0.95): the selected item's name in the help pane.
- **Lead** (400, 1.2 to 1.3rem, snug 1.375): the one-line hook and the project pitch, capped at 48 to 60ch.
- **Title** (700, 1rem, 1.5, accent): inset pane titles and in-pane section heads. Item names and decision titles are 700 in the text colour.
- **Body** (400, 1rem to 1.05rem, 1.55): story paragraphs, key/value rows and list rows. Prose is capped at 60 to 68ch. Dates use tabular numerals.
- **Caption** (400, 0.875rem, muted): screen captions and their [Screenshot] / [Illustration] tags.

### Named Rules
**The One Face Rule.** One monospace Nerd Font family at a time: the visitor's pick of SauceCodePro (default), JetBrains Mono NL or Noto Sans Mono at 400 and 700 with ligatures off. Borland allows only BigBlueTerm437 and hides the others in the Font menu. All four are Nerd Fonts Mono builds (v3.5.1), self-hosted and subset to Latin, box drawing, arrows and the status glyphs. The Font menu previews live, like the Theme menu, and saves the choice in localStorage under `font`. Hierarchy comes from size, weight and colour alone. Never add a second family, an italic or a system display face.

**The Cell Grid Rule.** Horizontal measure is counted in characters: 1ch and 2ch padding, 13ch and 16ch label columns, a 2ch cursor column and a 9ch status column. Line lengths are capped in ch (40 to 68ch). Vertical rhythm is set in rem.

**The No Kicker Rule.** No kicker or eyebrow text above headings, and pane titles never repeat the page heading. The project header pane is titled "Overview", not the project name. The inset pane title is the only label a block gets.

## Layout

The page is a vertical stack. The title bar (min 2.5rem) sits on top, the tabs are underlined with a 3px double rule, the content is padded 2ch at the sides and 2rem at the top, and the legend sticks to the bottom of the viewport. Content uses a 12-column grid from 1024px up, with a 2ch gutter between panes and 2.5rem between stacked panes. The home screen splits 7/5 (Main / Item Specific Help). Project pages open with a full-width Overview pane, which is itself split 7/5 between title and pitch and a key/value block, then a 7/5 column of ruled panes (Story, Results, System layer by layer, Screens, then any "Private tool" pane such as nurun-admin or the Luna delivery app, then Decisions and In the box). Inside panes, padding is 1.6rem top, 2ch sides and 1.4rem bottom, and rows step at 0.3rem.

Breakpoints: 640px, 768px (the title bar shows the role line), 1024px (the 12-column split, full-height panes, the Item Specific Help pane and the selection bar), 1280px (three-up screen grids).

**Phones (under 640px)** get their own arrangement, not a squeezed desktop:
- The title bar holds the name, the version and `[ Menu ]` (M underlined). Font and Theme move into the Menu window, so the bar never overflows.
- The tabs stay. The key legend shows only E, R and I on Work, About and Contact (Back is the phone's own gesture), and project pages drop the legend entirely: they're long reads, and Menu carries their keys.
- Each project row is the name and its bracketed status on one line, with the description underneath (child rows indent it 2ch). No cursor column, no dates.
- Key/value rows stack: the muted label sits above its value, with 0.55rem between pairs.
- Screen captions wrap, so the [Screenshot] / [Illustration] tag can drop under a long caption.
- Form fields stack their labels, as before.

**Under 1024px** a tap opens a project, so the home page drops the Item Specific Help pane and the list drops its ▸ cursor column. A row lights with the selection bar only while it's pressed, keyboard-focused or (with a mouse) hovered; the [data-sel] bar is a 1024px-and-up state, because that's where it drives the help pane.

### Named Rules
**The One Screen Rule.** Every first viewport fits on one screen. At 1024px and up, the Main and Help panes stretch down to the legend (min-height calc(100svh - 11.5rem)), and the help pane's preview screen is capped at min(30vh, 320px) and cropped from the top.

## Elevation & Depth

The world is flat. Depth comes from the frame and from inverse video: a double rule marks focus, the panel field sets the help pane one step back, and the selection bar and bars sit at full contrast. The only lifted object is the theme menu, which floats over the screen like a Turbo Vision window. The input focus ring is an inset 2px accent box-shadow. That's a ring, not elevation.

### Shadow Vocabulary
- **Window Shadow** (`box-shadow: 1ch 0.6rem 0 rgb(0 0 0 / 0.35)`): the theme menu only.
- **Field Focus Ring** (`box-shadow: inset 0 0 0 2px var(--accent)`; warn for invalid): text inputs and the textarea.

### Named Rules
**The Window Shadow Rule.** The theme menu casts a hard, unblurred shadow one character cell right and 0.6rem down (1ch 0.6rem 0 rgb(0 0 0 / 0.35)). This is the Turbo Vision window shadow, part of this world and not a costume. It's the only hard shadow allowed and the only drop shadow of any kind. Every other surface is flat.

## Shapes

Everything is a rectangle of character cells. Radius is 0 everywhere, including inputs (set explicitly). Frames are drawn as single or double rules. Pane titles break the top rule, padded 1ch on either side and inset 1.5ch from the left, with a field-coloured background that knocks the rule out behind them. On the panel field, that background is split half base and half panel so it matches both sides of the rule. Box-drawing characters (└ for a child row, ▸ for a pipeline step or decision line) are part of the form language.

### Named Rules
**The Square Cell Rule.** Every corner is square (0 radius): panes, buttons, key caps, inputs, menus and screenshots. A radius anywhere breaks the character grid.

**The Double Frame Rule.** A pane at rest has a 1px single rule. A pane that holds focus gets a 3px double rule, and while focus is inside it (:focus-within) the double rule switches to the accent colour. Every rule colour holds at least 3:1 against the field it sits on.

## Components

The components are terse and literal. Each one reads as the part of a setup screen it is.

### Buttons
- **Shape:** square (0) with no border. The frame is the bracket characters `[` and `]`, generated in muted text, with 1ch padding inside the field and 0.3rem top and bottom.
- **Default:** text colour on no fill, with muted brackets.
- **Hover / Focus:** the whole button inverts to the selection fill with selection text, brackets included. It swaps instantly. Focus reuses the hover inversion instead of an outline.
- **Primary:** filled with the selection colour at rest, in selection text and bold (`[ Open Bibsee ↵ ]`, `[ Email me ]`, `[ Send ↵ ]`). Use one per pane at most.
- **In the title bar:** bracket and label take the bar text colour and invert to selection text on hover.

### Tabs
- Muted labels padded 2ch in a row over a 3px double rule. Hover brings them up to the text colour. The current tab is a bold selection block (`aria-current`).

### Item List (signature)
- A grid of a 2ch cursor column, the name, the dates and a 9ch status column, with rows padded 0.3rem by 1ch. The name is bold in the text colour, the description is muted, and the dates are muted with tabular numerals (`2025-09 → now`).
- **Selected:** a full-width selection bar with a ▸ cursor, where every part of the row (description, dates, brackets) takes the selection text colour. Keyboard focus uses the same bar. Visited rows keep a muted mark.
- **Child rows** indent under their parent with a muted `└`.
- Selecting a row from the keyboard (↑↓ / j k) or the pointer rewrites the Item Specific Help pane: name, pitch, status line, preview screen, layer flags, stack, dates and an Open primary button. Enter opens it.

### Panes / Containers
- **Corner Style:** square.
- **Border:** 1px rule at rest. A focus pane gets a 3px double rule, which turns accent while it holds focus (:focus-within).
- **Background:** the base field, or the panel field for the help pane.
- **Title:** bold accent text inset in the top rule, never a repeat of the page heading.
- **Internal Padding:** 1.6rem 2ch 1.4rem. Dividers inside a pane are 1px or 3px double rules with 1.1rem above and below.

### Status and Flags
- Bracketed status `[Live]` `[Soon]` `[Private]` with only the brackets in ok, warn or priv. Layer flags read `[x] Interface [x] API [x] Data [x] Infra [x] Ops`, with unset flags `[ ]` in muted text.

### Key/Value Rows
- A 13ch muted label column and the value in the text colour, with a 2ch gap (Role, Built, History, Stack).

### Inputs / Fields
- **Style:** the label sits in a 16ch muted column. Inputs are panel-filled with a 1px rule underline and a square corner. The textarea is fully framed at a minimum of 8.5em.
- **Focus:** the field goes back to the base colour and gets an inset 2px accent ring. The caret is accent.
- **Error:** an inset 2px warn ring and a message underneath. A form-level summary counts the fields that need a fix. Below 640px, labels stack above their fields.

### Navigation: Title Bar and Key Legend
- **Title bar:** inverse video. The name is bold on the left with the site version (`v1.0.7`, from package.json) beside it at 0.8em, "Full-stack engineer" is in the middle (768px and up), and `[ Font: SauceCodePro ]` and `[ Theme: Auto ]` are on the right, with F and T underlined as their keys. Under 640px those two give way to `[ Menu ]`. "Setup Utility" is the design's north star, never on-screen copy.
- **Key legend:** an inverse bar stuck to the bottom of the viewport. Each entry is a bold key cap (min 2ch, 0.6ch side padding, base field, selection-hue letter) followed by its label. Hovering outlines the cap 1px in the bar text colour. An unavailable entry (the resumé while it's being revised) drops to 0.75 opacity and says "(soon)".
- **Shortcuts:** M Menu (phones only, where the title bar shows `[ Menu ]`; T and F open it there too), W Work, A About, C Contact (each tab underlines its key letter), j k / ↑↓ move, l / Enter open (follows the selection or a focused link; picks in a menu), h / Esc back (history back on this site, else up to Work; closes a menu), ← → previous/next project, E email, R resumé, I LinkedIn, F font, T theme. Shortcuts never fire while typing in a field, and keys pressed inside an open menu stay in the menu. The legend shows movement and actions (`j k ↑↓ Move`, `l ↵ Open`, `h Esc Back`, E, R, I). Font and Theme live in the title bar, where their F and T are underlined like the tab letters; they aren't repeated in the legend. Scrolling: on pages without a list j k scroll three lines; d u scroll half a page and gg G jump to the top or end on any page that scrolls. All scrolling is instant, and the legend shows `j k Scroll`, `d u Page` and `gg G Top/End` only when the page actually scrolls and only from 640px up.

### Menu Window (phones)
- `[ Menu ]` in the title bar, or M, opens a full-screen window on the base field. Its top bar is inverse video and the same height as the title bar: "Menu" on the left and `[ X Close ]` on the right, with the X underlined like Menu's M. X or Esc closes it and focus returns to `[ Menu ]`; it closes on its own if the viewport widens past 640px. Without JS the Menu link opens it through `:target`.
- Below the bar, ruled groups with inset titles, in this order: **On this page** (project pages only: each section numbered 1 to n, so a number key jumps there), **Go to** (W Work, A About, C Contact, then ← previous and → next project on project pages), **Get in touch** (E Email, R Resumé, I LinkedIn, with the address, "PDF" and the handle as muted notes) and **Settings** on the panel field (Theme and Font as lists with the ● check column, swatches and font samples; a tap applies and saves at once).
- Rows are at least 2.75rem tall: a 3ch key-cap column, the label, and a muted note on the right that shrinks before the label does. Caps are inverse-bar blocks (bar field, bar text). The current tab's row carries the selection bar, and any hovered, pressed or focused row does too; on the selection bar a cap inverts again (selection text field, selection-colour letter), like the legend's caps on their bar.
- Inside the window, keys belong to the window: j k / ↑↓ move, Home and End jump, l or Enter opens, the row keys (W A C, E R I, ← →, 1 to n) act directly, and Tab cycles without leaving it. The page under it doesn't scroll while it's open.
- The window is flat, with no shadow. It replaces the page rather than floating over it.

### Theme Menu (signature)
- An inverse-bar window with a 3px double rule frame and a minimum width of 26ch. It drops 0.3rem under the title bar, right-aligned, and casts the Window Shadow. Each row has a ● check column, the theme name and a strip of 1ch swatches from that theme. Rows invert to the selection bar on hover and focus. ↑↓ or j k (Home and End too) move between them, and the theme under the cursor is painted **live** across the page as a preview. Enter or a click commits and saves it; Esc, Tab or an outside click closes the menu and snaps back to the saved theme.

### Screens
- A screenshot or illustration plate with a 1px rule frame on a panel fill, and a caption row under it (the description on the left, the muted [Screenshot] / [Illustration] tag on the right, 0.875rem). In the help pane the plate is capped at min(30vh, 320px) and cropped from the top.

### Named Rules
**The Instant Swap Rule.** Motion is instant state swaps, like a real TUI. Selection, hover inversion, menu open and theme change all happen in a single frame. No transitions, easing, fades or typing effects.

**The Labelled Plate Rule.** Every screen image says what it is in the right of its caption: [Screenshot] for a capture of the real product, [Illustration] for a labelled drawing of a private tool. Every shipping raster has a .webp.json provenance sidecar.

## Do's and Don'ts

### Do:
- **Do** build every surface out of the same parts: title bar, tabs, box-drawn panes with inset titles, an item list with a selection bar, and the pinned key legend.
- **Do** set all text in the one monospace face with `font-variant-ligatures: none`, at 1rem / 1.55 for body and 700 for names, titles and key caps.
- **Do** make every shortcut real and visible (legend, or an underlined letter on a tab or title-bar button): W Work, A About, C Contact (each tab underlines its key letter), j k / ↑↓ move, l / Enter open (follows the selection or a focused link; picks in a menu), h / Esc back (history back on this site, else up to Work; closes a menu), ← → previous/next project, E email, R resumé, I LinkedIn, F font, T theme.
- **Do** keep the selected item and the "Item Specific Help" pane in sync for both pointer and keyboard selection.
- **Do** define every new colour role in all five themes and check it in each. Text holds 4.5:1 and rules hold 3:1 against their field.
- **Do** persist the theme choice in localStorage ("theme") and fall back to Latte or Mocha through prefers-color-scheme when it's Auto.
- **Do** use native box-drawing and TUI glyphs (└ ▸ ↵ ● [x] [ ]) as structure. They're the world's own characters.
- **Do** label screen images [Screenshot] or [Illustration], and ship each raster with its provenance sidecar.

### Don't:
- **Don't** add a kicker or eyebrow line above a heading, or title a pane with the page heading.
- **Don't** round a corner, blur a shadow, or add any shadow other than the theme menu's window shadow.
- **Don't** animate. No transitions, fades, typing effects or blinking cursors.
- **Don't** set running text in the ok, warn or priv colours. They're bracket and stroke colours, and in Latte they fall under 3:1 on the base field.
- **Don't** introduce a second typeface or a proportional fallback for headings.
- **Don't** turn it into a terminal: no shell prompts, no fake command lines, no project cards in a grid.
- **Don't** pair the selection colour with anything but its own selection-text colour.
