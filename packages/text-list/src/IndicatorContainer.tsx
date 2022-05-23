import { css } from '@emotion/css';
import { Box } from '@spark-web/box';
import type { TextProps } from '@spark-web/text';
import { useTheme } from '@spark-web/theme';

export const BULLET_ELEMENT_ID = 'text-list-bullet';
export const NUMBER_ELEMENT_ID = 'text-list-number';

export const IndicatorContainer = ({
  size = 'standard',
  ...props
}: TextProps) => {
  const { typography, utils } = useTheme();
  const { mobile, tablet } = typography.text[size];
  const responsiveStyles = utils.responsiveStyles({
    mobile: { height: mobile.capHeight },
    tablet: { height: tablet.capHeight },
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      aria-hidden
      cursor="default"
      flexShrink={0}
      className={css(responsiveStyles)}
      {...props}
    />
  );
};
