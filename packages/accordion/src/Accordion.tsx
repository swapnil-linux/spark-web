import type {
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Stack } from '@spark-web/stack';
import type { RefAttributes } from 'react';

export type AccordionProps =
  | (Omit<AccordionSingleProps, 'asChild'> & RefAttributes<HTMLDivElement>)
  | (Omit<AccordionMultipleProps, 'asChild'> & RefAttributes<HTMLDivElement>);

export function Accordion({ children, ...rest }: AccordionProps): JSX.Element {
  return (
    <AccordionPrimitive.Root asChild {...rest}>
      <Stack gap="medium" width="full">
        {children}
      </Stack>
    </AccordionPrimitive.Root>
  );
}
