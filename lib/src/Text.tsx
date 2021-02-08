import React from 'react';
import { Box, BoxProps } from './Box';

export type TextProps = BoxProps;

export function Text(props: TextProps) {
  return <Box as="span" {...props} />;
}
