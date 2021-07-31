import React from 'react';
import { StyledButton } from './style';

const Button = ({ label, type }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export { Button };
