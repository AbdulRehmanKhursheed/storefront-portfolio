# Braci Design System

Braci is a small pizza storefront: Neapolitan pizza, a short pasta list, and puddings made that
morning. The one thing the brand always says out loud is that the pizzas are cooked in a **brick
oven, not a gas oven** — wood-fired, roughly 480°C, about sixty seconds a pizza. The visual
identity follows from that: fire orange, ember red, cream paper, hand-drawn food doodles, and a
brush wordmark inside a flame.

The name *braci* is Italian for embers. Everything in this system should feel like it came off a
counter next to a hot oven — warm, handwritten, cheap in the best sense, never corporate.

## Sources given

| Source | What it contained |
|---|---|
| `Font and Logo.png` (upload) | Two logo lockups, and the type spec: **Dead Stock** (display), **Gaegu** (headings) |
| Hero reference + button reference + pizza photograph (uploads) | Hero composition (headline, button, half-pizza at the base), the button spec (10×8 padding, 16px semibold, radius 12), and `assets/pizza-top.png`. Body face named as **Asap Condensed**. |
| `Colour Palette.png` (upload) | Six colours with a written context + role for each |
| `Doodles.png` (upload) | Four line drawings — pasta, cake, drink, pizza slice |
| Two pasted logo PNGs | The primary (flame) and secondary (slice) marks at ~110–225px |
| Written brief | "small pizza storefront … Neapolitan Pizza, pasta, desserts … catchy vibe … orange … brick ovens instead of traditional gas ovens" |

No codebase, repository, Figma file, website, app or slide deck was supplied. **There is therefore
no product to recreate.** The UI kits in this project apply the supplied foundations to the two
obvious surfaces for this business (a storefront site and a pickup-ordering app); they are
references, not recreations, and they are labelled as such in their own READMEs.

### Substitutions to confirm

1. **Dead Stock — resolved.** The client supplied the real binary (demo cut), shipped at
   `assets/fonts/DeadStock-Demo.ttf` and declared as `@font-face` in `tokens/fonts.css`. Note it is
   the *demo* release; confirm licensing and glyph coverage before production use.
2. **Body face: Asap Condensed** (Google Fonts) — client-specified after the first pass. Earlier
   drafts of this system used Nunito Sans as a stand-in; that is no longer correct.
3. **Icons → Phosphor Icons, regular weight** (CDN). No icon set was supplied. See § Iconography.
4. **Logo and doodle art is low-resolution raster.** Extracted from the uploads, upscaled, white
   knocked out to alpha. Vectors are needed before anything goes to print or large format.

---

## Content fundamentals

**Voice.** A cook talking across a counter. Plain, specific, slightly dry. Facts do the selling:
temperature, timing, what is in it, when it runs out. No adjectives doing work a number could do.

**Person.** *We* for the restaurant, *you* for the customer. Never "our team", never "the
customer". The brand talks about itself in the first person plural and only when it has something
concrete to say.

- ✅ "Mixed the day before, slow-proved cold, opened by hand. Nothing is rolled."
- ✅ "We'll text you when it's boxed."
- ❌ "Our passionate team crafts artisanal dough with love."

**Casing.** Sentence case everywhere — headings, buttons, menu items. The only uppercase is the
micro-label: eyebrows above section headings and nav labels, 12px, 800 weight, `.14em` tracking.
Menu item names keep their Italian spelling and accents: *Tiramisù*, *Rigatoni all'amatriciana*,
*Nduja*.

**Length.** Menu descriptions are one line, ingredients separated by commas, no verb:
"San Marzano, fior di latte, basil". Section intros are one or two sentences. Nothing on a button
runs past four words unless it is the paying action, which may be a small joke: "Pay and put it in
the oven".

**Numbers and prices.** Prices always carry the symbol and two decimals: `£11.50`. Temperatures use
the degree symbol: `480°C`. Times are 24-hour: `12:00 – 22:00`. Pizza sizes in inches.

**Humour.** Dry, once per screen at most, and always attached to a fact. "Pudding is made in the
morning and gone by nine." "When something runs out it stays out until tomorrow."

**Emoji.** Never. The four doodles do the job emoji would otherwise be reached for.

**Words the brand uses:** brick oven, wood, embers, ember, fire, 480°C, sixty seconds, leopard
spotting, slow-proved, opened by hand, boxed, counter, short menu.
**Words it avoids:** artisanal, authentic, journey, curated, passion, hand-crafted, elevated, our
team, experience.

---

## Visual foundations

### Colour

Six values, each with a job written down by the client. Do not reassign them.

| Token | Value | Job |
|---|---|---|
| `--braci-orange` | `#FF610E` | **Identity.** Header, footer, logo. Large flat areas of brand. |
| `--braci-ember` | `#C24200` | **Action.** Buttons, card strip, selected filters. Never a background wash. |
| `--braci-cream` | `#FDF3E3` | **Page ground.** Every page starts here, never white. |
| `--braci-shell` | `#FFF8F0` | **On-fill text**, and the fill of cards sitting on cream. |
| `--braci-char` | `#17110E` | **Body text**: names, prices, nav labels. Also the scrim and sticker shadow. |
| `--braci-ash` | `#6E6659` | **Muted text**: descriptions, ingredients, timestamps. |

The palette sheet wrote the background as `#F3FDE3`; the swatch itself is `#FDF3E3` (cream, not
green). The system uses the sampled value — worth confirming.

Rules that follow from the roles: two oranges never touch (an ember button never sits on an orange
band — use `variant="onOrange"`, a shell fill with ember text). Greys do not exist; every neutral
is char or ash at some alpha, so shadows and hairlines read warm brown. Status colours exist
(`--status-success`, `--status-error`) but are derived and deliberately dull, so they never compete
with the identity orange.

### Type

Three faces, each with one job.

- **Display — Dead Stock** (`--font-display`), the client's own face. Brush script, sentence
  case, 40–68px. Used for one line per screen: a headline kicker, the footer line, a chalkboard
  aside. Never for a paragraph, never for UI labels.
- **Headings — Gaegu** (`--font-heading`), weight 700. Every h1–h4 and every menu item name. Gaegu
  is a narrow handwriting face with a short x-height, so headings run large: h1 48px, h2 34px,
  h3 26px, h4 21px, line-height 1.1, tracking `.02em`.
- **Body — Asap Condensed** (`--font-body`). 18 / 16 / 14 / 12 at line-height 1.55. Weight 400 for
  prose, 600 (semibold) for buttons and controls, 700 for emphasis, prices and micro-labels.

Prices are body weight 800 in char, never in Gaegu — they need to line up in a column.

### Layout

Cream page, 1160px max content width, 48px page gutters on desktop and 20–24px on phones. The site
is a single stacked column of full-width bands: an orange sticky header, cream content sections
separated by a hairline, and an orange footer. Sections breathe on the 64/96px steps of the spacing
scale; content inside cards uses 16/24.

The menu is the one layout with its own rule: two columns on desktop, one on phones, and each row
is a doodle disc, a name, a **dotted leader**, and a price — a printed menu, on screen.

Fixed elements: the header only (sticky, orange, full width). The app adds a sticky pay bar at the
bottom of the basket. Nothing else pins.

### Spacing, radii, borders

Spacing runs 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Radii are generous but not pill-everything:
4px checkboxes, 8px inputs, **12px buttons** (`--radius-button`, per the client's button
reference), 12px images and toasts, 18px cards and dialogs, 28px hero panels, and full pills for
tags, steppers and the segmented pickup/delivery control. Buttons carry 10px vertical / 8px
horizontal padding at 16px semibold; size modifiers only widen the horizontal padding. Borders are always a single hairline of char at 14%
(28% for controls that need to be grabbed) — never a coloured border, and never a coloured
left-border accent.

### Shadows, transparency, blur

Two shadow families:

1. **Warm ambient** — `--shadow-sm/card/raised/overlay`, char at 8–28%, no spread, straight down.
   Because the ground is cream, these read as a warm brown, which is the point.
2. **Sticker** — `--shadow-sticker`, a hard `3px 3px 0` char offset with a 1px char border. This is
   the brand's one flourish: it goes on the single most important CTA of a view and nowhere else.
   Pressing it moves the element 2px into its own shadow.

No blur, no frosted glass, no protection gradients — text never sits on an image, so it never needs
one. Transparency appears only in hairlines, the dialog scrim (char at 62%) and the doodle
watermark (22%).

### Motion

Short and unfussy. 120ms for hover and colour, 180ms for toggles, tabs and steppers, 280ms for
sheets, dialogs and toasts. One curve: `cubic-bezier(.2,.7,.3,1)`. Presses scale to 0.97; the
sticker CTA translates instead. Cards lift 2px on hover. No bounce, no spring, no parallax, nothing
looping — the only thing that should feel alive is the oven.

### States

- **Hover:** actions darken to `--braci-ember-deep`; outlined and ghost controls fill with
  `--braci-orange-tint` and their text turns ember. Never opacity-fade a hover.
- **Press:** scale 0.97 (or the 2px sticker slide). No colour change on press.
- **Focus:** 3px orange ring at 45%, always visible, never removed.
- **Selected:** ember fill with shell text — filters, tabs and toggles all use the same treatment.
- **Disabled:** 42% opacity, shadow removed, cursor not-allowed.
- **Sold out:** the whole row drops to 55% and the action is replaced by an error badge. Stock
  reality is stated, not hidden.

**Mark on orange.** Both supplied marks are orange line art with a white halo, so neither reads on
the `--braci-orange` identity band. On orange, set the slice mark on a `--braci-shell` disc (the
header lockup in both kits does this) or use the brush wordmark alone. This is a limitation of the
supplied raster art — a shell or single-colour version of the mark would remove it.

### Imagery

One photograph was supplied: a top-down whole pizza on transparent ground
(`assets/pizza-top.png`). It anchors the hero — positioned so only the top arc of the pie sits at
the base of the section, rotating once every 48 seconds like a wheel. Everywhere else a photograph
belongs, the kits leave a labelled slot on `--surface-inset` rather than filling it. When photography does arrive it should be warm, close,
slightly dark, shot next to the oven — char in the shadows, orange in the flame — not bright, cool
or styled-flat-lay. The doodles are the only illustration; they are drawn in a single orange line
and used at 40–72px (never larger — the source art is ~32px) as category marks, empty states and 22%-opacity watermarks.

---

## Iconography

Braci supplied **no icon set** — only the four food doodles, which are illustrations rather than
icons and are treated as such (`Doodle`).

- **Cart and search: Google Material Symbols Outlined** — client-specified for the bag glyph.
  Load the Material Symbols stylesheet and use `<Icon set="material" name="shopping_bag" />`.
- **Everything else: Phosphor Icons, `regular` weight, via CDN** — a flagged substitution. Phosphor's
  1.5px-ish uniform stroke and rounded terminals sit closest to the hand-drawn doodles without
  looking like a different brand. Load
  `https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css` and use the `Icon` component.
- Default size 20px, `currentColor`, stroke (regular) weight everywhere. `fill` weight is allowed
  only inside a solid ember or orange fill, where a stroke icon would disappear.
- The working set is small: `shopping-bag`, `x`, `arrow-left`, `map-pin`, `phone`, `clock`,
  `instagram-logo`, `list`, `fire`, `check`.
- **No emoji, ever.** No unicode pictographs as icons either — the only unicode characters used
  decoratively are `−` / `+` in the quantity stepper, `✓` in the checkbox, `●` in the radio and
  `✕` on dismiss controls, all of which are typographic rather than illustrative.
- Icons never carry meaning alone: an icon-only control always has a `label` (which becomes both
  `aria-label` and the tooltip).

Replace Phosphor the moment a real Braci icon set exists, and put the SVGs in `assets/`.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter for use outside this project.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (webfont loading + substitutions), `colors.css`, `typography.css`,
`spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` (element resets and the two
utility classes `.braci-eyebrow` and `.braci-script`).

**`assets/`** — `logo-primary.png`, `logo-slice.png`, `doodle-{pizza,pasta,cake,drink}.png`, plus
`README.md` documenting provenance and resolution limits.

**`components/`**
| Group | Components |
|---|---|
| `core/` | `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Icon` |
| `forms/` | `Input`, `Select`, `Checkbox`, `Radio`, `Switch` |
| `feedback/` | `Dialog`, `Toast`, `Tooltip` |
| `navigation/` | `Tabs` |
| `menu/` | `Logo`, `Doodle`, `SectionHeading`, `LocationPicker`, `MenuItemCard`, `QuantityStepper`, `CartLine`, `OrderSummary` |

Each component has a `.d.ts` props contract and a `.prompt.md` usage note; each directory has a
`@dsCard` HTML showing its states. Component CSS lives in `components/core/core.css` and
`components/menu/menu.css`, both imported by `styles.css`.

**Intentional additions.** No source defined a component inventory, so the set above is the
standard primitive list sized to this business, plus five brand-specific pieces the storefront
genuinely needs: `Logo` and `Doodle` (wrappers over the supplied art, so nobody re-draws it),
`LocationPicker` (order type and branch as one field, built to the client's reference),
`MenuItemCard`, `QuantityStepper`, `CartLine` and `OrderSummary`. `Icon` exists only to wrap the
substituted Phosphor font behind one seam, so swapping icon sets later is a one-file change.

**`guidelines/`** — 18 specimen cards feeding the Design System tab, grouped Colors / Type /
Spacing / Brand. `brand-fontfiles.card.html` states the two font substitutions on the tab itself.

**`ui_kits/`**
- `website/` — storefront site: header, hero, menu, story, visit, footer, basket drawer.
  See `ui_kits/website/README.md`.
- `app/` — pickup-ordering phone app: menu, item sheet, basket, order status.
  See `ui_kits/app/README.md`.

No slide template was supplied, so no sample slides were made.
