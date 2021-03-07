import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'div';

export type BoxProps = SxProp & AllSystemProps;
type BoxComponent = ForwardRefComponent<typeof defaultElement, BoxProps>;

export const Box = React.forwardRef(
  ({ as = defaultElement, ...props }, ref) => {
    return <Base as={as} ref={ref} {...forwardSystemProps(props, all)} />;
  }
) as BoxComponent;
