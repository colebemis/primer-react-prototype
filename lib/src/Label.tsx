import { SystemStyleObject } from '@styled-system/css';
import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'span';

type Variant = 'default' | 'warning' | 'success';

type Size = 'small' | 'large';

export type LabelProps = SxProp &
  CommonSystemProps & {
    variant?: Variant;
    size?: Size;
  };

type LabelComponent = ForwardRefComponent<typeof defaultElement, LabelProps>;

const variants: Record<Variant, SystemStyleObject> = {
  default: {
    color: 'text.primary',
    borderColor: 'label.border',
  },
  warning: {
    color: 'label.warning.text',
    borderColor: 'label.warning.border',
  },
  success: {
    color: 'label.success.text',
    borderColor: 'label.success.border',
  },
};

const sizes: Record<Size, SystemStyleObject> = {
  small: {
    paddingX: '6px',
    lineHeight: '18px',
  },
  large: {
    paddingX: '10px',
    lineHeight: '22px',
  },
};

export const Label = React.forwardRef(
  (
    { as = defaultElement, variant = 'default', size = 'small', ...props },
    ref
  ) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
        __css={{
          display: 'inline-block',
          fontWeight: 'semibold',
          fontSize: 0,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '999px',
          ...variants[variant],
          ...sizes[size],
        }}
      />
    );
  }
) as LabelComponent;
