import * as React from 'react';

/** Native select with the Braci chevron. Use for pickup times, table size, sauce base. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
}
export function Select(props: SelectProps): JSX.Element;
