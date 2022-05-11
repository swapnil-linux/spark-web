import type { Story } from '@ladle/react';
import { Text } from '@spark-web/text';

import type { TextLinkButtonProps } from './TextLinkButton';
import { TextLinkButton } from './TextLinkButton';

const meta = {
  title: 'Forms / Buttons / TextLinkButton',
  component: TextLinkButton,
};
export default meta;

const TextLinkButtonStory: Story<TextLinkButtonProps> = args => {
  return (
    <Text>
      <TextLinkButton {...args} />
    </Text>
  );
};

export const Default = TextLinkButtonStory.bind({});

Default.args = {
  children: 'Text link button',
  onClick: () => window.alert('Clicked!'),
} as TextLinkButtonProps;
