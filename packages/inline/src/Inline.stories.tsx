import type { Story } from '@ladle/react';

import { Placeholder } from '../../../docs/components/example-helpers';
import type { InlineProps } from './Inline';
import { Inline } from './Inline';

const meta = {
  title: 'Page & Layout / Inline',
  component: Inline,
};
export default meta;

const InlineStory: Story<InlineProps> = args => {
  return <Inline {...args} />;
};

export const Default = InlineStory.bind({});

Default.args = {
  gap: 'large',
  children: (
    <>
      <Placeholder width={128} />
      <Placeholder width={32} />
      <Placeholder width={64} />
    </>
  ),
} as InlineProps;
