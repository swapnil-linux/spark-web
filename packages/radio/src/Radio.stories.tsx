import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';
import { InformationCircleIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';

import { Radio } from './radio';
import type { RadioProps } from './types';

const meta = {
  title: 'Forms / Radio',
  component: Radio,
};
export default meta;

const RadioStory: Story<RadioProps> = () => (
  <Stack gap="large">
    <Inline gap="xsmall" alignY="center">
      <InformationCircleIcon tone="info" size="xsmall" />
      <Text weight="semibold" tone="info" baseline={false}>
        {`Must be used inside of a <Field/>`}
      </Text>
    </Inline>
    <Field label="Radio input">
      <Radio name="radio-story" value="one">
        One
      </Radio>
      <Radio name="radio-story" value="two">
        two
      </Radio>
      <Radio name="radio-story" value="three">
        three
      </Radio>
    </Field>
  </Stack>
);

export const Default = RadioStory.bind({});
