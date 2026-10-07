# Grub Coffee Co. Design System

Grub Coffee Co. is a new coffee brand positioning itself as "the people's brand" — economical, community-oriented, and aimed at a youth audience. The brand voice and visual system emphasize socialization and a casual neighborhood-cart feel rather than premium/specialty-coffee polish.

**Source material:** a single brand reference sheet, `uploads/Design System.png`, provided by the user. No codebase, Figma file, or existing product screens were attached — this design system is built from that sheet plus a from-scratch component set sized to the brand. If a Grub codebase or Figma file exists, attach it and this system should be re-synced against it.

## Font substitution — ACTION NEEDED

Headings/display use **Gotham Black** per the reference sheet. Gotham is a paid, commercially-licensed typeface — the copies offered for this project came from a font-piracy site (fontsgeek.com) and could not be used. Headings are substituted with **Archivo Black** (the closest free match to Gotham's heavy geometric weight, picked by the team). Body copy uses **Poppins**, loaded directly from Google Fonts (no substitution needed). If you obtain a legitimately-licensed copy of Gotham (Adobe Fonts, Monotype, or a purchased license), upload it and we'll swap `tokens/typography.css`'s display family to the real one.

## Content fundamentals

- **Voice:** casual, warm, first-person-plural from the brand ("the people's brand"). Copy in the reference doodles reads like a friend talking through a small hiccup — "Oh no! The coffee cart is completely empty…" and a reassuring "Looking good! Order finalized. Ready to confirm to enjoy!"
- **Tone:** upbeat, a little cheeky, never corporate. Short sentences, exclamation points used sincerely (not sparingly) to sound enthusiastic rather than urgent.
- **Perspective:** speaks to "you" the customer directly; illustrated baristas speak in first person in speech bubbles, giving the product a human, staffed-by-a-real-person feel rather than an anonymous e-commerce voice.
- **Vibe:** community coffee cart, not a boutique café — approachable, a little scrappy, proud of being affordable ("people's brand"). Youth-oriented: energetic, informal, social.
- **Emoji:** none observed in source material. Hand-drawn illustrated characters carry the personality/emotion instead of emoji — treat emoji as off-brand until told otherwise.
- **Casing:** sentence case in body copy and speech bubbles; the wordmark itself is set in all caps ("GRUB — COFFEE CO. —").

## Visual foundations

- **Color:** a small, confident palette. Deep forest green (`#265130`) is primary — used for header, footer, buttons. Cream (`#FFF8F0`) is the background/secondary color — warm off-white, never stark white, giving pages a paper-like warmth. Near-black green (`#0B2211`) is reserved for body copy and line-art doodles — not pure black, which keeps the whole page in one warm-green family. A muted sage (`#3C5D44`) is used for secondary captions, placeholders and strokes. Burnt orange (`#CF5B30`) is the single accent — used exclusively for CTAs and error states, so it stays meaningful and never decorative.
- **Type:** Gotham Black (substituted with Archivo Black) for display/headings, paired with Poppins for body copy — a heavy geometric display face over a rounder, friendlier reading face.
- **Illustration:** the defining visual motif. Hand-drawn, single-color line-art illustrations of baristas/characters (no color fills, no photography observed) carry emotion and product state — an empty-cart state shows a worried barista, a completed checkout shows a smiling one giving a thumbs-up-style gesture, a hero moment shows someone grinding coffee by hand, and the footer shows a lineup of the whole crew behind a counter of grinders. Illustrations are monoline (single stroke weight, no shading) and always rendered as green line art on the cream background (or white line art on the dark green surfaces, per the header/footer usage) — never full color, never photographic.
- **Backgrounds:** flat color fields (cream or dark green) — no gradients, no textures/patterns, no photographic backgrounds observed. Full-bleed color blocks (header/footer bands) rather than boxed sections.
- **Speech bubbles:** a recurring UI/illustration device pairing a character with a rounded speech bubble carrying a short line of copy — worth reusing for empty states, confirmations, and onboarding tips.
- **Shape language:** logo and doodles are all soft, rounded, hand-drawn — no sharp corners anywhere in the source art. Components in this system follow suit with generous corner radii (10–16px) rather than sharp rectangles, but avoid the "rounded card + colored left border" cliché.
- **Borders/shadows:** the source sheet shows no shadow or border system directly (it's a brand sheet, not a UI sheet) — this system applies a light, low-contrast card shadow (`--shadow-card`) and a soft green-tinted hairline border, consistent with the brand's soft, friendly character rather than sharp/heavy elevation.
- **Corner radii:** medium-to-large (`--radius-md` 10px, `--radius-lg` 16px) on cards/buttons; full pill radius on tags/badges/chips.
- **Motion:** not specified in source; this system uses restrained, quick ease-out transitions (150–200ms) for hover/press feedback only — no bouncy or elaborate animation, matching the brand's casual-but-competent feel.
- **Hover/press states:** buttons darken slightly on hover and darken further + no shift on press (color-based feedback, not scale/shrink), consistent with a flat, confident brand rather than a springy one.
- **Transparency/blur:** not used in source material; avoid glassmorphism/blur effects — they'd clash with the flat, hand-drawn character of the brand.

## Iconography

No icon system, icon font, or icon set was present in the source sheet — only the hand-drawn character illustrations. **No icons were substituted or invented for this reason; do not add a generic icon library without checking with the team first.** Where a UI needs a simple functional glyph (menu, close, chevron), this system uses plain Unicode/text glyphs or simple stroke-based inline SVGs at minimal complexity, matching the monoline illustration weight — never emoji. If Grub has an actual icon system, attach it and this note will be replaced.

Copied illustration assets (`assets/`):
- `logo-primary.png` — full "GRUB — COFFEE CO. —" lockup, used in footer/dark contexts.
- `logo-secondary.png` — short "GRUB" wordmark, used in header.
- `doodle-empty-cart.png`, `doodle-checkout.png`, `doodle-hero.png`, `doodle-footer.png` — hand-drawn character illustrations, extracted as transparent PNGs (green/white line art, no fill) for reuse across empty states, confirmations, and hero sections.

## Intentional additions

No component source (codebase/Figma) was provided, so the component set below is a standard, from-scratch inventory sized to a coffee-ordering product (menu, cart, checkout) rather than a set discovered from an existing library. Treat every component in `components/` as an intentional addition, sized conservatively (no components beyond what an ordering flow needs).

## Index

- `styles.css` — root stylesheet, imports all tokens.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens.
- `assets/` — logo lockups and hand-drawn illustrations.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand assets).
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Badge, Tag, Toast, Tooltip.
- `components/navigation/` — Tabs.
- `components/overlay/` — Dialog.
- `components/core/` — Card.
- `ui_kits/coffee-app/` — click-through recreation of a Grub ordering flow (home, menu, cart, checkout, confirmation), marked as a starting point.
- `SKILL.md` — portable skill file for using this system in Claude Code.
