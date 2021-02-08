import React from 'react';
import { Base, PublicBaseProps } from './Base';

export type InlineCodeProps = PublicBaseProps;

export function InlineCode(props: InlineCodeProps) {
  return (
    <Base
      as="code"
      {...props}
      __internalStyles={{
        padding: '0.2em 0.4em',
        bg: 'markdown.codeBg',
        fontFamily: 'mono',
        fontSize: '85%',
        borderRadius: 2,
      }}
    />
  );
}
