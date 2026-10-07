import * as React from 'react';

/** Square-tap, pill-shaped icon-only control: cart, close, back, quantity, share. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  /** required — becomes aria-label and title */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'plain' | 'outline' | 'solid' | 'onOrange';
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
