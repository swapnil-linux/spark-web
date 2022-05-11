import type { Story } from '@ladle/react';
import { Stack } from '@spark-web/stack';

import type { HeadingProps } from './Heading';
import { Heading } from './Heading';

const meta = {
  title: 'Typography / Heading',
  component: Heading,
};
export default meta;

const HeadingStory: Story<HeadingProps> = args => {
  return (
    <Stack gap="large">
      <Heading {...args} />
    </Stack>
  );
};

export const Default = HeadingStory.bind({});

Default.args = {
  children: 'Heading',
  level: '1',
} as HeadingProps;
