import React from 'react';
import { StyledButton } from './style';

const Button = ({ label, purpose, handleClick }) => {
  return (
    <StyledButton purpose={purpose} type="submit" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export { Button };
