import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'a';

export type LinkProps = SxProp & AllSystemProps;

type LinkComponent = ForwardRefComponent<typeof defaultElement, LinkProps>;

export const Link = React.forwardRef(
  ({ as = defaultElement, ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, all)}
        __css={{
          color: 'text.link',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        // __systemProps={[all]}
      />
    );
  }
) as LinkComponent;
