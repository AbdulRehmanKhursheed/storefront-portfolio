import * as React from 'react';

/**
 * A single menu line: doodle mark, name, dotted leader, price, description, badges, optional action.
 * @startingPoint section="Menu" subtitle="Menu line, stepper, cart line and totals" viewport="700x300"
 */
export interface MenuItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode;
  description?: React.ReactNode;
  price: React.ReactNode;
  doodle?: 'pizza' | 'pasta' | 'cake' | 'drink';
  badges?: string[];
  soldOut?: boolean;
  /** row = printed-menu list with dotted leader; card = bordered surface for grids */
  layout?: 'row' | 'card';
  action?: React.ReactNode;
  base?: string;
}
export function MenuItemCard(props: MenuItemCardProps): JSX.Element;
