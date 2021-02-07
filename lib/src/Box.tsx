import { useTheme } from '@emotion/react';
import React from 'react';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  background,
  BackgroundProps,
  compose,
  layout,
  LayoutProps,
  padding,
  PaddingProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { Base, PublicBaseProps } from './Base';

type AdditionalSystemProps = ColorProps &
  BackgroundProps &
  PaddingProps &
  LayoutProps &
  TypographyProps &
  BorderProps &
  ShadowProps;

const additionalSystemProps = compose(
  color,
  background,
  padding,
  layout,
  typography,
  border,
  shadow
);

export type BoxProps = AdditionalSystemProps & PublicBaseProps;

export function Box(props: BoxProps) {
  const theme = useTheme();
  return (
    <Base
      {...props}
      __internalStyles={additionalSystemProps({ theme, ...props })}
    />
  );
}
