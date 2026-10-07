import * as React from 'react';

/** Section switcher. underline = page-level (Menu / Story / Visit); pill = in-page filters. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pill';
}
export function Tabs(props: TabsProps): JSX.Element;
