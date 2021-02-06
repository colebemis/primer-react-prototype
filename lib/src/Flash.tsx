import React from 'react';
import { Base, BaseProps } from './Base';

export type FlashProps = {
  variant?: 'info' | 'success';
  children?: React.ReactNode;
} & BaseProps;

export const Flash = ({ variant = 'info', ...props }: FlashProps) => {
  return <Base {...props} />;
};

Flash.Foo = (props: { bar: string }) => {
  return <div />;
};
