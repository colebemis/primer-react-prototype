import { StandardCSSProperties } from '@styled-system/css';
import React from 'react';
import { Base, PublicBaseProps } from './Base';

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
} & PublicBaseProps;

export const ProgressBar = ({
  size = 'medium',
  ...props
}: ProgressBarProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
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

type ProgressBarItemProps = {
  percentage: number;
  bg?: StandardCSSProperties['backgroundColor'];
} & PublicBaseProps;

ProgressBar.Item = ({
  percentage,
  bg = 'bg.successInverse',
  ...props
}: ProgressBarItemProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
        width: `${percentage}%`,
        bg: bg,
      }}
    />
  );
};
