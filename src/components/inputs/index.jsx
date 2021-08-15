import React from 'react';
import PropTypes from 'prop-types';
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
  handleChange,
  handleFocus,
  suggestions,
  autocomplete,
}) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={label}>{label}</StyledInputLabel>
      <StyledInputContainer>
        <StyledImage src={world} alt='world icon' />
        <StyledInput
          name={label}
          id={label}
          placeholder={placeholder}
          value={newPlace}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          type='text'
          required
        />
      </StyledInputContainer>
      <StyledInputAutocomplete show={autocomplete}>
        <Autocomplete options={suggestions} label={label} />
      </StyledInputAutocomplete>
    </StyledInputWrapper>
  );
};

export { Input };

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newPlace: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  autocomplete: PropTypes.bool.isRequired,
};
