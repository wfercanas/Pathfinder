import React, { useState, useEffect, useContext } from 'react';
import { MapContext } from '../../context/MapContext';
import { Input } from '../../components/inputs';

const InputContainer = ({ label, placeholder, newPlace, setNewPlace }) => {
  // Control input focus and blur ---------------------------------------------
  const [focus, setFocus] = useState(false);
  const handleFocus = (event) => {
    if (event._reactName === 'onFocus') {
      setFocus(true);
    } else if (event._reactName === 'onBlur') {
      setTimeout(() => setFocus(false), 500);
    }
  };

  // Toggle autocomplete depending on input focus or blur ---------------------
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

  const { autocompleteService } = useContext(MapContext);
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = ({ target }) => {
    setNewPlace(target.value);
    if (target.value) {
      autocompleteService.getQueryPredictions(
        { input: target.value },
        (predictions, status) => {
          if (status === 'OK') {
            setSuggestions(predictions.slice(0, 3));
          }
        }
      );
    }
  };

  return (
    <Input
      label={label}
      placeholder={placeholder}
      newPlace={newPlace}
      autocomplete={autocomplete}
      setNewPlace={setNewPlace}
      handleFocus={handleFocus}
      handleChange={handleChange}
      suggestions={suggestions}
    />
  );
};

export { InputContainer };
