import { SystemStyleObject } from '@styled-system/css';
import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'img';

type Shape = 'circle' | 'square';

export type AvatarProps = SxProp &
  CommonSystemProps & {
    shape?: Shape;
    size?: number;
  };

type AvatarComponent = ForwardRefComponent<typeof defaultElement, AvatarProps>;

const shapes: Record<Shape, SystemStyleObject> = {
  circle: {
    borderRadius: '999px',
  },
  square: {
    borderRadius: 2,
  },
};

export const Avatar = React.forwardRef(
  ({ as = defaultElement, shape = 'circle', size = 20, ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
        __css={{ width: size, height: size, ...shapes[shape] }}
      />
    );
  }
) as AvatarComponent;
