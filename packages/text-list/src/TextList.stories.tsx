import type { Story } from '@ladle/react';
import { Text } from '@spark-web/text';

import type { TextListProps } from './TextList';
import { TextList } from './TextList';

const meta = {
  title: 'Data Display / TextList',
  component: TextList,
};
export default meta;

const TextListStory: Story<TextListProps> = args => {
  return (
    <TextList {...args}>
      <Text>Here's</Text>
      <Text>A list of</Text>
      <Text>Items!</Text>
    </TextList>
  );
};

export const Default = TextListStory.bind({});

Default.args = {} as TextListProps;
