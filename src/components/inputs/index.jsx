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

const PlaceInput = ({ label, placeholder, newPlace, setNewPlace }) => {
  const [focus, setFocus] = useState(false);
  const [autocomplete, setAutocomplete] = useState(false);

  useEffect(() => {
    if (focus) {
      if (newPlace && !autocomplete) {
        setAutocomplete(true);
      } else if (!newPlace) {
        setAutocomplete(false);
      }
    } else {
      setAutocomplete(false);
    }
  }, [newPlace, focus, autocomplete]);

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
          onChange={({ target }) => setNewPlace(target.value)}
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
