import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'span';

export type CounterProps = SxProp & CommonSystemProps;

type CounterComponent = ForwardRefComponent<
  typeof defaultElement,
  CounterProps
>;

export const Counter = React.forwardRef(
  ({ as = defaultElement, ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
        __css={{
          display: 'inline-block',
          padding: '0 6px',
          color: 'counter.text',
          bg: 'counter.bg',
          fontSize: 0,
          fontWeight: 'semibold',
          lineHeight: '18px',
          border: '1px solid transparent',
          borderRadius: 3,
        }}
      />
    );
  }
) as CounterComponent;
