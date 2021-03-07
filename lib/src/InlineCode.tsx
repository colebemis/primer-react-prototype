import React from 'react';
import { Base } from './Base';

export type InlineCodeProps = { children?: React.ReactNode };

export function InlineCode(props: InlineCodeProps) {
  return (
    <Base
      as="code"
      {...props}
      __css={{
        padding: '0.2em 0.4em',
        bg: 'markdown.codeBg',
        fontFamily: 'mono',
        fontSize: '85%',
        borderRadius: 2,
      }}
    />
  );
}
