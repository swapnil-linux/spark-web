import type { Story } from '@ladle/react';
import { Text } from '@spark-web/text';

import type { TextLinkProps } from './TextLink';
import { TextLink } from './TextLink';

const meta = {
  title: 'Navigation / TextLink',
  component: TextLink,
};
export default meta;

const TextLinkStory: Story<TextLinkProps> = args => {
  return (
    <Text>
      Here's some text with a <TextLink {...args} />
    </Text>
  );
};

export const Default = TextLinkStory.bind({});

Default.args = {
  href: 'https://brighte.com.au',
  children: 'link!',
} as TextLinkProps;
