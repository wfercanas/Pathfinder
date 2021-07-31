import React from 'react';
import { PlaceInput } from '../inputs';
import { StyledForm, StyledButtonContainer } from './style';
import { Button } from '../buttons';

const Form = () => {
  return (
    <StyledForm>
      <PlaceInput label="Origin" placeholder="Select origin" />
      <PlaceInput label="Destination" placeholder="Select your destination" />
      <StyledButtonContainer>
        <Button type="go" label="Go!" />
      </StyledButtonContainer>
    </StyledForm>
  );
};

export { Form };
