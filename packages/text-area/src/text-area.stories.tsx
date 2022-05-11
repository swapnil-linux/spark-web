import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';

import type { TextAreaProps } from './text-area';
import { TextArea } from './text-area';

const meta = {
  title: 'Forms / TextArea',
  component: TextArea,
};
export default meta;

const TextareaStory: Story<TextAreaProps> = args => {
  return (
    <Field label="Add some text" tone="neutral" message="You added text">
      <TextArea {...args} />
    </Field>
  );
};

export const Default = TextareaStory.bind({});
