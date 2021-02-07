import React from 'react';
import { Base, PublicBaseProps } from './Base';

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

export type FlashProps = {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
} & PublicBaseProps;

export const Flash = ({ variant = 'info', ...props }: FlashProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
        padding: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
        ...variants[variant],
      }}
    />
  );
};
