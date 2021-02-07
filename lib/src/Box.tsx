import { useTheme } from '@emotion/react';
import * as CSS from 'csstype';
import React from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridColumnGap,
  GridColumnGapProps,
  gridGap,
  GridGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  layout,
  LayoutProps,
  padding,
  PaddingProps,
  RequiredTheme,
  ResponsiveValue,
  shadow,
  ShadowProps,
  system,
  Theme,
  TLengthStyledSystem,
  typography,
  TypographyProps,
} from 'styled-system';
import { Base, PublicBaseProps } from './Base';

interface GapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = CSS.Property.Gap<TLengthStyledSystem>
> {
  gap?: ResponsiveValue<TVal, ThemeType>;
}

// NOTE: gap is not fully supported yet (https://caniuse.com/flexbox-gap)
const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

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
  GridTemplateAreasProps &
  GapProps;

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
  gridTemplateAreas,
  gap
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
