import type { Story } from '@ladle/react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const meta = {
  title: 'Forms / Buttons / Button',
  component: Button,
};
export default meta;

const ButtonStory: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const Default = ButtonStory.bind({});
export const Tone = ButtonStory.bind({});
export const Disabled = ButtonStory.bind({});

Default.args = {
  children: 'Click me!',
  tone: 'primary',
  onClick: () => window.alert('Clicked!'),
} as ButtonProps;

Tone.args = {
  children: 'Click me!',
  tone: 'critical',
  onClick: () => window.alert('Clicked!'),
} as ButtonProps;

Disabled.args = {
  children: 'Click me!',
  disabled: true,
  onClick: () => window.alert('Clicked!'),
} as ButtonProps;
