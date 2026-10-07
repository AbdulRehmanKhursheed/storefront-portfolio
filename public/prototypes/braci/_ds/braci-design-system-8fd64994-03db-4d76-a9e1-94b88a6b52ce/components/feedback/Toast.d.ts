import * as React from 'react';

/** Transient confirmation, char-coloured so it reads on both cream and orange. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'success' | 'error';
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
