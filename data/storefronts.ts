/**
 * The storefront registry — the single source of truth for the catalog.
 *
 * To add a storefront: drop its handoff folder into `public/prototypes/<slug>/`
 * (entry file renamed to `index.html`), add a cover to `public/thumbs/<slug>.webp`,
 * and append one entry below.
 *
 * To promote a concept to live: set `liveUrl`. The badge, action label, header
 * count and filter tabs all follow from it — there is nothing else to update.
 */

export type Storefront = {
  /** URL-safe id. Must match the folder name under public/prototypes when a prototype exists. */
  slug: string;
  name: string;
  tagline: string;
  /** Overlay label on the cover, e.g. "Ice-cream e-commerce". */
  vertical: string;
  /** Design direction chip. Omit when there isn't one to show. */
  theme?: string;
  /** Outlined chip, e.g. "Clifton, Karachi". */
  location?: string;
  thumbnail: string;
  /**
   * Static handoff served verbatim, or null if this storefront never had one.
   * Points at the index.html explicitly: neither `next dev` nor `next start`
   * resolves a public/ directory to its index file, so a bare folder URL 404s
   * locally even though Vercel would serve it. The explicit path works everywhere.
   */
  prototypePath: string | null;
  /** Set this to promote the storefront to live. */
  liveUrl: string | null;
  /** Gradient shown behind the cover while it loads. */
  poster: string;
};

export const STOREFRONTS: Storefront[] = [
  {
    slug: "siroc",
    name: "Siroc",
    tagline: "Winds of the Middle East",
    vertical: "Middle Eastern café",
    theme: "Warm & earthy",
    location: "Clifton, Karachi",
    thumbnail: "/thumbs/siroc.webp",
    prototypePath: null,
    liveUrl: "https://www.sirocpk.com/",
    poster: "linear-gradient(140deg, #C9803F 0%, #9C5A2C 55%, #6E3D22 100%)",
  },
  {
    slug: "if-you-like-cheese",
    name: "If You Like Cheese",
    tagline: "Best cheesecake in town",
    vertical: "Cheesecake ordering",
    thumbnail: "/thumbs/if-you-like-cheese.webp",
    prototypePath: null,
    liveUrl: "https://ifyoulikecheese.com/",
    poster: "linear-gradient(140deg, #E9C79A 0%, #C98A4B 50%, #7A4A24 100%)",
  },
  {
    slug: "popbar",
    name: "Popbar",
    tagline: "Artisanal ice creams",
    vertical: "Ice-cream e-commerce",
    thumbnail: "/thumbs/popbar.webp",
    prototypePath: "/prototypes/popbar/index.html",
    liveUrl: null,
    poster: "linear-gradient(140deg, #E21B57 0%, #B3164A 50%, #88186E 100%)",
  },
  {
    slug: "down-south",
    name: "Down South",
    tagline: "Specialty coffee, delivered",
    vertical: "Coffee ordering",
    thumbnail: "/thumbs/down-south.webp",
    prototypePath: "/prototypes/down-south/index.html",
    liveUrl: null,
    poster: "linear-gradient(140deg, #8AC2FF 0%, #5387C0 50%, #376AA0 100%)",
  },
];

export type StatusFilter = "all" | "live" | "concept";

/** A storefront is live exactly when it has a production URL. Status is never stored. */
export function isLive(s: Storefront): boolean {
  return s.liveUrl !== null;
}

/** Where the card's primary action goes: the real site if live, otherwise the prototype. */
export function primaryUrl(s: Storefront): string {
  const url = s.liveUrl ?? s.prototypePath;
  if (!url) {
    throw new Error(
      `Storefront "${s.slug}" has neither liveUrl nor prototypePath, so its card has nothing to open.`,
    );
  }
  return url;
}

export function matchesFilter(s: Storefront, filter: StatusFilter): boolean {
  if (filter === "all") return true;
  return filter === "live" ? isLive(s) : !isLive(s);
}

export function countLive(storefronts: Storefront[] = STOREFRONTS): number {
  return storefronts.filter(isLive).length;
}
