import React from 'react';
import { PlaceInput } from '../inputs';
import { Button } from '../buttons';
import { StyledForm, StyledButtonContainer } from './style';

const Form = ({
  newOrigin,
  setNewOrigin,
  newDestination,
  setNewDestination,
}) => {
  return (
    <StyledForm>
      <PlaceInput
        label="Origin"
        placeholder="Select origin"
        newPlace={newOrigin}
        setNewPlace={setNewOrigin}
      />
      <PlaceInput
        label="Destination"
        placeholder="Select your destination"
        newPlace={newDestination}
        setNewPlace={setNewDestination}
      />
      <StyledButtonContainer>
        <Button purpose="go" label="Go!" />
      </StyledButtonContainer>
    </StyledForm>
  );
};

export { Form };
