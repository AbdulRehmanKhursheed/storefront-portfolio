import * as React from 'react';

/** One-of-many control: pickup vs delivery, crust size, payment method. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
}
export function Radio(props: RadioProps): JSX.Element;
