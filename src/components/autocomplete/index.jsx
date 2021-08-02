import React from 'react';
import {
  StyleAutocompleteItem,
  StyledAutocompleteContainer,
  StyledAutocompleteList,
} from './style';

const Autocomplete = ({ options, setNewPlace }) => {
  return (
    <StyledAutocompleteContainer>
      <StyledAutocompleteList>
        {options.map((option, index) => (
          <StyleAutocompleteItem
            key={index}
            onClick={() => setNewPlace(option)}
          >
            {option.description}
          </StyleAutocompleteItem>
        ))}
      </StyledAutocompleteList>
    </StyledAutocompleteContainer>
  );
};

export { Autocomplete };
