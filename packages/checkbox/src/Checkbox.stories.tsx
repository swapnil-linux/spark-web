import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';
import { InformationCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';

import { Checkbox } from './checkbox';
import type { CheckboxProps } from './types';

const meta = {
  title: 'Forms / Checkbox',
  component: Checkbox,
};
export default meta;

const CheckboxStory: Story<CheckboxProps> = args => {
  return (
    <Stack gap="large">
      <Inline gap="xsmall" alignY="center">
        <InformationCircleIcon tone="info" size="xsmall" />{' '}
        <Text weight="semibold" tone="info" baseline={false}>
          {`Must be used inside of a <Field/>`}
        </Text>
      </Inline>
      <Field label="Checkbox input">
        <Checkbox {...args}>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Checkbox>
      </Field>
    </Stack>
  );
};

export const Default = CheckboxStory.bind({});

Default.args = {} as CheckboxProps;
