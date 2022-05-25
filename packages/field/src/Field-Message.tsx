import { css } from '@emotion/css';
import { Box } from '@spark-web/box';
import { CheckCircleIcon, ExclamationCircleIcon } from '@spark-web/icon';
import { Text } from '@spark-web/text';
import { useTheme } from '@spark-web/theme';
import type { ReactNode } from 'react';

import type { FieldProps } from './Field';
import { messageToneMap } from './Field';

// NOTE: use icons in addition to color for folks with visions issues
const messageIconMap = {
  critical: ExclamationCircleIcon,
  neutral: null,
  positive: CheckCircleIcon,
} as const;

type FieldMessageProps = Required<Pick<FieldProps, 'message' | 'id' | 'tone'>>;
export const FieldMessage = ({ message, id, tone }: FieldMessageProps) => {
  const textTone = messageToneMap[tone];
  const Icon = messageIconMap[tone];

  return (
    <Box display="flex" gap="xsmall">
      {Icon ? (
        <IndicatorContainer>
          <Icon size="xxsmall" tone={tone} />
        </IndicatorContainer>
      ) : null}
      <Text tone={textTone} size="small" id={id}>
        {message}
      </Text>
    </Box>
  );
};

function IndicatorContainer({ children, ...props }: { children: ReactNode }) {
  const { typography, utils } = useTheme();
  const { mobile, tablet } = typography.text.small;
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
    >
      {children}
    </Box>
  );
}
