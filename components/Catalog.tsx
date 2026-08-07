"use client";

import { useState } from "react";
import {
  matchesFilter,
  STOREFRONTS,
  type StatusFilter,
} from "@/data/storefronts";
import { StorefrontCard } from "./StorefrontCard";

const FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "live", label: "Live" },
  { value: "concept", label: "Concept" },
];

/** Counts per filter, derived once so the tabs and the grid can never disagree. */
const COUNTS: Record<StatusFilter, number> = {
  all: STOREFRONTS.length,
  live: STOREFRONTS.filter((s) => matchesFilter(s, "live")).length,
  concept: STOREFRONTS.filter((s) => matchesFilter(s, "concept")).length,
};

export function Catalog() {
  const [filter, setFilter] = useState<StatusFilter>("all");
  const visible = STOREFRONTS.filter((s) => matchesFilter(s, filter));

  return (
    <>
      <nav
        aria-label="Filter storefronts"
        className="border-line-soft border-b-line sticky top-[55px] z-15 mt-3 flex flex-wrap items-center gap-x-[18px] gap-y-3.5 border-t border-b bg-[rgba(250,249,252,.82)] px-[clamp(18px,5vw,56px)] py-4 backdrop-blur-[14px]"
      >
        <div
          role="group"
          aria-label="Filter by status"
          className="border-line shadow-amb inline-flex gap-1 rounded-full border bg-white p-1"
        >
          {FILTERS.map(({ value, label }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(value)}
                className={`ease-hover cursor-pointer rounded-full px-4 py-2 text-[13.5px] font-semibold transition-[color,background] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  active
                    ? "bg-brand text-white shadow-[0_2px_8px_rgba(116,90,252,.32)]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
                <span className="font-mono ml-[5px] text-[11.5px] tabular-nums opacity-70">
                  {COUNTS[value]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex gap-4 text-[12.5px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <i className="bg-live inline-block size-2 rounded-full" /> Live &
            taking orders
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="bg-brand inline-block size-2 rounded-full" /> Concept
            design
          </span>
        </div>
      </nav>

      {/* Three columns on a laptop: previews stay large enough to read in a pitch
          without any single card dominating the screen. */}
      <main className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,380px),1fr))] gap-[clamp(18px,2.2vw,26px)] px-[clamp(18px,5vw,56px)] pt-[clamp(26px,4vw,44px)] pb-20">
        {visible.map((storefront) => (
          <StorefrontCard key={storefront.slug} storefront={storefront} />
        ))}
      </main>
    </>
  );
}
