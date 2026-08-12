"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  featuredStorefront,
  isLive,
  matchesFilter,
  matchesQuery,
  primaryUrl,
  STOREFRONTS,
  type SortKey,
  type StatusFilter,
  type Storefront,
} from "@/data/storefronts";
import { FeaturedBuild } from "./FeaturedBuild";
import { Icon } from "./Icon";
import { StorefrontCard } from "./StorefrontCard";

const EASE_HOVER = "cubic-bezier(0.25,0.46,0.45,0.94)";

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

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured",
  live: "Live first",
  az: "A–Z",
};
const SORT_ORDER: SortKey[] = ["featured", "live", "az"];

function sortStorefronts(list: Storefront[], sort: SortKey): Storefront[] {
  if (sort === "az") {
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "live") {
    return [...list].sort(
      (a, b) => (isLive(a) ? -1 : 1) - (isLive(b) ? -1 : 1),
    );
  }
  return list;
}

/**
 * The design drifts the mock frames and their glows against the scroll. Each
 * `[data-par]` element carries its own rate; the sign decides which way it lags.
 */
function useParallax(deps: unknown[]) {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const apply = () => {
      frame.current = null;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-par]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const rate = parseFloat(el.dataset.par ?? "0") || 0;
        const offset = (rect.top + rect.height / 2 - vh / 2) * rate;
        el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
      });
    };
    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
    // Re-measure whenever the rendered set changes — frames move under the cursor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function Catalog() {
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const copy = useCallback((s: Storefront) => {
    const url = primaryUrl(s);
    const href = url.startsWith("http")
      ? url
      : new URL(url, window.location.origin).href;
    navigator.clipboard?.writeText(href).catch(() => {});
    setToast(`${s.name} link copied`);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  const matched = sortStorefronts(
    STOREFRONTS.filter(
      (s) => matchesFilter(s, filter) && matchesQuery(s, query),
    ),
    sort,
  );

  const featured = featuredStorefront();
  // The featured panel stands down once the presenter narrows the view — a search
  // or the Concept tab means they are looking for something specific.
  const showFeatured = filter !== "concept" && query.trim() === "";
  const cards = showFeatured
    ? matched.filter((s) => s !== featured)
    : matched;

  useParallax([cards.map((s) => s.slug).join(), showFeatured]);

  return (
    <>
      <section
        className="page-pad"
        style={{
          position: "sticky",
          top: 51,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          padding: "16px 48px",
          background: "rgba(250,249,252,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E8E6E4",
        }}
      >
        {FILTERS.map(({ value, label }) => {
          const on = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(value)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 9999,
                border: `1px solid ${on ? "#745AFC" : "#E8E6E4"}`,
                background: on ? "#745AFC" : "#FFFFFF",
                color: on ? "#FFFFFF" : "#575065",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: `all 180ms ${EASE_HOVER}`,
              }}
            >
              {label}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "2px 7px",
                  borderRadius: 9999,
                  background: on ? "rgba(255,255,255,0.22)" : "#F4F2F7",
                  color: on ? "#FFFFFF" : "#6E6680",
                }}
              >
                {COUNTS[value]}
              </span>
            </button>
          );
        })}

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              background: "#FFFFFF",
              border: "1px solid #E8E6E4",
              borderRadius: 9999,
              boxShadow: "0 1px 3px rgba(116,90,252,0.04)",
            }}
          >
            <Icon name="magnifer-linear" size={16} color="#8C849D" />
            <span
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
              }}
            >
              Search storefronts
            </span>
            <input
              type="text"
              placeholder="Search storefronts"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 13,
                fontWeight: 500,
                color: "#1A1A1F",
                width: 150,
              }}
            />
          </label>
          <button
            type="button"
            onClick={() =>
              setSort(
                SORT_ORDER[(SORT_ORDER.indexOf(sort) + 1) % SORT_ORDER.length],
              )
            }
            className="btn-outline"
            aria-label={`Sort: ${SORT_LABELS[sort]}. Click to change.`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "8px 14px",
              background: "#FFFFFF",
              border: "1px solid #E8E6E4",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 600,
              color: "#575065",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(116,90,252,0.04)",
              transition: `all 180ms ${EASE_HOVER}`,
            }}
          >
            <Icon name="sort-vertical-linear" size={15} />
            {SORT_LABELS[sort]}
          </button>
        </div>
      </section>

      <main className="page-pad" style={{ padding: "36px 48px 96px" }}>
        {showFeatured && (
          <FeaturedBuild storefront={featured} onCopy={copy} />
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#8E8985",
            }}
          >
            {matched.length} {matched.length === 1 ? "storefront" : "storefronts"}
          </span>
          <span style={{ flex: 1, height: 1, background: "#E8E6E4" }} />
        </div>

        <div
          id="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
            gap: 24,
          }}
        >
          {cards.map((storefront) => (
            <StorefrontCard
              key={storefront.slug}
              storefront={storefront}
              onCopy={copy}
            />
          ))}
        </div>

        {matched.length === 0 && (
          <div
            style={{
              padding: "72px 24px",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px dashed #D4CFE0",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#C4B5FD",
              }}
            >
              <Icon name="shop-2-linear" size={34} />
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 17,
                fontWeight: 600,
                color: "#413B50",
              }}
            >
              Nothing matches that yet
            </div>
            <div style={{ marginTop: 6, fontSize: 14, color: "#8E8985" }}>
              Try a different name, or clear the filters.
            </div>
          </div>
        )}
      </main>

      <div aria-live="polite" role="status">
        {toast && (
          <div
            style={{
              position: "fixed",
              left: "50%",
              bottom: 32,
              zIndex: 60,
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "12px 18px",
              background: "rgba(30,27,46,0.94)",
              backdropFilter: "blur(12px)",
              color: "#F4F3F2",
              borderRadius: 9999,
              fontSize: 13.5,
              fontWeight: 600,
              boxShadow: "0 12px 40px rgba(116,90,252,0.14)",
              animation: "toastIn 280ms cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <Icon name="check-circle-bold" size={17} color="#4ADE80" />
            {toast}
          </div>
        )}
      </div>
    </>
  );
}
