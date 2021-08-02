import React from 'react';
import {
  StyleAutocompleteItem,
  StyledAutocompleteContainer,
  StyledAutocompleteList,
} from './style';

const Autocomplete = ({ options, setNewPlace }) => {
  const handleClick = (option) => {
    setNewPlace({
      description: option.description,
      place_id: option.place_id,
    });
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
