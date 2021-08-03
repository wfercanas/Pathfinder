import React from 'react';
import { Button } from '../buttons';
import { StyledForm, StyledButtonContainer } from './style';
import { InputContainer } from '../../containers/inputContainer';

const Form = ({
  newOrigin,
  setNewOrigin,
  newDestination,
  setNewDestination,
  handleSubmit,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer
        label="Origin"
        placeholder="Select origin"
        newPlace={newOrigin}
        setNewPlace={setNewOrigin}
      />
      <InputContainer
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
