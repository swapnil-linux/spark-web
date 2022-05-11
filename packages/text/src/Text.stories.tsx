import type { Story } from '@ladle/react';

import type { TextProps } from './Text';
import { Text } from './Text';

const meta = {
  title: 'Typography / Text',
  component: Text,
};
export default meta;

const TextStory: Story<TextProps> = args => {
  return <Text {...args} />;
};

export const Default = TextStory.bind({});

Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus ex purus, nec rutrum lorem placerat vestibulum. Ut sit amet libero non tellus aliquam pretium nec ac dui. Vivamus erat nibh, placerat vitae nisi eu, aliquet auctor dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
};
