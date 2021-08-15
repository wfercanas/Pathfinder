import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ label, purpose, handleClick }) => {
  return (
    <StyledButton purpose={purpose} type='submit' onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export { Button };

Button.propTypes = {
  label: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
