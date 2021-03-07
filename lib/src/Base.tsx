import css, { SystemStyleObject } from '@styled-system/css';
import styled from 'styled-components';
import * as styledSystem from 'styled-system';
import { ForwardRefComponent } from './polymorphic';
import { AllSystemProps, all } from './system-props';

const defaultElement = 'div';

export type SxProp = {
  sx?: SystemStyleObject;
};

export type BaseProps = SxProp &
  AllSystemProps & {
    __css?: SystemStyleObject;
    __systemProps?: styledSystem.styleFn[];
  };

type BaseComponent = ForwardRefComponent<typeof defaultElement, BaseProps>;

function __css({ __css }: BaseProps) {
  return css(__css);
}

// function __systemProps({ __systemProps = [], ...props }: BaseProps) {
//   return __systemProps.flatMap(styleFn => styleFn(props));
// }

function sx({ sx }: BaseProps) {
  return css(sx);
}

export const Base = styled(defaultElement)<BaseProps>(
  __css,
  all,
  sx
) as BaseComponent;
