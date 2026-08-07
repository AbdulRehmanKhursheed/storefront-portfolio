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
`N storefronts · M live` header count and the Live/Concept tab counts all update
themselves. If the entry still has a `prototypePath`, the card additionally shows a
"View original concept" link.

### Add a new storefront

1. Copy the handoff into `public/prototypes/<slug>/`, following the rules below.
2. Add a cover image at `public/thumbs/<slug>.webp` (16:10 works best).
3. Append one entry to `data/storefronts.ts`.
4. `npm test` to confirm nothing is dangling, then push.

No component or route changes are needed in either case.

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

The visual design is documented in `docs/superpowers/specs/2026-08-07-storefront-portfolio-design.md`.
Design tokens live in the `@theme` block of `app/globals.css` and are consumed as Tailwind
utilities (`bg-brand`, `rounded-card`, `shadow-fl`, …).
