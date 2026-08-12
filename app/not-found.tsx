import { KeenuLogo } from "@/components/KeenuLogo";
import { isLive, primaryUrl, STOREFRONTS } from "@/data/storefronts";

export const metadata = {
  title: "Not found · Keenu One Storefronts",
};

/**
 * A dead link here almost always means a stale storefront URL, so rather than a
 * bare apology this page lists every storefront we actually have and links to it.
 */
export default function NotFound() {
  return (
    <>
      <div className="border-b-line sticky top-0 z-20 flex items-center justify-between gap-4 border-b bg-[rgba(250,249,252,.82)] px-[clamp(18px,5vw,56px)] py-3.5 backdrop-blur-[14px]">
        <a href="/" className="flex items-center gap-3">
          <KeenuLogo className="block h-[26px] w-auto" />
          <span className="bg-line h-[22px] w-px" />
          <span className="text-xs font-semibold tracking-[.06em] text-muted uppercase">
            Storefronts
          </span>
        </a>
        <span className="font-mono text-[12.5px] text-muted tabular-nums">
          404
        </span>
      </div>

      <main className="relative overflow-hidden px-[clamp(18px,5vw,56px)] pt-[clamp(48px,8vw,96px)] pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-[10%] -top-[40%] right-[40%] h-[460px] bg-[radial-gradient(circle_at_30%_30%,rgba(116,90,252,.16),transparent_62%)]"
        />

        <div className="relative max-w-[680px]">
          <p className="bg-concept-bg text-brand-deep mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs font-semibold tracking-[.08em] uppercase">
            <span className="bg-accent size-1.5 rounded-full" />
            404
          </p>
          <h1 className="mb-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.02] font-extrabold tracking-[-.03em]">
            That storefront isn&rsquo;t here.
            <br />
            <span className="text-muted font-semibold">
              These ones are.
            </span>
          </h1>
          <p className="mb-10 max-w-[52ch] text-[clamp(1rem,2vw,1.16rem)] leading-[1.55] text-ink-soft">
            The link is probably out of date — a storefront may have gone live
            under its own domain since it was shared. Pick one below, or head
            back to the full catalog.
          </p>

          <ul className="border-line divide-line divide-y overflow-hidden rounded-card border bg-card">
            {STOREFRONTS.map((s) => {
              const live = isLive(s);
              return (
                <li key={s.slug}>
                  <a
                    href={primaryUrl(s)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-line-soft focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2 shrink-0 rounded-full ${
                        live ? "bg-live" : "bg-brand"
                      }`}
                    />
                    <span className="min-w-0">
                      <span className="block font-bold">{s.name}</span>
                      <span className="block text-[13px] text-muted">
                        {s.category}
                      </span>
                    </span>
                    <span className="ml-auto inline-flex shrink-0 items-center gap-2 text-[13.5px] font-bold text-brand">
                      {live ? "Open live site" : "Open prototype"}
                      <svg
                        width="15"
                        height="15"
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
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/"
            className="bg-brand shadow-amb ease-hover mt-8 inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold text-white transition-shadow hover:shadow-el focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to all storefronts
          </a>
        </div>
      </main>
    </>
  );
}
