import * as React from 'react';

/**
 * The Braci mark. `wordmark` (the brush "BRACI" lettering lifted from the primary logo) is the
 * header lockup; `primary` (flame + slice + wordmark) is the footer lockup; `slice` is the pizza
 * slice alone, for small square placements. All three are the supplied raster art — never redraw.
 * @startingPoint section="Brand" subtitle="Header and footer logo lockups" viewport="700x160"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  mark?: 'primary' | 'slice' | 'wordmark';
  /** wordmark only: char (default) or shell #FFF8F0 for use on the orange identity band */
  tone?: 'char' | 'shell';
  /** rendered mark height in px */
  height?: number;
  /** adds the brush-script word "Braci" beside the slice mark (header use) */
  withWordmark?: boolean;
  /** path prefix to the design-system root, e.g. ".." from a nested page */
  base?: string;
  href?: string;
}
export function Logo(props: LogoProps): JSX.Element;
