import type { ReactElement } from 'react';

import { BackgroundWrapper } from './context';

export type BackgroundProviderProps = {
  type: 'light' | 'dark';
  children: ReactElement;
};

/** Enforce background "lightness" without applying a background color. */
export const BackgroundProvider = ({
  type,
  children,
}: BackgroundProviderProps) => {
  return (
    <BackgroundWrapper
      background={type === 'dark' ? 'UNKNOWN_DARK' : 'UNKNOWN_LIGHT'}
    >
      {children}
    </BackgroundWrapper>
  );
};
