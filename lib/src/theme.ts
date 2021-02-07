import primitives from '@primer/primitives';

function fontStack(fonts: string[]) {
  return fonts
    .map(font => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
}

export const theme = {
  colors: primitives.colors.dark,
  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px',
  ],
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ]),
    mono: fontStack([
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace',
    ]),
  },
  fontSizes: primitives.typography.normal.fontSize,
  lineHeights: primitives.typography.normal.lineHeight,
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  radii: ['0', '3px', '6px', '100px'],
  breakpoints: ['544px', '768px', '1012px', '1280px'],
};
