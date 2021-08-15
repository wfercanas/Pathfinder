import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAutocompleteContainer = styled.div`
  background-color: var(--n10);
  border-radius: 0.3rem;
  padding: 0.4rem;
  width: 30.2rem;
`;

const StyledAutocompleteList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledAutocompleteItem = styled.li`
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
  StyledAutocompleteItem,
};

StyledAutocompleteList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
};

StyledAutocompleteItem.propTypes = {
  children: PropTypes.string,
  key: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
};
