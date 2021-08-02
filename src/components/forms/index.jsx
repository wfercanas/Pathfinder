import React, { useContext } from 'react';
import { PlaceInput } from '../inputs';
import { StyledForm, StyledButtonContainer } from './style';
import { Button } from '../buttons';
import { ControlsContext } from '../../context/ControlsContext';

const Form = () => {
  const {
    newOrigin,
    setNewOrigin,
    newDestination,
    setNewDestination,
  } = useContext(ControlsContext);
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
