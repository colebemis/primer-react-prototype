import React from 'react';
import { Base, BaseProps } from './Base';
import {
  color,
  ColorProps,
  padding,
  PaddingProps,
  compose,
  border,
  BorderProps,
} from 'styled-system';
import { useTheme } from '@emotion/react';

type SystemProps = ColorProps & PaddingProps & BorderProps;

const systemProps = compose(color, padding, border);

export type BoxProps = {
  children?: React.ReactNode;
} & SystemProps &
  Omit<BaseProps, '__internalStyles'>;

export const Box = ({ ...props }: BoxProps) => {
  const theme = useTheme();
  props.theme = props.theme ?? theme;
  return <Base {...props} __internalStyles={systemProps(props)} />;
};
