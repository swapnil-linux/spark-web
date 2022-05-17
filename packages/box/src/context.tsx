import { useTheme } from '@spark-web/theme';
import type { ReactElement } from 'react';
import { createContext, useContext } from 'react';

import type { BoxStyleProps } from './useBoxStyles';

export type BackgroundVariant =
  | NonNullable<BoxStyleProps['background']>
  | 'UNKNOWN_DARK'
  | 'UNKNOWN_LIGHT';

// prepare context

const backgroundContext = createContext<BackgroundVariant>('body');
export const InternalBackgroundProvider = backgroundContext.Provider;
export const useBackground = () => useContext(backgroundContext);

// conditional provider

export const BackgroundWrapper = ({
  background,
  children,
}: {
  background: BackgroundVariant | undefined;
  children: ReactElement;
}) => {
  return background ? (
    <InternalBackgroundProvider value={background}>
      {children}
    </InternalBackgroundProvider>
  ) : (
    children
  );
};

// a11y contrast utility

export const useBackgroundLightness = (
  backgroundOverride?: ReturnType<typeof useBackground>
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useTheme();
  const defaultLightness = backgroundLightness.body;

  // used by the consumer-facing/external BackgroundProvider
  if (background === 'UNKNOWN_DARK') {
    return 'dark';
  }
  if (background === 'UNKNOWN_LIGHT') {
    return 'light';
  }

  return background
    ? backgroundLightness[background] || defaultLightness
    : defaultLightness;
};
