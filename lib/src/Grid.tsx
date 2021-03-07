import React from 'react';
import { Base } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps } from './system-props';

const defaultElement = 'div';

export type GridProps = AllSystemProps;

type GridComponent = ForwardRefComponent<typeof defaultElement, GridProps>;

export const Grid = React.forwardRef((props, ref) => {
  return (
    <Base
      as={defaultElement}
      ref={ref}
      {...props}
      __css={{ display: 'grid' }}
      __systemProps={[all]}
    />
  );
}) as GridComponent;
