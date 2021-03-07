import * as CSS from 'csstype';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import {
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexBasis,
  FlexBasisProps,
  flexbox,
  FlexboxProps,
  flexGrow,
  FlexGrowProps,
  FlexProps,
  flexShrink,
  FlexShrinkProps,
  grid,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  GridProps,
  gridRow,
  GridRowProps,
  justifySelf,
  JustifySelfProps,
  WidthProps,
  HeightProps,
  MinWidthProps,
  MinHeightProps,
  MaxWidthProps,
  MaxHeightProps,
  DisplayProps,
  VerticalAlignProps,
  // OverflowProps,
  margin,
  MarginProps,
  order,
  OrderProps,
  position,
  PositionProps,
  RequiredTheme,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  styleFn,
  system,
  Theme,
  TLengthStyledSystem,
  typography,
  TypographyProps,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display,
  verticalAlign,
  // overflow,
} from 'styled-system';

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

type LayoutProps = WidthProps &
  HeightProps &
  MinWidthProps &
  MinHeightProps &
  MaxWidthProps &
  MaxHeightProps &
  DisplayProps &
  VerticalAlignProps;
// OverflowProps;

// redefine layout to omit `size`
export const layout = compose(
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display,
  verticalAlign
  // overflow,
);

export type AllSystemProps = ColorProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  GapProps;

export const all = compose(
  color,
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  gap
);

export type CommonSystemProps = MarginProps &
  PositionProps &
  FlexProps &
  FlexGrowProps &
  FlexShrinkProps &
  FlexBasisProps &
  AlignSelfProps &
  JustifySelfProps &
  OrderProps &
  GridAreaProps &
  GridColumnProps &
  GridRowProps;

export const common = compose(
  margin,
  position,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  justifySelf,
  order,
  gridArea,
  gridColumn,
  gridRow
);

export function omitSystemProps<T extends object>(
  props: T,
  ...styleFns: styleFn[]
) {
  return omit(
    props,
    styleFns.flatMap(styleFn => styleFn.propNames ?? [])
  );
}

export function pickSystemProps<T extends object>(
  props: T,
  ...styleFns: styleFn[]
) {
  return pick(
    props,
    styleFns.flatMap(styleFn => styleFn.propNames ?? [])
  );
}

export function forwardSystemProps<T extends object>(
  props: T,
  ...styleFns: styleFn[]
) {
  const ownProps = omitSystemProps(props, all);
  const systemProps = pickSystemProps(props, ...styleFns);
  return { ...ownProps, ...systemProps };
}
