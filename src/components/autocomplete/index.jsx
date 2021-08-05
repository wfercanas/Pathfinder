import React, { useContext } from 'react';
import { ControlsContext } from '../../context/ControlsContext';
import {
  StyleAutocompleteItem,
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
          <StyleAutocompleteItem
            key={index}
            onClick={() => handleClick(option)}
          >
            {option.description}
          </StyleAutocompleteItem>
        ))}
      </StyledAutocompleteList>
    </StyledAutocompleteContainer>
  );
};

export { Autocomplete };
