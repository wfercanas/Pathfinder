import React from 'react';
import world from '../../assets/world.svg';
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputContainer,
  StyledImage,
  StyledInput,
  StyledInputAutocomplete,
} from './style';
import { Autocomplete } from '../autocomplete';

const Input = ({
  label,
  placeholder,
  newPlace,
  setNewPlace,
  handleChange,
  handleFocus,
  suggestions,
  autocomplete,
}) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={label}>{label}</StyledInputLabel>
      <StyledInputContainer>
        <StyledImage src={world} alt="world icon" />
        <StyledInput
          name={label}
          id={label}
          placeholder={placeholder}
          value={newPlace}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          type="text"
          required
        />
      </StyledInputContainer>
      <StyledInputAutocomplete show={autocomplete}>
        <Autocomplete options={suggestions} setNewPlace={setNewPlace} />
      </StyledInputAutocomplete>
    </StyledInputWrapper>
  );
};

export { Input };
