import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps } from './system-props';

const defaultElement = 'div';

export type FlexProps = SxProp & AllSystemProps;

type FlexComponent = ForwardRefComponent<typeof defaultElement, FlexProps>;

export const Flex = React.forwardRef((props, ref) => {
  return (
    <Base
      as={defaultElement}
      ref={ref}
      {...props}
      __css={{ display: 'flex' }}
      __systemProps={[all]}
    />
  );
}) as FlexComponent;
