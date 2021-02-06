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
      <Global styles={css({ body: { margin: 0, fontFamily: 'system-ui' } })} />
      {children}
    </ThemeProvider>
  );
}
