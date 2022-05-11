import type { Story } from '@ladle/react';
import { HomeIcon } from '@spark-web/icon';

import type { NavLinkProps } from './index';
import { NavLink } from './index';

const meta = {
  title: 'Navigation / NavLink',
  component: NavLink,
};
export default meta;

const LinkStory: Story<NavLinkProps> = args => {
  return <NavLink {...args} />;
};

export const Default = LinkStory.bind({});

Default.args = {
  href: 'https://brighte.com.au',
  children: [<HomeIcon key="1" />, "I'm a link!"],
} as NavLinkProps;
