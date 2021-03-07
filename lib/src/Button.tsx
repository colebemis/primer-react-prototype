import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const variants = {
  default: {
    color: 'btn.text',
    bg: 'btn.bg',
    borderColor: 'btn.border',
  },
  primary: {
    color: 'btn.primary.text',
    bg: 'btn.primary.bg',
    borderColor: 'btn.primary.border',
  },
  danger: {
    color: 'btn.danger.text',
    bg: 'btn.bg',
    borderColor: 'btn.border',
  },
};

const defaultElement = 'button';

export type ButtonProps = SxProp &
  CommonSystemProps & {
    variant?: keyof typeof variants;
  };

type ButtonComponent = ForwardRefComponent<typeof defaultElement, ButtonProps>;

export const Button = React.forwardRef(
  ({ as = defaultElement, variant = 'default', ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
        __css={{
          display: 'inline-block',
          paddingY: '5px',
          paddingX: 3,
          fontFamily: 'inherit',
          fontWeight: 'semibold',
          fontSize: 1,
          lineHeight: '20px',
          textDecoration: 'none',
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 2,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          cursor: 'pointer',
          userSelect: 'none',
          appearance: 'none',
          ...variants[variant],
        }}
      />
    );
  }
) as ButtonComponent;
