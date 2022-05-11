import type { Story } from '@ladle/react';

import type { AlertProps } from './Alert';
import { Alert } from './Alert';

const meta = {
  title: 'Feedback & Overlays / Alert',
  component: Alert,
};
export default meta;

const AlertStory: Story<AlertProps> = args => {
  return <Alert {...args}>Child text</Alert>;
};

export const Info = AlertStory.bind({});
export const Critical = AlertStory.bind({});
export const Caution = AlertStory.bind({});
export const Positive = AlertStory.bind({});

Info.args = {
  tone: 'info',
  heading: 'Information',
} as AlertProps;

Caution.args = {
  tone: 'caution',
  heading: 'Caution',
} as AlertProps;

Critical.args = {
  tone: 'critical',
  heading: 'Critical',
} as AlertProps;

Positive.args = {
  tone: 'positive',
  heading: 'Positive',
} as AlertProps;
