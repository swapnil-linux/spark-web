import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';
import { InformationCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';

import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

const meta = {
  title: 'Forms / TextInput',
  component: TextInput,
};
export default meta;

const TextInputStory: Story<TextInputProps> = args => {
  return (
    <Stack gap="large">
      <Inline gap="xsmall" alignY="center">
        <InformationCircleIcon tone="info" size="xsmall" />
        <Text weight="semibold" tone="info" baseline={false}>
          {`Must be used inside of a <Field/>`}
        </Text>
      </Inline>
      <Field label="Text input">
        <TextInput {...args} />
      </Field>
    </Stack>
  );
};

export const Default = TextInputStory.bind({});

Default.args = {
  displayName: 'Display name',
} as TextInputProps;
