import * as React from 'react';

/** Instant-effect toggle (a preference that applies immediately). For form submission use Checkbox. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export function Switch(props: SwitchProps): JSX.Element;
