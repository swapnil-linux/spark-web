import type { Story } from '@ladle/react';

import type { DividerProps } from './Divider';
import { Divider } from './Divider';

const meta = {
  title: 'Page & Layout / Divider',
  component: Divider,
};
export default meta;

const DividerStory: Story<DividerProps> = args => {
  return <Divider {...args} />;
};

export const Default = DividerStory.bind({});

Default.args = {
  width: 'standard',
} as DividerProps;
