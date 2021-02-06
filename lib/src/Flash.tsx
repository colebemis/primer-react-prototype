import React from 'react';
import { Base, BaseProps } from './Base';

export type FlashProps = {
  variant?: 'info' | 'success';
  children?: React.ReactNode;
} & Omit<BaseProps, '__internalStyles'>;

export const Flash = ({ variant = 'info', ...props }: FlashProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
        padding: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
      }}
    />
  );
};
