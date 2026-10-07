import * as React from 'react';

/** Pill stepper for item quantity in the cart and on the item sheet. */
export interface QuantityStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  /** solid = ember fill, for use on cream cards where it is the main control */
  tone?: 'outline' | 'solid';
}
export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
