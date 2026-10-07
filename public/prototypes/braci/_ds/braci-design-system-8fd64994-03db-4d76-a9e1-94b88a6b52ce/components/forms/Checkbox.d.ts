import * as React from 'react';

/** Multi-select control: toppings, dietary filters, "text me when it's ready". */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
