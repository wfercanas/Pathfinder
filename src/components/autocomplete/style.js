import styled from 'styled-components';

const StyledAutocompleteContainer = styled.div`
  background-color: var(--n10);
  border-radius: 0.3rem;
  padding: 0.4rem;
  width: 29.4rem;
`;

const StyledAutocompleteList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyleAutocompleteItem = styled.li`
  cursor: pointer;
  color: var(--n100);
  padding: 0.6rem 1.6rem;

  &:hover {
    font-weight: bold;
  }
`;

export {
  StyledAutocompleteContainer,
  StyledAutocompleteList,
  StyleAutocompleteItem,
};
