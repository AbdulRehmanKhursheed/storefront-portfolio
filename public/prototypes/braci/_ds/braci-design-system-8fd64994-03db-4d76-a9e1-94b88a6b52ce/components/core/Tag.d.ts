import * as React from 'react';

/** Filter / choice pill. Selected state uses the ember action fill, same as buttons. */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  selected?: boolean;
  /** false renders a non-clickable span (read-only ingredient list) */
  interactive?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
