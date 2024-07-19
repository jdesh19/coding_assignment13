import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => (props.disabled ? 'grey' : 'blue')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ label, children, disabled = false, ...props }) => (
  <StyledButton disabled={disabled} {...props}>
    {label || children}
  </StyledButton>
);

export default Button;
