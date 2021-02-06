import { ThemeProvider } from '@emotion/react';
import React from 'react';

type PrimerProviderProps = {
  children?: React.ReactNode;
};

export function PrimerProvider({ children }: PrimerProviderProps) {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
}
