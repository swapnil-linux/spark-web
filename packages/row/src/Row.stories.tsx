import type { Story } from '@ladle/react';

import { Placeholder } from '../../../docs/components/example-helpers';
import type { RowProps } from './Row';
import { Row } from './Row';

const meta = {
  title: 'Page & Layout / Row',
  component: Row,
};
export default meta;

const RowStory: Story<RowProps> = args => {
  return <Row {...args} />;
};

export const Default = RowStory.bind({});

Default.args = {
  gap: 'large',
  children: (
    <>
      <Placeholder height={40} />
      <Placeholder height={40} />
      <Placeholder height={40} />
    </>
  ),
} as RowProps;
