import React from 'react';
import {
  StyleAutocompleteItem,
  StyledAutocompleteContainer,
  StyledAutocompleteList,
} from './style';

const Autocomplete = ({ options, handleClick }) => {
  return (
    <StyledAutocompleteContainer>
      <StyledAutocompleteList>
        {options.map((option, index) => (
          <StyleAutocompleteItem key={index} onClick={handleClick}>
            {option}
          </StyleAutocompleteItem>
        ))}
      </StyledAutocompleteList>
    </StyledAutocompleteContainer>
  );
};

export { Autocomplete };
