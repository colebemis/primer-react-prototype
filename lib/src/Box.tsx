import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps } from './system-props';

const defaultElement = 'div';

export type BoxProps = SxProp & AllSystemProps;
type BoxComponent = ForwardRefComponent<typeof defaultElement, BoxProps>;

export const Box = React.forwardRef((props, ref) => {
  return (
    <Base as={defaultElement} ref={ref} {...props} __systemProps={[all]} />
  );
}) as BoxComponent;
