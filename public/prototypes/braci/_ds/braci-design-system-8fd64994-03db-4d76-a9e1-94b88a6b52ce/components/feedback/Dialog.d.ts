import * as React from 'react';

/** Modal sheet for item customisation and confirmations. Scrim is char at 62%; positions absolutely inside the nearest positioned ancestor. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}
export function Dialog(props: DialogProps): JSX.Element | null;
