import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: Array<{ label: string; value: string }>;
  selectedValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? '#f9f9f9' : '#fff')};
  color: ${props => (props.disabled ? '#aaa' : '#333')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, placeholder, disabled = false, onChange }) => (
  <StyledSelect value={selectedValue} disabled={disabled} onChange={onChange}>
    {placeholder && <option value="" disabled>{placeholder}</option>}
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
