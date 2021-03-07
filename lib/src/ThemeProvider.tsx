import {
  ThemeProvider as ScThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import css from '@styled-system/css';
import React from 'react';
import { theme as defaultTheme } from './theme';

type ThemeProviderProps = {
  theme?: typeof defaultTheme;
  children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  ${css({
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
  })}
`;

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
