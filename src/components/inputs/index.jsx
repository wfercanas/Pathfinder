import React, { useState, useEffect, useContext } from 'react';
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
import { MapContext } from '../../context/MapContext';

const PlaceInput = ({ label, placeholder, newPlace, setNewPlace }) => {
  const [focus, setFocus] = useState(false);
  const [autocomplete, setAutocomplete] = useState(false);
  useEffect(() => {
    if (focus) {
      if (newPlace.description && !autocomplete) {
        setAutocomplete(true);
      } else if (!newPlace.description) {
        setAutocomplete(false);
      }
    } else {
      setAutocomplete(false);
    }
  }, [newPlace, focus, autocomplete]);

  const { loader } = useContext(MapContext);
  const [autocompleteService, setAutocompleteService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setAutocompleteService(new google.maps.places.AutocompleteService());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFocus = (event) => {
    if (event._reactName === 'onFocus') {
      setFocus(true);
    } else if (event._reactName === 'onBlur') {
      setTimeout(() => setFocus(false), 500);
    }
  };

  const [suggestions, setSuggestions] = useState([]);
  const handleChange = ({ target }) => {
    setNewPlace((prev) => ({ ...prev, description: target.value }));
    if (target.value) {
      autocompleteService.getQueryPredictions(
        { input: target.value },
        (predictions, status) => {
          console.log(predictions);
          setSuggestions(predictions.slice(0, 3));
        }
      );
    }
  };

  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={label}>{label}</StyledInputLabel>
      <StyledInputContainer>
        <StyledImage src={world} alt="world icon" />
        <StyledInput
          name={label}
          id={label}
          placeholder={placeholder}
          value={newPlace.description}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          type="text"
          required
        />
      </StyledInputContainer>
      <StyledInputAutocomplete display={autocomplete}>
        <Autocomplete options={suggestions} setNewPlace={setNewPlace} />
      </StyledInputAutocomplete>
    </StyledInputWrapper>
  );
};

export { PlaceInput };
