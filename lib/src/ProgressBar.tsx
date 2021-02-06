import React from 'react';
import { Base, BaseProps } from './Base';

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
  children?: React.ReactNode;
} & Omit<BaseProps, '__internalStyles'>;

export const ProgressBar = ({
  size = 'medium',
  ...props
}: ProgressBarProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
        display: 'flex',
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
} & Omit<BaseProps, '__internalStyles'>;

ProgressBar.Item = ({ percentage, ...props }: ProgressBarItemProps) => {
  return (
    <Base
      {...props}
      __internalStyles={{
        width: `${percentage}%`,
        bg: 'text.success',
      }}
    />
  );
};
