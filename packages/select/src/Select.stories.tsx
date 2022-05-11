import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';
import { InformationCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';

import type { SelectProps } from './Select';
import { Select } from './Select';

const meta = {
  title: 'Forms / Select',
  component: Select,
};
export default meta;

const SelectStory: Story<SelectProps> = args => {
  return (
    <Stack gap="large">
      <Inline gap="xsmall" alignY="center">
        <InformationCircleIcon tone="info" size="xsmall" />
        <Text weight="semibold" tone="info" baseline={false}>
          {`Must be used inside of a <Field/>`}
        </Text>
      </Inline>
      <Field label="Select input">
        <Select options={args.options} />
      </Field>
    </Stack>
  );
};

export const Default = SelectStory.bind({});

Default.args = {
  options: [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
} as SelectProps;
