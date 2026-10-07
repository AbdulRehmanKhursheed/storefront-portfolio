import * as React from 'react';

/** Shell-coloured surface on the cream page. Hairline border + warm shadow; optional ember top strip. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'flat' | 'card' | 'raised';
  /** 6px ember bar across the top — the brand's "card strip" */
  strip?: boolean;
  interactive?: boolean;
  /** set false when the card holds a full-bleed image or list */
  padded?: boolean;
  title?: React.ReactNode;
  text?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
