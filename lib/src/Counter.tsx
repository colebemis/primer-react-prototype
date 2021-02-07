import React from 'react';
import { Base, PublicBaseProps } from './Base';

export type CounterProps = PublicBaseProps;

export function Counter(props: CounterProps) {
  return (
    <Base
      as="span"
      {...props}
      __internalStyles={{
        display: 'inline-block',
        padding: '0 6px',
        color: 'counter.text',
        bg: 'counter.bg',
        fontSize: 0,
        fontWeight: 'semibold',
        lineHeight: '18px',
        border: '1px solid transparent',
        borderRadius: 3,
      }}
    />
  );
}
