import type { Story } from '@ladle/react';

import { Placeholder } from '../../../docs/components/example-helpers';
import type { StackProps } from './Stack';
import { Stack } from './Stack';

const meta = {
  title: 'Page & Layout / Stack',
  component: Stack,
};
export default meta;

const StackStory: Story<StackProps> = args => {
  return <Stack {...args} />;
};

export const Default = StackStory.bind({});

Default.args = {
  gap: 'large',
  children: (
    <>
      <Placeholder height={40} />
      <Placeholder height={40} />
      <Placeholder height={40} />
    </>
  ),
} as StackProps;
