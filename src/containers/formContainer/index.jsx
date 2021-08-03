import React, { useContext } from 'react';
import { Form } from '../../components/forms';
import { ControlsContext } from '../../context/ControlsContext';

const FormContainer = () => {
  const {
    newOrigin,
    setNewOrigin,
    newDestination,
    setNewDestination,
  } = useContext(ControlsContext);

  return (
    <Form
      newOrigin={newOrigin}
      newDestination={newDestination}
      setNewOrigin={setNewOrigin}
      setNewDestination={setNewDestination}
    />
  );
};

export { FormContainer };
