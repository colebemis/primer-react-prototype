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
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  GridGapProps,
  GridRowGapProps,
  GridColumnGapProps,
  GridAutoFlowProps,
  GridAutoRowsProps,
  GridAutoColumnsProps,
  GridTemplateRowsProps,
  GridTemplateColumnsProps,
  GridTemplateAreasProps,
} from 'styled-system';
import { Base, PublicBaseProps } from './Base';

type AdditionalSystemProps = ColorProps &
  BackgroundProps &
  PaddingProps &
  LayoutProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  GridGapProps &
  GridRowGapProps &
  GridColumnGapProps &
  GridAutoFlowProps &
  GridAutoRowsProps &
  GridAutoColumnsProps &
  GridTemplateRowsProps &
  GridTemplateColumnsProps &
  GridTemplateAreasProps;

const additionalSystemProps = compose(
  color,
  background,
  padding,
  layout,
  typography,
  border,
  shadow,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas
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
