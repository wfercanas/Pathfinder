import React from 'react';
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
