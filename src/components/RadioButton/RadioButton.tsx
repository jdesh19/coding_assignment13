import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const StyledLabel = styled.label<Pick<RadioButtonProps, 'disabled'>>`
  color: ${props => (props.disabled ? '#aaa' : '#333')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked = false, disabled = false, onChange }) => (
  <Wrapper>
    <StyledInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <StyledLabel disabled={disabled}>
      {label}
    </StyledLabel>
  </Wrapper>
);

export default RadioButton;
