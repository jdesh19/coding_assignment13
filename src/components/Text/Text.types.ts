import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bold?: boolean;
}
