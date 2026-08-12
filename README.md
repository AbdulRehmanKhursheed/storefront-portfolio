# Keenu One · Storefront Portfolio

A single-page catalog of the branded restaurant storefronts we build on Keenu One, used to
pitch merchants. Live storefronts link to their real domain; concept storefronts link to
their static HTML handoff, served exactly as the designer authored it.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · static export,
deployed on Vercel.

## Why the concept designs are not React

The handoff HTML is served verbatim from `public/`. Next copies everything in that folder
to the build output byte-for-byte — no bundling, no parsing, no image optimisation. So a
concept design never gets converted to JSX and never accumulates conversion debt. This was
verified by hashing `out/prototypes/*/index.html` against the original handoff files after a
build; both matched exactly. The `prebuild` test guards the other half of the promise — that
every registry entry still points at a folder with an `index.html` in it.

## Commands

```bash
npm run dev     # local dev at http://localhost:3000
npm test        # validate the registry (runs automatically before build)
npm run build   # static export to out/
```

## The registry is the only file you edit

`data/storefronts.ts` holds one entry per storefront. Status is **derived** from `liveUrl`,
never stored:

| `liveUrl` | Badge | Primary action |
|---|---|---|
| set | `LIVE` | "Open live site" → the real domain |
| `null` | `CONCEPT` | "Open prototype" → the static HTML |

### Promote a concept to live

Set `liveUrl` on its existing entry and push. The badge, the button label, the
`M live now` header count and the Live/Concept tab counts all update themselves.
The first live entry in the registry is also what the featured build panel shows,
so promoting the top entry re-headlines the page.

### Add a new storefront

1. Copy the handoff into `public/prototypes/<slug>/`, following the rules below.
2. Add a full-page screenshot at `public/shots/<slug>.jpg` (~1200px wide). It is
   letterboxed inside the card's frame with `object-fit: contain`, so its aspect
   ratio does not have to match anything.
3. Append one entry to `data/storefronts.ts`, including `mockBg` and `mockGlow` —
   the storefront's own colour, which is what stops the grid reading as four
   identical white boxes.
4. `npm test` to confirm nothing is dangling, then push.

No component or route changes are needed in either case.

## Prototype URLs — read this before changing them

`prototypePath` must be `/prototypes/<slug>/` — extensionless, **with** the trailing
slash. This is not a style preference; three other forms are all broken:

| URL form | Result |
|---|---|
| `/prototypes/popbar/` | ✅ works in dev and on Vercel |
| `/prototypes/popbar/index.html` | ❌ 404 on Vercel — it strips `/index.html` |
| `/prototypes/popbar` | ❌ loads, but renders **unstyled**: the handoff's relative paths (`popbar.css`, `assets/logo.png`) resolve against `/prototypes/` instead of `/prototypes/popbar/` |
| bare folder, default config | ❌ 404 under `next dev`, which won't resolve a public/ directory to its index |

Two pieces of config make the one good form work everywhere, both in
`next.config.ts`: `trailingSlash: true` stops Vercel stripping the slash, and a
dev-only rewrite makes `next dev` resolve the folder. The registry test enforces
the format.

Verify with a **render**, not a status code — the unstyled failure above returns 200.

## Handoff folder rules

- Rename the entry file to `index.html` so the URL is a clean `/prototypes/<slug>/`.
- Folder name must equal the slug: lowercase, hyphens, no spaces. The test enforces this.
- Keep asset paths relative. They keep working because the folder structure is preserved.
- Ship only what the entry file references. Do not ship the giant fully-inlined "offline"
  bundles that some handoffs include — the multi-file version is smaller and identical in
  the browser.

Both handoff shapes work unchanged: multi-file (HTML + CSS + JS + `assets/`, as in Popbar)
and single-file with everything inlined.

Known external dependency: some prototypes load fonts or Leaflet from a CDN, so they need
internet. That is fine for a pitch.

## Currently in the catalog

| Storefront | Status | Opens |
|---|---|---|
| Siroc | Live | https://www.sirocpk.com/ |
| If You Like Cheese | Live | https://ifyoulikecheese.com/ |
| Popbar | Concept | `/prototypes/popbar/` |
| Down South | Concept | `/prototypes/down-south/` |

## Privacy

The catalog contains concept designs for merchants who have not launched, so it is shared
by link and never indexed: `robots: { index: false }` in `app/layout.tsx` plus a
`Disallow: /` in `public/robots.txt`. Keep the Vercel URL out of public marketing pages.

## Deploying

Push to a Git remote and import the repo on Vercel. No configuration is needed — Vercel
detects Next.js, and `output: "export"` means the result is pure static files with no
serverless functions, so nothing can cold-start during a pitch.

## Design

The architecture and its rationale are documented in
`docs/superpowers/specs/2026-08-07-storefront-portfolio-design.md`.

The current visual design is a port of the `Keenu Storefronts` handoff bundle — a hero,
a featured build panel, filter chips with search and sort, and the card grid. That handoff
styles every element inline, so the components state the same values inline rather than
re-deriving them as utilities; the point is that a value can be diffed against the handoff
by eye. The pieces inline styles cannot express live in `app/globals.css`: `@font-face`,
the `riseIn` / `toastIn` / `orbitA` / `orbitB` keyframes, and the `:hover` rules the handoff
wrote as `style-hover` attributes.

Two deliberate departures from the handoff:

- **Icons are committed, not fetched.** The handoff pulled Solar icons through Iconify's
  CDN at runtime. They are inlined in `components/Icon.tsx` instead — a pitch should not
  wait on a third-party request.
- **It has breakpoints.** The handoff is desktop-only with fixed 48px gutters. Media queries
  at 900px and 620px stack the featured panel and tighten the gutters; above 900px the
  rendering is exactly as drawn.

Design tokens still live in the `@theme` block of `app/globals.css` and remain available as
Tailwind utilities (`bg-brand`, `rounded-card`, …), but the page does not depend on them.
