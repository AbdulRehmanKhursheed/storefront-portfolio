/**
 * The Solar icons the design uses, inlined.
 *
 * The design handoff pulled these through Iconify's web component, which fetches
 * icon data from a CDN at runtime. That is a network round-trip standing between
 * a merchant and the page, so the paths are committed here instead — the whole
 * point of the static export is that nothing can fail mid-pitch.
 *
 * Paths are Solar's originals on a 24×24 viewBox, unmodified.
 */

const PATHS = {
  "shop-2-bold": (
    <g fill="currentColor">
      <path d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2" />
      <path
        fillRule="evenodd"
        d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75z"
        clipRule="evenodd"
      />
    </g>
  ),
  "shop-2-linear": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" d="M22 22H2m18 0V11M4 22V11" />
      <path
        strokeLinejoin="round"
        d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"
      />
      <path
        strokeLinecap="round"
        d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"
      />
    </g>
  ),
  "arrow-right-up-linear": (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 18L18 6m0 9V6H9"
    />
  ),
  "widget-4-linear": (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5zm11 9c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"
    />
  ),
  "magnifer-linear": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11.5" cy="11.5" r="9.5" />
      <path strokeLinecap="round" d="M18.5 18.5L22 22" />
    </g>
  ),
  "sort-vertical-linear": (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16 18V6m-4 4.125L16 6l4 4.125M8 6v12m-4-4.125L8 18l4-4.125"
    />
  ),
  "link-minimalistic-2-linear": (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
    />
  ),
  "check-circle-bold": (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  ),
} as const;

export type IconName = keyof typeof PATHS;

/** `size` is the design's `font-size` value — Iconify renders each glyph at 1em. */
export function Icon({
  name,
  size,
  color,
}: {
  name: IconName;
  size: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0, color }}
    >
      {PATHS[name]}
    </svg>
  );
}
