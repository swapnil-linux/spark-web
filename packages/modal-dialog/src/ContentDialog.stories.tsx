import type { Story } from '@ladle/react';
import { Button } from '@spark-web/button';
import { Text } from '@spark-web/text';

import type { ContentDialogProps } from './content-dialog';
import { ContentDialog } from './content-dialog';

const meta = {
  title: 'Feedback & Overlays / Content Dialog',
  component: ContentDialog,
};
export default meta;

const ContentDialogStory: Story<ContentDialogProps> = () => (
  <ContentDialog
    title="Here's a title"
    description="Content dialog"
    trigger={<Button>Open dialog</Button>}
  >
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      optio molestiae dolorem qui omnis reiciendis dignissimos numquam aperiam,
      rem natus, totam, repudiandae cum voluptatibus quos? Dicta, odio!
      Accusantium, reiciendis quidem.
    </Text>
  </ContentDialog>
);

export const Default = ContentDialogStory.bind({});

Default.args = {};
