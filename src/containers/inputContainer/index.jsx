import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContext } from '../../context/MapContext';
import { ControlsContext } from '../../context/ControlsContext';
import { Input } from '../../components/inputs';

const InputContainer = ({ label, placeholder, newPlace }) => {
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
  const { controlsDispatch } = useContext(ControlsContext);
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = ({ target }) => {
    if (label === 'Origin') {
      controlsDispatch({ type: 'setNewOrigin', payload: target.value });
    } else {
      controlsDispatch({ type: 'setNewDestination', payload: target.value });
    }
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
      handleChange={handleChange}
      handleFocus={handleFocus}
      suggestions={suggestions}
      autocomplete={autocomplete}
    />
  );
};

export { InputContainer };

InputContainer.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newPlace: PropTypes.string.isRequired,
};
