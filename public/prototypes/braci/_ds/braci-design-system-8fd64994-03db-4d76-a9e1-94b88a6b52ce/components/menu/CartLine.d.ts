import * as React from 'react';

/** One row of the basket: quantity-prefixed name, chosen options, line price. */
export interface CartLineProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode;
  options?: React.ReactNode;
  price: React.ReactNode;
  qty?: number;
  onQty?: (value: number) => void;
  /** slot for a QuantityStepper or remove button */
  trailing?: React.ReactNode;
}
export function CartLine(props: CartLineProps): JSX.Element;
