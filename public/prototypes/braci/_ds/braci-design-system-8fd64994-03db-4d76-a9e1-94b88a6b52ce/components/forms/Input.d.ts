import * as React from 'react';

/** Labelled text field. Label is uppercase muted micro-type; the input itself is white on cream. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** presence switches the field to the error style and replaces hint */
  error?: React.ReactNode;
  multiline?: boolean;
}
export function Input(props: InputProps): JSX.Element;
