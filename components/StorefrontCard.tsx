import { isLive, primaryUrl, type Storefront } from "@/data/storefronts";

/** Diagonal arrow — every card opens its target in a new tab. */
function ExternalArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 ease-hover group-hover:translate-x-1"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function StatusBadge({ live }: { live: boolean }) {
  return (
    <span
      className={`absolute top-3.5 left-3.5 z-[2] inline-flex items-center gap-1.5 rounded-full bg-white/92 px-[11px] py-1.5 text-[11px] font-bold tracking-[.05em] uppercase backdrop-blur-[4px] ${
        live ? "text-live" : "text-brand-deep"
      }`}
    >
      <i
        className={`inline-block size-[7px] rounded-full ${
          live ? "bg-live animate-live-pulse" : "bg-brand"
        }`}
      />
      {live ? "Live" : "Concept"}
    </span>
  );
}

function Chip({ children, outlined }: { children: string; outlined?: boolean }) {
  return (
    <span
      // Neutral translucent fills rather than fixed greys, so chips sit correctly
      // on whichever brand tint the card is using.
      className={
        outlined
          ? "rounded-micro border border-black/10 px-2.5 py-[5px] text-xs font-semibold text-muted"
          : "rounded-micro bg-black/[.045] px-2.5 py-[5px] text-xs font-semibold text-ink-soft"
      }
    >
      {children}
    </span>
  );
}

export function StorefrontCard({ storefront }: { storefront: Storefront }) {
  const live = isLive(storefront);
  const target = primaryUrl(storefront);
  // A live storefront that also has its original handoff on file gets a second
  // link, so a pitch can show the concept and the production site side by side.
  const conceptLink = live ? storefront.prototypePath : null;

  return (
    <article
      // Each card carries its storefront's own colour, so the grid reads as four
      // distinct brands rather than four identical white boxes.
      style={{ background: storefront.tint }}
      className="group border-line rounded-card shadow-amb ease-hover relative flex w-full flex-col overflow-hidden border transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-fl focus-within:outline-[3px] focus-within:outline-offset-[3px] focus-within:outline-brand"
    >
      <div
        className="relative flex aspect-16/10 items-end overflow-hidden p-[18px] text-white"
        style={{ background: storefront.poster }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized cover */}
        <img
          src={storefront.thumbnail}
          alt={`${storefront.name} storefront hero`}
          loading="lazy"
          className="ease-enter absolute inset-0 z-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_top,rgba(12,10,20,.62),rgba(12,10,20,0)_46%)]"
        />
        <StatusBadge live={live} />
        <span className="relative z-[2] text-xs font-semibold tracking-[.05em] uppercase [text-shadow:0_1px_4px_rgba(0,0,0,.55)]">
          {storefront.vertical}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-[18px] pt-[18px] pb-4">
        <h2 className="text-[1.28rem] font-extrabold tracking-[-.01em]">
          {storefront.name}
        </h2>
        <p className="-mt-1.5 text-[13.5px] text-muted">{storefront.tagline}</p>
        <div className="mt-0.5 flex flex-wrap gap-2">
          <Chip>{storefront.vertical}</Chip>
          {storefront.theme && <Chip>{storefront.theme}</Chip>}
          {storefront.location && <Chip outlined>{storefront.location}</Chip>}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/5 px-[18px] py-3.5 text-sm font-bold">
        {/* The stretched ::after makes the whole card the primary click target
            while keeping the markup a single, valid anchor. The live/concept
            signal stays on the badge, which frees this link to carry the brand. */}
        <a
          href={target}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: storefront.accent }}
          className="inline-flex items-center gap-2 after:absolute after:inset-0 focus-visible:outline-none"
          aria-label={`${storefront.name} — opens the ${live ? "live site" : "design"} in a new tab`}
        >
          <span>{live ? "Open live site" : "Open prototype"}</span>
          <ExternalArrow />
        </a>

        {conceptLink && (
          <a
            href={conceptLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-[1] text-[12.5px] font-semibold text-muted underline decoration-line underline-offset-2 hover:text-brand"
          >
            View original concept
          </a>
        )}
      </div>
    </article>
  );
}
