import React from 'react';
import { Base, SxProp } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { common, CommonSystemProps, forwardSystemProps } from './system-props';

const defaultElement = 'code';

export type InlineCodeProps = SxProp & CommonSystemProps;

type InlineCodeComponent = ForwardRefComponent<
  typeof defaultElement,
  InlineCodeProps
>;

export const InlineCode = React.forwardRef(
  ({ as = defaultElement, ...props }, ref) => {
    return (
      <Base
        as={as}
        ref={ref}
        {...forwardSystemProps(props, common)}
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
) as InlineCodeComponent;
