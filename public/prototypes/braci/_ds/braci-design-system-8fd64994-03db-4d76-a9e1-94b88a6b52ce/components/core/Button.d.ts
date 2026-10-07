import * as React from 'react';

/**
 * Braci primary action control. Pill-shaped, ember fill, sticker shadow reserved for the single
 * most important action on a view.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, badges and tags" viewport="700x220"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = ember fill; secondary = hairline outline; ghost = text only; onOrange = shell fill for orange headers */
  variant?: 'primary' | 'secondary' | 'ghost' | 'onOrange';
  size?: 'sm' | 'md' | 'lg';
  /** hard 3px char-coloured offset shadow — one per view, max */
  sticker?: boolean;
  block?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
