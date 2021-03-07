import React from 'react';
import { Base } from './Base';
import { ForwardRefComponent } from './polymorphic';
import { all, AllSystemProps } from './system-props';

const defaultElement = 'span';

export type TextProps = AllSystemProps;

type TextComponent = ForwardRefComponent<typeof defaultElement, TextProps>;

export const Text = React.forwardRef((props, ref) => {
  return (
    <Base as={defaultElement} ref={ref} {...props} __systemProps={[all]} />
  );
}) as TextComponent;
