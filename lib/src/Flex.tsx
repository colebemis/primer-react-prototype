import React from 'react';
import { Box, BoxProps } from './Box';

export type FlexProps = Omit<BoxProps, 'display'>;

export function Flex(props: FlexProps) {
  return <Box {...props} display="flex" />;
}
