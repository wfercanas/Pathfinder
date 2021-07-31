import React from 'react';
import { StyledButton } from './style';

const Button = ({ label, type, handleClick }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export { Button };
