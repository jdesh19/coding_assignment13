import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  htmlFor?: string;
}

const StyledLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  display: inline-block;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
);

export default Label;
