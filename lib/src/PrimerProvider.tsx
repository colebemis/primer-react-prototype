import { ThemeProvider, Global } from '@emotion/react';
import css from '@styled-system/css';
import React from 'react';
import { theme } from './theme';

type PrimerProviderProps = {
  children?: React.ReactNode;
};

export function PrimerProvider({ children }: PrimerProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* NOTE: Global styles might cause issues */}
      <Global
        styles={css({
          body: {
            margin: 0,
            color: 'text.primary',
            bg: 'bg.canvas',
            fontFamily: 'normal',
          },
        })}
      />
      {children}
    </ThemeProvider>
  );
}
