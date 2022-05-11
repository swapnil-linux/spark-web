import type { Story } from '@ladle/react';
import { Inline } from '@spark-web/inline';
import { Text } from '@spark-web/text';

import type { LinkProps } from './Link';
import { Link } from './Link';

const meta = {
  title: 'Navigation / Link',
  component: Link,
};
export default meta;

const LinkStory: Story<LinkProps> = args => {
  return (
    <Inline>
      <Link {...args} />
    </Inline>
  );
};

export const Default = LinkStory.bind({});

Default.args = {
  href: 'https://brighte.com.au',
  children: <Text>I'm a link!</Text>,
} as LinkProps;
