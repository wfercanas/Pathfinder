import React from 'react';

import { Form } from '../forms';
import { StyledFinderContainer, StyledFinderBar } from './style';

const Finder = ({ showFinder, setShowFinder }) => {
  const toggleFinder = ({ target }) => {
    if (target.tagName === 'DIV') {
      setShowFinder(!showFinder);
    }
  };

  return (
    <StyledFinderContainer showFinder={showFinder} onClick={toggleFinder}>
      <StyledFinderBar />
      <Form />
    </StyledFinderContainer>
  );
};

export { Finder };
