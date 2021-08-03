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
    setCurrentRouteDistance,
    setCurrentRouteTimeTravel,
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
        console.log(result);
        directionsRenderer.setDirections(result);
        setCurrentOrigin(result.routes[0].legs[0].start_address);
        setCurrentDestination(result.routes[0].legs[0].end_address);
        setCurrentRouteDistance(result.routes[0].legs[0].distance.text);
        setCurrentRouteTimeTravel(result.routes[0].legs[0].duration.text);
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
