import React, { useContext } from 'react';
import { ControlsContext } from '../../context/ControlsContext';
import { Button } from '../buttons';
import { StyledForm, StyledButtonContainer } from './style';
import { InputContainer } from '../../containers/inputContainer';

const Form = ({ handleSubmit }) => {
  const { controlsState } = useContext(ControlsContext);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer
        label="Origin"
        placeholder="Select an origin"
        newPlace={controlsState.newOrigin}
      />
      <InputContainer
        label="Destination"
        placeholder="Select your destination"
        newPlace={controlsState.newDestination}
      />
      <StyledButtonContainer>
        <Button purpose="go" label="Go!" />
      </StyledButtonContainer>
    </StyledForm>
  );
};

export { Form };
