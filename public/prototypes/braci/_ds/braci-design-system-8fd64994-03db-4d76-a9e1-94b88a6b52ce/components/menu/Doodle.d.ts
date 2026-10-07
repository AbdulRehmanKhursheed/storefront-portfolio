import * as React from 'react';

/**
 * One of the four supplied hand-drawn food doodles (pizza, pasta, cake, drink). Used as category
 * marks and as low-opacity page watermarks. Source art is low-resolution raster — keep under ~72px.
 */
export interface DoodleProps extends React.HTMLAttributes<HTMLImageElement> {
  name?: 'pizza' | 'pasta' | 'cake' | 'drink';
  size?: number;
  /** drops opacity to 22% for background use */
  watermark?: boolean;
  base?: string;
}
export function Doodle(props: DoodleProps): JSX.Element;
