import * as React from 'react';

/**
 * Thin wrapper over the Phosphor Icons webfont (CDN). Braci supplied no icon set of its own, so
 * Phosphor "regular" is the documented substitution — see readme.md § Iconography.
 */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** Phosphor glyph name without the ph- prefix, e.g. "shopping-bag", "fire", "map-pin" */
  name: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  color?: string;
  /** phosphor (default) or material — Google Material Symbols Outlined, used for the cart bag */
  set?: 'phosphor' | 'material';
}
export function Icon(props: IconProps): JSX.Element;
