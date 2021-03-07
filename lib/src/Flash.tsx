import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'div';

type Variant = 'info' | 'success' | 'warn' | 'error';

export type FlashProps = SxProp &
  CommonSystemProps & {
    variant?: Variant;
  };

type FlashComponent = ForwardRefComponent<typeof defaultElement, FlashProps>;

const variants = {
  info: {
    color: 'alert.info.text',
    bg: 'alert.info.bg',
    borderColor: 'alert.info.border',
  },
  success: {
    color: 'alert.success.text',
    bg: 'alert.success.bg',
    borderColor: 'alert.success.border',
  },
  warn: {
    color: 'alert.warn.text',
    bg: 'alert.warn.bg',
    borderColor: 'alert.warn.border',
  },
  error: {
    color: 'alert.error.text',
    bg: 'alert.error.bg',
    borderColor: 'alert.error.border',
  },
};

export const Flash = React.forwardRef(
  ({ as = defaultElement, variant = 'info', ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
        __css={{
          padding: 3,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 2,
          ...variants[variant],
        }}
      />
    );
  }
) as FlashComponent;
