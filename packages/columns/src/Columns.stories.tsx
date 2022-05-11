import type { Story } from '@ladle/react';

import { Placeholder } from '../../../docs/components/example-helpers';
import type { ColumnsProps } from './Columns';
import { Columns } from './Columns';

const meta = {
  title: 'Page & Layout / Columns',
  component: Columns,
};
export default meta;

const ColumnsStory: Story<ColumnsProps> = args => {
  return <Columns {...args} />;
};

export const Default = ColumnsStory.bind({});

Default.args = {
  gap: 'large',
  children: (
    <>
      <Placeholder height={40} />
      <Placeholder height={40} />
      <Placeholder height={40} />
    </>
  ),
} as ColumnsProps;
