import React from 'react';

import { Form } from '../forms';
import { StyledFinderContainer, StyledFinderBar } from './style';

const Finder = () => {
  return (
    <StyledFinderContainer>
      <StyledFinderBar />
      <Form />
    </StyledFinderContainer>
  );
};

export { Finder };
