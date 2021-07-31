import React from 'react';
import world from '../../assets/world.svg';
import {
  StyledInputLabel,
  StyledInputContainer,
  StyledImage,
  StyledInput,
} from './style';

const PlaceInput = ({ label, placeholder, handleChange }) => {
  return (
    <>
      <StyledInputLabel htmlFor={label}>{label}</StyledInputLabel>
      <StyledInputContainer>
        <StyledImage src={world} alt="world icon" />
        <StyledInput
          name={label}
          id={label}
          placeholder={placeholder}
          onChange={handleChange}
          type="text"
          required
        />
      </StyledInputContainer>
    </>
  );
};

export { PlaceInput };
