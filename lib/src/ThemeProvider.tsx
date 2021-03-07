import {
  ThemeProvider as ScThemeProvider,
  createGlobalStyle,
} from 'styled-components';
// import css from '@styled-system/css';
import React from 'react';
import { theme as defaultTheme } from './theme';

type ThemeProviderProps = {
  theme?: typeof defaultTheme;
  children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    color: ${props =>
      // @ts-ignore
      props.theme.colors.text.primary};
    background-color: ${props =>
      // @ts-ignore
      props.theme.colors.bg.canvas};
    line-height: ${props =>
      // @ts-ignore
      props.theme.lineHeights.default};
    box-sizing: border-box;
  }
`;
/* ${css({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    color: 'text.primary',
    bg: 'bg.canvas',
    fontFamily: 'normal',
    lineHeight: 'default',
    boxSizing: 'border-box',
  },
})} */

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <ScThemeProvider theme={theme}>
      {/* NOTE: Global styles might cause issues */}
      <GlobalStyle />
      {children}
    </ScThemeProvider>
  );
}
