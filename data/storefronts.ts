/**
 * The storefront registry — the single source of truth for the catalog.
 *
 * To add a storefront: drop its handoff folder into `public/prototypes/<slug>/`
 * (entry file renamed to `index.html`), add a screenshot to `public/shots/<slug>.jpg`,
 * and append one entry below.
 *
 * To promote a concept to live: set `liveUrl`. The badge, action label, header
 * count, featured build and filter tabs all follow from it — there is nothing
 * else to update.
 */

export type Storefront = {
  /** URL-safe id. Must match the folder name under public/prototypes when a prototype exists. */
  slug: string;
  name: string;
  tagline: string;
  /** Row in the featured build's spec table, and the first card chip. */
  category: string;
  /** Row in the featured build's spec table. */
  location: string;
  /** Keenu One modules this storefront runs, e.g. "Ordering · Payments · KOT". */
  modules: string;
  /** Pill chips under the card's tagline. */
  tags: string[];
  /** Full-page screenshot, shown letterboxed inside the card's floating frame. */
  shot: string;
  /**
   * Static handoff served verbatim, or null if this storefront never had one.
   * Extensionless and with no trailing slash (`/prototypes/popbar`) — the only
   * form Vercel serves. A dev-only rewrite in next.config.ts makes the same URL
   * resolve under `next dev`. See that file for the full reasoning.
   */
  prototypePath: string | null;
  /** Set this to promote the storefront to live. */
  liveUrl: string | null;
  /** Wash behind the screenshot's floating frame — the storefront's own colour. */
  mockBg: string;
  /** Soft radial bloom drifting behind the frame, tinted to match `mockBg`. */
  mockGlow: string;
};

export const STOREFRONTS: Storefront[] = [
  {
    slug: "siroc",
    name: "Siroc",
    tagline: "Winds of the Middle East, plated in Clifton.",
    category: "Middle Eastern café",
    location: "Clifton, Karachi",
    modules: "Ordering · Payments · KOT",
    tags: ["Middle Eastern café", "Clifton, Karachi"],
    shot: "/shots/siroc.jpg",
    prototypePath: null,
    liveUrl: "https://www.sirocpk.com/",
    mockBg: "linear-gradient(160deg,#EDF2FB 0%,#C9D9F2 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(21,84,166,0.18),rgba(21,84,166,0) 70%)",
  },
  {
    slug: "if-you-like-cheese",
    name: "If You Like Cheese",
    tagline: "Best cheesecake in town. No nonsense.",
    category: "Dessert ordering",
    location: "Karachi",
    modules: "Ordering · Payments",
    tags: ["Cheesecake ordering"],
    shot: "/shots/if-you-like-cheese.jpg",
    prototypePath: null,
    liveUrl: "https://ifyoulikecheese.com/",
    mockBg: "linear-gradient(160deg,#F4F1E9 0%,#DCD2BE 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(110,84,38,0.16),rgba(110,84,38,0) 70%)",
  },
  {
    slug: "popbar",
    name: "Popbar",
    tagline: "Artisanal ice cream, scooped to order.",
    category: "Ice-cream e-commerce",
    location: "Karachi",
    modules: "Ordering · Payments",
    tags: ["Ice-cream e-commerce"],
    shot: "/shots/popbar.jpg",
    prototypePath: "/prototypes/popbar/",
    liveUrl: null,
    mockBg: "linear-gradient(160deg,#FDF1EA 0%,#F3CFD8 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(193,70,107,0.16),rgba(193,70,107,0) 70%)",
  },
  {
    slug: "down-south",
    name: "Down South",
    tagline: "Specialty coffee, delivered warm.",
    category: "Coffee ordering",
    location: "Lahore",
    modules: "Ordering · Pickup",
    tags: ["Coffee ordering"],
    shot: "/shots/down-south.jpg",
    prototypePath: "/prototypes/down-south/",
    liveUrl: null,
    mockBg: "linear-gradient(160deg,#EAF3FE 0%,#BFD9F7 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(34,71,95,0.16),rgba(34,71,95,0) 70%)",
  },
  {
    slug: "croissant-guy",
    name: "The Croissant Guy",
    tagline: "Fresh artisanal croissants, baked daily.",
    category: "Bakery e-commerce",
    location: "Karachi",
    modules: "Ordering · Payments · Delivery",
    tags: ["Bakery e-commerce"],
    shot: "/shots/croissant-guy.jpg",
    prototypePath: "/prototypes/croissant-guy/",
    liveUrl: null,
    mockBg: "linear-gradient(160deg,#FBF0F4 0%,#EBCEDA 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(127,24,67,0.16),rgba(127,24,67,0) 70%)",
  },
  {
    slug: "kaya",
    name: "Kaya",
    tagline: "Where every bite becomes a memory.",
    category: "Restaurant ordering",
    location: "Karachi",
    modules: "Ordering · Delivery · Table booking",
    tags: ["Restaurant ordering"],
    shot: "/shots/kaya.jpg",
    prototypePath: "/prototypes/kaya/",
    liveUrl: null,
    mockBg: "linear-gradient(160deg,#FBF3EC 0%,#E8D7B4 100%)",
    mockGlow:
      "radial-gradient(circle,rgba(227,193,119,0.20),rgba(227,193,119,0) 70%)",
  },
];

export type StatusFilter = "all" | "live" | "concept";
export type SortKey = "featured" | "live" | "az";

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

/** Free-text search across the fields a presenter would actually type. */
export function matchesQuery(s: Storefront, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return `${s.name} ${s.tagline} ${s.category} ${s.location}`
    .toLowerCase()
    .includes(q);
}

export function countLive(storefronts: Storefront[] = STOREFRONTS): number {
  return storefronts.filter(isLive).length;
}

/**
 * The storefront that headlines the page. The first live one, so the panel always
 * opens a site a prospect can actually order from; falls back to the first entry
 * if nothing is live yet.
 */
export function featuredStorefront(
  storefronts: Storefront[] = STOREFRONTS,
): Storefront {
  return storefronts.find(isLive) ?? storefronts[0];
}
