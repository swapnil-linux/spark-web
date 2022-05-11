import type { Story } from '@ladle/react';
import { Text } from '@spark-web/text';

import type { BoxProps } from './Box';
import { Box } from './Box';

const meta = {
  title: 'Page & Layout / Box',
  component: Box,
};
export default meta;

const BoxStory: Story<BoxProps> = args => {
  return (
    <Box {...args}>
      <Text>I'm some text inside a Box</Text>
    </Box>
  );
};

export const Default = BoxStory.bind({});

Default.args = {
  padding: 'small',
  shadow: 'medium',
  borderRadius: 'medium',
} as BoxProps;
