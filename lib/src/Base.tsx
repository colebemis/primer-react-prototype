import styled from '@emotion/styled';
import css, { SystemStyleObject } from '@styled-system/css';
import {
  alignSelf,
  AlignSelfProps,
  compose,
  flex,
  flexBasis,
  FlexBasisProps,
  flexGrow,
  FlexGrowProps,
  FlexProps,
  flexShrink,
  FlexShrinkProps,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  justifySelf,
  JustifySelfProps,
  margin,
  MarginProps,
  order,
  OrderProps,
  position,
  PositionProps,
} from 'styled-system';

type InternalStylesProp = {
  __internalStyles?: SystemStyleObject;
};

function internalStylesProp(props: InternalStylesProp) {
  return css(props.__internalStyles);
}

type SxProp = {
  sx?: SystemStyleObject;
};

function sxProp(props: SxProp) {
  return css(props.sx);
}

type SystemProps = MarginProps &
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

const systemProps = compose(
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

export const systemPropNames = systemProps.propNames;

// TODO: as prop type/dom props
export const Base = styled.div<InternalStylesProp & SystemProps & SxProp>(
  internalStylesProp,
  systemProps,
  sxProp
);

export type BaseProps = React.ComponentProps<typeof Base>;
export type PublicBaseProps = Omit<BaseProps, '__internalStyles'>;
