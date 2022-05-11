import type { Story } from '@ladle/react';
import { Field } from '@spark-web/field';
import { useState } from 'react';

import type { ComboboxProps } from './combobox';
import { Combobox } from './combobox';

const meta = {
  title: 'Forms / Combobox',
  component: Combobox,
};
export default meta;

type Item = { label: string; value: string };
const items: Item[] = [
  { label: 'Jake', value: 'jake' },
  { label: 'Finn', value: 'finn' },
  { label: 'BMO', value: 'bmo' },
];

const ComboboxStory: Story<ComboboxProps> = () => {
  const [value, setValue] = useState<Item | null>(null);

  return (
    <Field label="What's your favourite Adventure Time character?">
      <Combobox
        placeholder="Select a character"
        items={items}
        onChange={value => setValue(value)}
        value={value}
      />
    </Field>
  );
};

export const Default = ComboboxStory.bind({});
