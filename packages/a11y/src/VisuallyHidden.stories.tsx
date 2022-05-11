import type { Story } from '@ladle/react';
import { ExclamationCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Text } from '@spark-web/text';

import type { VisuallyHiddenProps } from './VisuallyHidden';
import { VisuallyHidden } from './VisuallyHidden';

const meta = {
  title: 'Accessibility / Visually Hidden',
  component: VisuallyHidden,
};
export default meta;

const VisuallyHiddenStory: Story<VisuallyHiddenProps> = args => {
  return (
    <Inline gap="xsmall" alignY="center">
      <ExclamationCircleIcon tone="critical" size="xsmall" />{' '}
      <Text weight="semibold" tone="critical" baseline={false}>
        <VisuallyHidden {...args} />
        This action is not reversible
      </Text>
    </Inline>
  );
};

export const Default = VisuallyHiddenStory.bind({});

Default.args = {
  children: 'Danger',
} as VisuallyHiddenProps;
