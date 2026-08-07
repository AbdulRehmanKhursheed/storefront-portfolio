# Keenu One Storefront Portfolio — Design

**Date:** 2026-08-07
**Status:** Approved design, ready for implementation planning

## Purpose

A single web page that sales uses to pitch merchants. It lists the branded restaurant
storefronts built on Keenu One and lets the presenter open any one of them full screen in
front of a prospect.

Two kinds of storefront appear in the same catalog:

- **Live** — a real production site already taking orders (Siroc, If You Like Cheese).
  The card links out to the real domain.
- **Concept** — a design that exists only as a static HTML handoff (Popbar, Down South,
  Cantina, and others). The card links to that HTML, served untouched.

The mix changes over time. Concepts get promoted to live as merchants launch, and new
concepts arrive as designers finish them. Promoting a storefront must be a one-line edit.

## Goals

1. Serve the static HTML handoffs **exactly as authored** — no JSX conversion, no build
   step touching them, no design debt.
2. Make promoting concept → live a single-line change.
3. Make adding a new theme a drop-in operation with no code changes.
4. Never fail in front of a merchant: instant load, no server, no stale link.

## Non-goals

- Converting any handoff HTML to React. This is the problem being avoided, not deferred.
- CMS, admin UI, or auth. The registry is a TypeScript file edited by developers.
- Analytics, per-merchant tracking, lead capture.
- Offline support. A pitch always has internet.

## Key decisions

### Framework: Next.js (App Router), static export, deployed on Vercel

Next's `public/` directory serves files byte-for-byte. Nothing in the build pipeline reads,
parses, bundles, or optimises them. This is a documented guarantee of the framework, not a
workaround, which is what makes it the right answer to the "design debt on conversion"
problem: the HTML is never converted.

Static export (`output: 'export'`) means no server and no serverless functions — nothing
that can cold-start or error mid-pitch. Deployment is a git push to Vercel on the free tier.

Plain Vite + React would also work, but requires hand-rolled routing and drops the team's
existing Next familiarity for no gain.

### Status is derived, never stored

A storefront entry carries an optional `liveUrl`. Everything else follows from whether it
is set:

| `liveUrl` | Badge | Primary action | Counted in |
|---|---|---|---|
| set | `LIVE` | "Open live site" → the real domain | Live filter |
| `null` | `CONCEPT` | "Open prototype" → the static HTML | Concept filter |

Promoting a storefront is therefore pasting one URL and pushing. The badge, the button
label, the header count ("4 storefronts · 1 live"), and the filter tabs all update
themselves. There is no second place to remember to edit — which is the failure mode a
stored `status` field would invite.

### Prototypes open in a new tab, as raw HTML

Cards link directly to `/prototypes/<slug>/`. The prospect sees the design full screen with
no portfolio chrome around it, identical to a real site. Live cards behave the same way, so
the presenter's flow is consistent regardless of which kind of card they tap.

Rejected: embedding prototypes in an iframe viewer inside the portfolio. It adds a layer
between the merchant and the design for no pitch benefit.

### Thumbnails are static screenshots

A script captures each prototype and live site once; the images are committed under
`public/thumbs/`. They load instantly and cannot break.

Rejected: scaled-down live iframes. Previews would never be stale, but several full sites
would load at once, and a live site is free to refuse being framed — which would show a
blank card in front of a merchant.

Cost accepted: re-run the script when a design changes.

### A live storefront keeps its concept link

Once live, the card shows "Open live site" as the primary action and a smaller "View
original concept" beside it. This lets the presenter show design-to-production range in one
gesture.

The secondary link is conditional on `prototypePath` being set. Siroc and If You Like Cheese
went live without a static handoff on record, so their cards show only the primary action —
this is expected, not a gap to fill.

### Privacy: unlisted URL plus noindex

The catalog contains concept designs for merchants who have not launched, so it must not be
discoverable. A `noindex` meta tag plus a `robots.txt` disallow keeps it out of search
engines. The Vercel URL is shared deliberately with prospects.

No passcode gate: on a static export it would be client-side only, so it would imply
security it cannot provide. Vercel's real password protection is a paid feature.

## Architecture

```
storefront-portfolio/
  app/
    layout.tsx              root layout, fonts, noindex metadata
    page.tsx                the catalog — the only page
  components/
    StorefrontCard.tsx      one card: thumb, badge, name, tagline, tags, actions
    FilterTabs.tsx          All / Live / Concept, client-side filter state
    CatalogHeader.tsx       logo, "STOREFRONTS", "N storefronts · M live"
    Hero.tsx                headline and intro copy
  data/
    storefronts.ts          THE REGISTRY — single source of truth
  scripts/
    capture-thumbs.ts       Playwright screenshot generator
  public/
    prototypes/
      popbar/               multi-file handoff, verbatim
        index.html
        popbar.css  order.css  popbar.js  order.js  image-slot.js
        assets/…
      cantina/
        index.html          single self-contained file, renamed
      down-south/…
    thumbs/
      popbar.jpg  siroc.jpg  down-south.jpg  …
    robots.txt
```

Only two units carry logic worth naming:

- **`data/storefronts.ts`** — exports a typed array. Knows nothing about rendering.
- **`app/page.tsx`** — reads the registry, derives counts and status, renders the grid.
  Filter state lives in `FilterTabs`.

Everything else is presentational. There is no data fetching, no server code, no shared
mutable state.

## Data model

```ts
export type Storefront = {
  slug: string          // url-safe id; must match the public/prototypes folder name
  name: string          // "Popbar"
  tagline: string       // "Artisanal ice creams"
  category: string      // "Ice-cream e-commerce" — the overlay label on the thumbnail
  tags: string[]        // ["Middle Eastern café", "Warm & earthy", "Clifton, Karachi"]
  thumbnail: string     // "/thumbs/popbar.jpg"
  prototypePath: string | null  // "/prototypes/popbar/" — null if never had a handoff
  liveUrl: string | null        // set this to promote to live
}
```

Known entries at time of writing:

| slug | name | prototype | liveUrl |
|---|---|---|---|
| `siroc` | Siroc | (none on disk) | `https://sirocpk.com` |
| `no-nonsense-cheesecake` | No Nonsense Cheesecake | handoff pending | `https://ifyoulikecheese.com` |
| `popbar` | Popbar | `/prototypes/popbar/` | `null` |
| `down-south` | Down South | handoff pending | `null` |
| `cantina` | Cantina | `/prototypes/cantina/` | `null` |

An entry with `liveUrl: null` **and** `prototypePath: null` is invalid — the card would have
nothing to open. The registry validation test rejects it.

## Prototype hosting rules

Every handoff folder must satisfy these before it goes into `public/prototypes/`:

1. Entry file renamed to `index.html`, so the URL is `/prototypes/popbar/` rather than
   `/prototypes/popbar/Popbar%20Website.html`.
2. Folder name is the lowercase slug, no spaces.
3. Asset references stay relative (`assets/logo.png`, `popbar.css`). They already are, and
   they keep working because the folder structure is preserved verbatim.
4. Duplicate bundled variants are not shipped — e.g. Popbar's 21MB
   `Popbar Website (Offline).html` is excluded in favour of the 6MB multi-file version.

Two handoff shapes exist and both work unchanged:

- **Multi-file** (Popbar): HTML + CSS + JS + `assets/`, relative paths, hash routing
  (`#category/popbar`). Hash routing is entirely client-side, so static hosting is fine.
- **Single-file** (Cantina): one self-contained HTML with everything inlined, zero external
  references.

Known external dependency: Popbar loads Leaflet and Google Fonts from CDNs. Acceptable —
online-only is fine for a pitch — but it is why offline support is a non-goal.

## Workflows

**Add a new concept theme**

1. Copy the handoff folder to `public/prototypes/<slug>/`, applying the hosting rules.
2. Run `scripts/capture-thumbs.ts` to generate `public/thumbs/<slug>.jpg`.
3. Add one entry to `data/storefronts.ts` with `liveUrl: null`.
4. Push.

**Promote a concept to live**

1. Set `liveUrl` on the existing entry.
2. Re-run the thumbnail script if the production site differs visually from the concept.
3. Push.

No component or route changes in either case.

## Failure modes and how they are handled

| Risk | Handling |
|---|---|
| Registry points at a prototype folder that isn't there → dead link mid-pitch | Validation test walks the registry and asserts every `prototypePath` and `thumbnail` resolves on disk. Fails the build, not the pitch. |
| Missing thumbnail renders a broken image | Same validation test. |
| A live domain goes down during a pitch | Out of our control, but the concept link stays on the card as a fallback the presenter can use. |
| Handoff folder copied with spaces in the name | Caught by the validation test's slug/folder match assertion. |
| Catalog surfaces in Google | `noindex` metadata plus `robots.txt` disallow. |

## Testing

The app has almost no logic, so testing concentrates where mistakes actually hurt:

1. **Registry validation** (the important one) — for each entry: slug is url-safe, at least
   one of `liveUrl`/`prototypePath` is set, `prototypePath` resolves to a directory
   containing `index.html`, `thumbnail` resolves to a file, `liveUrl` parses as a URL.
2. **Derived status** — an entry with `liveUrl` renders the LIVE badge and "Open live site";
   without it, CONCEPT and "Open prototype". Counts and filters follow.
3. **Build check** — `next build` succeeds and `out/prototypes/popbar/index.html` is
   byte-identical to the source, proving nothing in the pipeline rewrote it.

## Open items

Three handoff folders are not on this machine: Down South, No Nonsense Cheesecake, and the
Croissant theme. Their registry entries can be added the moment the folders arrive, with no
code changes. Siroc and If You Like Cheese need no handoff since both are live.
