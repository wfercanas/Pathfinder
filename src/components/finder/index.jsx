import React from 'react';
import { Form } from '../forms';
import { StyledFinderContainer, StyledFinderBar } from './style';

const Finder = ({ showFinder, toggleFinder }) => {
  return (
    <StyledFinderContainer showFinder={showFinder} onClick={toggleFinder}>
      <StyledFinderBar />
      <Form />
    </StyledFinderContainer>
  );
};

export { Finder };
