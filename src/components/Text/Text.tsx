import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bold?: boolean;
}

const StyledText = styled.span<TextProps>`
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'large':
        return '24px';
      case 'medium':
      default:
        return '16px';
    }
  }};
  color: ${props => props.color || '#333'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

const Text: React.FC<TextProps> = ({ children, size = 'medium', color, bold = false, ...props }) => (
  <StyledText size={size} color={color} bold={bold} {...props}>
    {children}
  </StyledText>
);

export default Text;
