import * as React from 'react';

/** Subtotal / service / total block. The total row switches to Gaegu at h4 size. */
export interface OrderSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: Array<{ label: React.ReactNode; value: React.ReactNode }>;
  total?: React.ReactNode;
  totalLabel?: React.ReactNode;
}
export function OrderSummary(props: OrderSummaryProps): JSX.Element;
