import * as React from 'react';

/** Hover/focus label for icon-only controls and allergen marks. One short line only. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: React.ReactNode;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
