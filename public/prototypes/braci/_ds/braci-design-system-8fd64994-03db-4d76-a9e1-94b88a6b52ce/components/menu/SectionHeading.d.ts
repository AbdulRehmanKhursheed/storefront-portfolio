import * as React from 'react';

/** Menu / page section header: ember uppercase eyebrow, Gaegu title, optional muted aside on the right. */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  aside?: React.ReactNode;
  align?: 'split' | 'center';
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
