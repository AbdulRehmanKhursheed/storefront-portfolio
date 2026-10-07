import * as React from 'react';

/** Small uppercase status/marketing flag: "Brick oven", "New", "Sold out", "Order ready". */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'identity' | 'action' | 'soft' | 'outline' | 'success' | 'error';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
