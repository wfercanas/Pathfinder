import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ControlsContext } from '../../context/ControlsContext';
import {
  StyledAutocompleteItem,
  StyledAutocompleteContainer,
  StyledAutocompleteList,
} from './style';

const Autocomplete = ({ options, label }) => {
  const { controlsDispatch } = useContext(ControlsContext);
  const handleClick = (option) => {
    if (label === 'Origin') {
      controlsDispatch({ type: 'setNewOrigin', payload: option.description });
    } else {
      controlsDispatch({
        type: 'setNewDestination',
        payload: option.description,
      });
    }
  };

  return (
    <StyledAutocompleteContainer>
      <StyledAutocompleteList>
        {options.map((option, index) => (
          <StyledAutocompleteItem
            key={index}
            onClick={() => handleClick(option)}
          >
            {option.description}
          </StyledAutocompleteItem>
        ))}
      </StyledAutocompleteList>
    </StyledAutocompleteContainer>
  );
};

export { Autocomplete };

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
