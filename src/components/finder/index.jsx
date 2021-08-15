import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from '../../containers/formContainer';
import { StyledFinderContainer, StyledFinderBar } from './style';

const Finder = ({ showFinder, toggleFinder }) => {
  return (
    <StyledFinderContainer showFinder={showFinder} onClick={toggleFinder}>
      <StyledFinderBar />
      <FormContainer />
    </StyledFinderContainer>
  );
};

export { Finder };

Finder.propTypes = {
  showFinder: PropTypes.bool.isRequired,
  toggleFinder: PropTypes.func.isRequired,
};
