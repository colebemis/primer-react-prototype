import React from 'react';
import { backgroundColor, BackgroundColorProps } from 'styled-system';
import { Base } from './Base';

const sizes = {
  small: {
    height: 4,
  },
  medium: {
    height: 8,
  },
  large: {
    height: 16,
  },
};

export type ProgressBarProps = {
  size?: keyof typeof sizes;
};

export const ProgressBar = ({
  size = 'medium',
  ...props
}: ProgressBarProps) => {
  return (
    <Base
      {...props}
      __css={{
        display: 'flex',
        gap: '2px',
        bg: 'bg.tertiary',
        overflow: 'hidden',
        borderRadius: 2,
        ...sizes[size],
      }}
    />
  );
};

export type ProgressBarItemProps = BackgroundColorProps & {
  percentage: number;
};

ProgressBar.Item = ({ percentage, ...props }: ProgressBarItemProps) => {
  return (
    <Base
      {...props}
      __css={{
        width: `${percentage}%`,
        bg: 'bg.successInverse',
      }}
      __systemProps={[backgroundColor]}
    />
  );
};
