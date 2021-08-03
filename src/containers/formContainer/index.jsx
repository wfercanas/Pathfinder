import React, { useContext } from 'react';
import { Form } from '../../components/forms';
import { ControlsContext } from '../../context/ControlsContext';
import { MapContext } from '../../context/MapContext';

const FormContainer = () => {
  const {
    newOrigin,
    setNewOrigin,
    newDestination,
    setNewDestination,
    setCurrentOrigin,
    setCurrentDestination,
  } = useContext(ControlsContext);

  const { directionsService, directionsRenderer } = useContext(MapContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newOrigin && newDestination) {
      const request = {
        origin: newOrigin,
        destination: newDestination,
        travelMode: 'DRIVING',
      };
      directionsService.route(request, (result, status) => {
        directionsRenderer.setDirections(result);
        setCurrentOrigin(newOrigin);
        setCurrentDestination(newDestination);
        setNewOrigin('');
        setNewDestination('');
      });
    }
  };

  return (
    <Form
      newOrigin={newOrigin}
      newDestination={newDestination}
      setNewOrigin={setNewOrigin}
      setNewDestination={setNewDestination}
      handleSubmit={handleSubmit}
    />
  );
};

export { FormContainer };
