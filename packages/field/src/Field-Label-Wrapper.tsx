import { Box } from '@spark-web/box';
import type { ReactNode } from 'react';

export function FieldLabelWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="spaceBetween"
      gap="large"
    >
      {children}
    </Box>
  );
}
