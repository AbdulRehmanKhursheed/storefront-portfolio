import { STOREFRONTS } from "@/data/storefronts";

/**
 * The four storefronts cascading behind the headline, so the page opens with the
 * actual work instead of a sentence. Decorative — the real cards are the grid below.
 */
export function HeroCovers() {
  // Front-most first, so the cascade reads top-left to bottom-right.
  const covers = STOREFRONTS.slice(0, 4);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-[clamp(16px,3vw,48px)] hidden h-[400px] w-[520px] -translate-y-1/2 xl:block"
    >
      {covers.map((s, i) => (
        <div
          key={s.slug}
          className="ease-enter absolute w-[300px] overflow-hidden rounded-def border border-white/70 shadow-el transition-transform duration-500"
          style={{
            left: `${i * 70}px`,
            top: `${i * 44}px`,
            zIndex: covers.length - i,
            background: s.poster,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized cover */}
          <img
            src={s.thumbnail}
            alt=""
            className="block aspect-16/10 w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}
