import React, { useContext } from 'react';
import { ControlsContext } from '../../context/ControlsContext';

import { Form } from '../forms';
import { StyledFinderContainer, StyledFinderBar } from './style';

const Finder = () => {
  const { showFinder, setShowFinder } = useContext(ControlsContext);
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
