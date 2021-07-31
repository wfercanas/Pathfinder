import React, { useState, useEffect } from 'react';
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

const PlaceInput = ({ label, placeholder, handleChange }) => {
  const [focus, setFocus] = useState(false);
  const [autocomplete, setAutocomplete] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (focus) {
      if (value && !autocomplete) {
        setAutocomplete(true);
      } else if (!value) {
        setAutocomplete(false);
      }
    } else {
      setAutocomplete(false);
    }
  }, [value, focus]);

  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={label}>{label}</StyledInputLabel>
      <StyledInputContainer>
        <StyledImage src={world} alt="world icon" />
        <StyledInput
          name={label}
          id={label}
          placeholder={placeholder}
          onChange={({ target }) => setValue(target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type="text"
          required
        />
      </StyledInputContainer>
      <StyledInputAutocomplete display={autocomplete}>
        <Autocomplete options={['dummy', 'dummy', 'dummy']} />
      </StyledInputAutocomplete>
    </StyledInputWrapper>
  );
};

export { PlaceInput };
