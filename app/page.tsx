import { Catalog } from "@/components/Catalog";
import { HeroCovers } from "@/components/HeroCovers";
import { KeenuLogo } from "@/components/KeenuLogo";
import { countLive, STOREFRONTS } from "@/data/storefronts";

export default function Home() {
  const total = STOREFRONTS.length;
  const live = countLive();

  return (
    <>
      <div className="border-b-line sticky top-0 z-20 flex items-center justify-between gap-4 border-b bg-[rgba(250,249,252,.82)] px-[clamp(18px,5vw,56px)] py-3.5 backdrop-blur-[14px]">
        <div className="flex items-center gap-3">
          <KeenuLogo className="block h-[26px] w-auto" />
          <span className="bg-line h-[22px] w-px" />
          <span className="text-xs font-semibold tracking-[.06em] text-muted uppercase">
            Storefronts
          </span>
        </div>
        <span className="font-mono text-[12.5px] text-muted tabular-nums">
          {total} storefronts · {live} live
        </span>
      </div>

      <header className="relative overflow-hidden px-[clamp(18px,5vw,56px)] pt-[clamp(40px,7vw,84px)] pb-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-[10%] -top-[40%] right-[40%] h-[460px] bg-[radial-gradient(circle_at_30%_30%,rgba(116,90,252,.16),transparent_62%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[30%] right-[-12%] left-[45%] h-[420px] bg-[radial-gradient(circle_at_70%_30%,rgba(248,120,48,.12),transparent_60%)]"
        />
        <HeroCovers />
        <div className="relative max-w-[560px] lg:max-w-[680px]">
          <p className="bg-concept-bg text-brand-deep mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[.08em] uppercase">
            <span className="bg-accent size-1.5 rounded-full" />
            Built on Keenu One
          </p>
          {/* The line break is deliberate — keep the type small enough that
              "Storefronts we build," survives on one line at every width. */}
          <h1 className="mb-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.02] font-extrabold tracking-[-.03em]">
            Storefronts we build,
            <br />
            <span className="text-muted font-semibold">ready to show.</span>
          </h1>
          <p className="max-w-[46ch] text-[clamp(1rem,2vw,1.16rem)] leading-[1.55] text-ink-soft">
            A live catalog of branded restaurant storefronts on the Keenu One
            platform — from concept designs to production sites already taking
            orders. Tap any storefront to walk a client straight through it.
          </p>
        </div>
      </header>

      <Catalog />

      <footer className="border-t-line border-t px-[clamp(18px,5vw,56px)] pt-6 pb-12 text-[12.5px] text-faint">
        Keenu One · Storefront Portfolio — a living catalog.{" "}
        <b className="font-semibold text-muted">Live</b> cards open the real
        deployed site; <b className="font-semibold text-muted">concept</b> cards
        open the full design in a new tab.
        <br />
        made by Wajiha Fatima
      </footer>
    </>
  );
}
