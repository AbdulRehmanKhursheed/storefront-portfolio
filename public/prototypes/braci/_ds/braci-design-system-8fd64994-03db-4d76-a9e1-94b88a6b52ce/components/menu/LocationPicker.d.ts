import * as React from 'react';

/**
 * Combined order-type and branch selector. One 36px line: ember pin, the order type as an ember
 * uppercase micro-label, a char hairline divider, then the branch in semibold char with a caret —
 * the same eyebrow-plus-value rhythm as SectionHeading and the menu rows. Reads as a shell plate on
 * the orange identity band; `tone="card"` adds a hairline for use on cream.
 */
export interface LocationPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** current order type, e.g. "Pick Up" or "Delivery" */
  mode?: string;
  modes?: string[];
  place?: string;
  places?: string[];
  onModeChange?: (mode: string) => void;
  onPlaceChange?: (place: string) => void;
  /** onOrange (default) = borderless shell plate; card = hairline outline, for cream backgrounds */
  tone?: 'onOrange' | 'card';
  /** full-width 44px variant for the top of checkout */
  block?: boolean;
}
export function LocationPicker(props: LocationPickerProps): JSX.Element;
