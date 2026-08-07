# Down South — Design System

> *no pressure, no hurry — the kind of coffee that makes time feel softer.*

Down South is a coffee place built on a lively beach vibe — Australian-surfer
moods, high-energy summer, icy social drinks, sand underfoot, and delicious
coffee. The brand sits "between the city's rush and the beach's calm" — a little
pause button in a place that never really slows down. This design system turns
that feeling into reusable colors, type, assets, components, and screens.

---

## Sources

Everything here was dissected from the supplied brand book (no codebase or Figma
was provided):

- `uploads/DownSouth BrandBook-1-12.pdf` — logo, usage, colors, intro
- `uploads/DownSouth BrandBook-13-23-1-5.pdf` — typography, type specimen, social
- `uploads/DownSouth BrandBook-13-23-6-11.pdf` — cups, bags, tees / packaging

Extracted raster assets (logo art, lifestyle photos, merch mockups) live in
`assets/`. The logo in the brand book is vector and could not be rendered in this
environment, so the wordmark was lifted at high resolution from the cold-cup
packaging mockup and cleaned/recolored into the variants in `assets/logos/`. The
brand's display font, **Culonite**, was supplied directly and ships in
`assets/fonts/`.

---

## Brand at a glance

| | |
|---|---|
| **Name** | Down South / Down South Cafe (`@downsouthcoffee`) |
| **Category** | Specialty coffee, beach-side, social |
| **Mood** | Laid-back + high-energy; effortless but confident |
| **Origin story** | Inspired by Karachi — balance between city chaos and beach calm |
| **Tagline** | *no pressure, no hurry, the kind of coffee that makes time feel softer.* |
| **Logo** | Stylized palm tree over a chunky rounded "DOWN SOUTH" wordmark |

### Logo system
- **Stacked** — palm over wordmark. Vertical surfaces: cups, tumblers, signage. (`assets/logos/downsouth-stacked-*.png`)
- **Submark** — palm only. Profile pictures, favicons, stamps, sleeves. (`assets/logos/downsouth-submark-*.png`)
- **Colorways** — Mellow Yellow on white/photo, white on dark/iced-coffee, black on light merch.
- **Misuse (never):** distort/stretch, change the wordmark typeface, recolor outside the palette, or add an outline/stroke.

---

## CONTENT FUNDAMENTALS — how Down South writes

**Voice:** a calm friend who's already at the beach. Warm, unhurried, a little
poetic, never corporate. The brand slows the reader down rather than hyping them up.

- **Casing.** Headlines and body run **lowercase** for an easy, handwritten ease
  (*"no pressure, no hurry"*, *"whats inside?"*, *"coffe?"*). The **logo wordmark
  is the exception** — always all-caps "DOWN SOUTH". Use sentence/î lowercase for
  most marketing copy; reserve ALL-CAPS for the logo, tiny labels, and category
  titles on menus/signage.
- **Person.** Speaks softly in third person about the coffee and the feeling
  ("every cup embodies quality"), and warmly to **you** when inviting
  ("whether you're an everyday coffee lover…"). Mix "we" (the cafe) + "you" (guest).
- **Tone.** Sensory and time-bending — *"makes time feel softer"*, *"unwinding is
  a natural part of the brand experience"*. Lead with feeling, then quality
  ("sourced from the finest beans, carefully roasted to perfection").
- **Length.** Short hooks for headlines (2–6 words). One flowing sentence for
  subtext. Never walls of text.
- **Punctuation.** Comfortable with commas and lower-key full stops; gentle, not
  exclamatory. Avoid exclamation marks and ALL-CAPS shouting.
- **Emoji.** Not part of the brand voice — avoid in product/marketing copy. (The
  brand book's only emoji appear inside a *competitor* reference screenshot.)

**Example voice:**
> *no pressure, no hurry — the kind of coffee that makes time feel softer.*
> sourced from the finest beans, carefully roasted to perfection, and crafted
> with passion. your daily ritual, unwound.

**Don't:** "GRAB OUR INSANE NEW ICED LATTE!!! 🔥🔥" — too loud, too caps, emoji-spammy.
**Do:** "iced, slow, and a little sweet. meet the summer latte."

---

## VISUAL FOUNDATIONS

**Color.** Four brand colors, balanced warm + cool:
- **Mellow Yellow `#fadc55`** — the hero. Sunshine, energy, optimism. Big fills,
  buttons, the logo.
- **Ocean Breeze `#8ac2ff`** — soft sky blue. Freshness, the cool-down. Accents,
  washes, secondary surfaces.
- **Warm Sand `#d9b49d`** — driftwood / latte-foam neutral. Grounds the palette;
  panels, dividers, coffee tones.
- **Midnight Palm `#000000`** — ink. Headlines, bold outlines, dark sections,
  the iced-coffee black.

Yellow + blue is the signature contrast (warm sun against cool water). Sand and
cream (`#fbf7f0`) keep large areas soft and paper-like rather than stark white.
Coffee accents (espresso/latte/mocha) appear in food/drink imagery and dark
blocks. Imagery skews **warm, bright, sun-bleached, slightly filmic** (35mm beach
photography) — never cold, never heavily desaturated.

**Type.** Display **Culonite** (the brand's real *CF Culo / CF Sulo* face, supplied
as font files) — a tall, breezy, slightly art-deco rounded geometric sans with
distinctive caps. Used in short bursts for hooks, headlines, and category titles.
The chunky bubbly **logo wordmark** is locked artwork (`assets/logos/`), not set in
Culonite — never retype it. Body **Helvetica Neue** (Arial fallback) — clean,
neutral, legible for everything longer. Big confident display sizes; relaxed
`1.55` body line-height.

**Spacing & layout.** 4px grid; generous, airy section padding (`clamp(3rem,7vw,7rem)`).
Content breathes — lots of negative space, like open sand. Centered or
left-aligned lockups; nothing cramped.

**Backgrounds.** Three families: (1) **cream/sand solids** with a faint **sand-grain
texture** overlay (`assets/textures/sand-grain.png`) for tactile warmth; (2)
**full-bleed beach photography** (palms, surf, coastline) with the logo placed in
clear high-contrast space; (3) **ink/dark blocks** evoking iced-coffee, with white
logo + cream text. A sunny radial **`--glow-sun`** wash warms hero tops. The
**yellow/white diagonal straw stripe** (`--pattern-straw`) is a playful accent
(dividers, ribbons, straws) — use sparingly.

**Corners & cards.** Rounded and friendly, echoing the bubbly logo — radii from
`16px` cards up to full `pill` buttons. Cards: white/cream surface, generous
`16–24px` radius, **soft warm shadow** (`--shadow-md`), optional bold black border.
A playful **hard-offset shadow** (`--shadow-pop`, `4px 4px 0 ink`) is the
signature for stickers, tags, and key CTAs.

**Borders.** Two registers: hairline `rgba(0,0,0,.10)` for quiet structure, and a
confident **2.5px black outline** (`--border-bold`) as a brand motif (mirrors the
black tee print). Never outline the logo itself.

**Shadows.** Soft, warm, low-contrast (`rgba(58,36,23,…)`) — sun-bleached, never
hard grey. The hard-offset pop shadow is the one intentional exception.

**Motion.** Breezy and slightly springy. Standard `220ms` with `--ease-out`;
playful elements use `--ease-spring` for a gentle bounce (buttons, chips, sticker
pops). Fades + small rises for entrances. Nothing frantic — motion should feel
unhurried.

**Hover / press.** Hover: slight lift (`translateY(-2px)`) + deepen shadow, or a
move toward `--ds-yellow-600` on yellow fills. Press: shrink (`scale(.97)`) and/or
flatten the pop-shadow — tactile, like pressing a button on a cup lid. Links/ghost
elements darken or pick up a yellow wash on hover.

**Transparency & blur.** Used lightly — frosted overlays on photos
(`rgba(0,0,0,.25)` + `backdrop-filter: blur`) so white logo/text stays legible.
Protection: prefer a soft bottom-up gradient scrim over photos rather than a hard
capsule, unless contrast demands a solid chip.

---

## ICONOGRAPHY

The brand book ships **no icon set** — its only "icon" is the **palm-tree
submark**, which doubles as the brand's hero glyph (favicon, profile picture,
stamps, single-color marks). Lean on that palm and the logo before reaching for
generic UI icons.

For functional UI icons (cart, search, menu, plus/minus, arrows) the brand book
defines nothing, so we **substitute [Lucide](https://lucide.dev)** — a rounded,
medium-weight (2px) open-stroke set that matches Down South's friendly, rounded
geometry. **SUBSTITUTION — flagged.** Use Lucide at `1.75–2px` stroke, rounded
caps/joins, `--text-primary` or `--text-on-dark`. Load from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="shopping-bag"></i>
<script>lucide.createIcons();</script>
```

- **No emoji** in product or marketing UI.
- **No unicode-glyph icons.** Use Lucide SVGs or the palm submark.
- The palm submark (`assets/logos/downsouth-submark-*.png`) is the preferred
  decorative mark over any generic icon.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`**
- `logos/` — stacked + submark, in yellow / black / white (transparent PNG)
- `photos/` — beach surf swimmers, palms against blue sky, coastline
- `merch/` — iced-coffee cup (white logo), canvas tote
- `textures/` — `sand-grain.png` surface overlay

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type,
spacing, logo, texture & pattern.

**`components/`** — reusable React primitives + spec cards:
- `core/` — Button, Badge, Tag, Card, Input, IconButton, ProductCard, ProductShot (pale-yellow product image that flips to the straw-stripe on hover)

**`ui_kits/`** — full-screen recreations:
- `ordering-app/` — Down South mobile ordering flow (browse → drink → cart)
- `marketing-site/` — beach-vibe marketing homepage

**`slides/`** — sample 16:9 deck templates (title, statement, menu, photo, quote).
