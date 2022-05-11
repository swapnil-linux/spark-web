import type { Story } from '@ladle/react';

import { Placeholder } from '../../../docs/components/example-helpers';
import type { ContainerProps } from './Container';
import { Container } from './Container';

const meta = {
  title: 'Page & Layout / Container',
  component: Container,
};
export default meta;

const ContainerStory: Story<ContainerProps> = args => {
  return <Container {...args} />;
};

export const Default = ContainerStory.bind({});

Default.args = {
  size: 'large',
  children: <Placeholder height={64} />,
} as ContainerProps;
