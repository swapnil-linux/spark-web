---
title: Radio
storybookPath: forms-radio--default
---

Radios are used select a single value from several options — ususally in a form.
If multiple choices are valid, consider using a `Checkbox` instead.

## Examples

In order to toggle between options, all Radio components should have a matching
`name` prop (unless you are using them inside of a `RadioGroup`).

```jsx live
<Fieldset legend="Shrek Characters" gap="large">
  <Radio name="character-radio" value="Shrek">
    Shrek
  </Radio>
  <Radio name="character-radio" value="Fiona">
    Fiona
  </Radio>
  <Radio name="character-radio" value="Donkey">
    Donkey
  </Radio>
</Fieldset>
```

### Size

Radio buttons are available in two sizes: `small` and `medium`.

```jsx live
<Stack gap="large">
  <Radio size="small" checked={false}>
    Unchecked
  </Radio>
  <Radio size="small" checked>
    Checked
  </Radio>
  <Radio size="small" disabled>
    Disabled
  </Radio>
  <Radio size="small" checked disabled>
    Checked + disabled
  </Radio>
  <Divider />
  <Radio size="medium" checked={false}>
    Unchecked
  </Radio>
  <Radio size="medium" checked>
    Checked
  </Radio>
  <Radio size="medium" disabled>
    Disabled
  </Radio>
  <Radio size="medium" checked disabled>
    Checked + disabled
  </Radio>
</Stack>
```

## RadioGroup

The `RadioGroup` can be used to control a group of `Radio` components. The
`RadioGroup` handles the `value`, `tone`, `message`, and `disabled` state of
it's children. Internally the `RadioGroup` contains a
[`Fieldset`](/components/fieldset) so the `legend` prop is required when using
this component.

### Controlled

To control a group of `Radio` components, wrap them with a `RadioGroup` and
provide it with a `value` and `onChange` function.

All `Radio` children _must_ be provided with a `value`.

```jsx live
const [selected, setSelected] = React.useState('Shrek');

return (
  <Stack gap="large">
    <RadioGroup
      legend="Shrek Characters"
      value={selected}
      onChange={setSelected}
      gap="large"
    >
      <Radio value="Shrek">Shrek</Radio>
      <Radio value="Fiona">Fiona</Radio>
      <Radio value="Donkey">Donkey</Radio>
    </RadioGroup>
    {selected && (
      <Text>
        The selected character is <Strong>{selected}</Strong>
      </Text>
    )}
  </Stack>
);
```

### Message and tone

The `message` is used to communicate the status of a field, such as an error
message. This will be announced on focus and can be combined with a `tone` to
illustrate intent. The supported tones are: `critical`, `positive` and
`neutral`.

```jsx live
const [selected, setSelected] = React.useState('critical');
const statuses = {
  critical: {
    message: 'Critical message',
    tone: 'critical',
  },
  positive: {
    message: 'Positive message',
    tone: 'positive',
  },
  neutral: {
    message: 'Neutral message',
    tone: 'neutral',
  },
};

return (
  <Stack gap="large">
    <RadioGroup
      legend="Message and Tone"
      message={statuses[selected]?.message}
      tone={statuses[selected]?.tone}
      value={selected}
      onChange={setSelected}
    >
      <Radio value="critical">Critical</Radio>
      <Radio value="positive">Positive</Radio>
      <Radio value="neutral">Neutral</Radio>
    </RadioGroup>
  </Stack>
);
```

## RadioCard

A RadioCard is an alternative to Radio. Use RadioCard where a user needs to make
one selection out of several choices, and where each option requires some
detailed information.

### Controlled

```jsx live
const [selected, setSelected] = React.useState('06_months');

return (
  <Stack gap="large">
    <RadioGroup
      legend="Select a repayment term"
      value={selected}
      onChange={setSelected}
    >
      <RadioCard value="6 months" description="$426.08/fortnight">
        6 months
      </RadioCard>
      <RadioCard value="12 months" description="$214.54/fortnight">
        12 months
      </RadioCard>
      <RadioCard value="24 months" description="$108.77/fortnight">
        24 months
      </RadioCard>
      <RadioCard value="36 months" description="73.52/fortnight">
        36 months
      </RadioCard>
      <RadioCard value="48 months" description="55.89/fortnight">
        48 months
      </RadioCard>
    </RadioGroup>

    {selected && (
      <Text>
        You have selected <Strong>{selected}</Strong>
      </Text>
    )}
  </Stack>
);
```

### Uncontrolled

```jsx live
<Fieldset legend="Select a repayment term">
  <RadioCard description="$426.08/fortnight">6 months</RadioCard>
  <RadioCard description="$214.54/fortnight">12 months</RadioCard>
  <RadioCard description="$108.77/fortnight">24 months</RadioCard>
  <RadioCard description="73.52/fortnight">36 months</RadioCard>
  <RadioCard description="55.89/fortnight">48 months</RadioCard>
</Fieldset>
```

### Without description

RadioCards without a description have a lower prominence label.

```jsx live
const [selected, setSelected] = React.useState('Shrek');

return (
  <Stack gap="large">
    <RadioGroup
      legend="Shrek Characters"
      value={selected}
      onChange={setSelected}
      gap="large"
    >
      <RadioCard value="Shrek">Shrek</RadioCard>
      <RadioCard value="Fiona">Fiona</RadioCard>
      <RadioCard value="Donkey">Donkey</RadioCard>
    </RadioGroup>
    {selected && (
      <Text>
        The selected character is <Strong>{selected}</Strong>
      </Text>
    )}
  </Stack>
);
```

## Props

### Radio

| Prop      | Type                | Default | Description                            |
| --------- | ------------------- | ------- | -------------------------------------- |
| children  | React.ReactNode     |         | The radio label content.               |
| checked?  | boolean             |         | When true, the radio will be checked.  |
| disabled? | boolean             | false   | When true, the radio will be disabled. |
| size?     | 'small' \| 'medium' | 'small' | The size of the radio.                 |
| value?    | string              |         | The value of the radio.                |

The `Radio` component also extends `InputHTMLAttributes` props and are not
listed here.

### RadioPrimitive

| Prop      | Type                                   | Default | Description                            |
| --------- | -------------------------------------- | ------- | -------------------------------------- |
| checked?  | boolean                                |         | When true, the radio will be checked.  |
| data?     | [DataAttributeMap][data-attribute-map] |         | Sets data attributes on the component. |
| disabled? | boolean                                |         | When true, the radio will be disabled. |
| size?     | 'small' \| 'medium'                    | 'small' | The size of the radio.                 |
| value?    | string                                 |         | The value of the radio.                |

[data-attribute-map]:
  https://github.com/brighte-labs/spark-web/blob/e7f6f4285b4cfd876312cc89fbdd094039aa239a/packages/utils/src/internal/buildDataAttributes.ts#L1

The `CheckboxPrimitive` component also extends `InputHTMLAttributes` props and
are not listed here.

### RadioGroup

| Prop      | Type                                                                             | Default   | Description                                                               |
| --------- | -------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------- |
| disabled? | boolean                                                                          |           | When true, disables the group of nested radios.                           |
| gap?      | 'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'xxlarge' | 'large'   | Vertical spacing between children.                                        |
| legend    | string                                                                           |           | Provide a caption that describes the set of form fields.                  |
| message?  | string                                                                           |           | Provide a message, informing the user about changes in state.             |
| onChange  | onChange: (selectedValue: Value) => void                                         |           | Function that is fired whenever a change event is triggered on a `Radio`. |
| size?     | 'small' \| 'medium'                                                              |           | The size of the nested radios.                                            |
| tone?     | 'critical' \| 'positive' \| 'neutral'                                            | 'neutral' | Provide a tone to influence elements of the field, and its input.         |
| value     | string                                                                           |           | The value of the nested radios.                                           |

### RadioCard

| Prop         | Type            | Default | Description                            |
| ------------ | --------------- | ------- | -------------------------------------- |
| checked?     | boolean         |         | When true, the radio will be checked.  |
| children     | React.ReactNode |         | The radio label.                       |
| description? | string          |         | The radio description.                 |
| disabled?    | boolean         | false   | When true, the radio will be disabled. |
| value?       | string          |         | The value of the radio.                |

The `RadioCard` component also extends `InputHTMLAttributes` props and are not
listed here.
