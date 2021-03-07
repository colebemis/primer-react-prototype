import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'h2';

export type HeadingProps = SxProp & AllSystemProps;

type HeadingComponent = ForwardRefComponent<
  typeof defaultElement,
  HeadingProps
>;

export const Heading = React.forwardRef(
  ({ as = defaultElement, ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, all)}
        __css={{ fontWeight: 'bold' }}
      />
    );
  }
) as HeadingComponent;
