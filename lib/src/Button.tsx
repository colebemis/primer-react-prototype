import React from 'react';
import { Base, PublicBaseProps } from './Base';

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

export type ButtonProps = { variant?: keyof typeof variants } & PublicBaseProps;

export function Button({ variant = 'default', ...props }: ButtonProps) {
  return (
    <Base
      as="button"
      {...props}
      __internalStyles={{
        display: 'inline-block',
        paddingY: '5px',
        paddingX: 3,
        fontFamily: 'inherit',
        fontWeight: 'semibold',
        fontSize: 1,
        lineHeight: '20px',
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
