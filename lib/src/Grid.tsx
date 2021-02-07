import React from 'react';
import { Box, BoxProps } from './Box';

export type GridProps = Omit<BoxProps, 'display'>;

export function Grid(props: GridProps) {
  return <Box {...props} display="grid" />;
}
