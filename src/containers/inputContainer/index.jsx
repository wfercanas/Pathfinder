import React, { useState, useEffect, useContext } from 'react';
import { MapContext } from '../../context/MapContext';
import { Input } from '../../components/inputs';

const InputContainer = ({ label, placeholder, newPlace, setNewPlace }) => {
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
    setNewPlace(target.value);
    if (target.value) {
      autocompleteService.getQueryPredictions(
        { input: target.value },
        (predictions, status) => {
          setSuggestions(predictions.slice(0, 3));
        }
      );
    }
  };

  return (
    <Input
      label={label}
      placeholder={placeholder}
      newPlace={newPlace}
      setNewPlace={setNewPlace}
      handleFocus={handleFocus}
      handleChange={handleChange}
      suggestions={suggestions}
      autocomplete={autocomplete}
    />
  );
};

export { InputContainer };
