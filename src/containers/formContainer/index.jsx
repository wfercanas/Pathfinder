import React, { useContext } from 'react';
import { Form } from '../../components/forms';
import { ControlsContext } from '../../context/ControlsContext';
import { MapContext } from '../../context/MapContext';

const FormContainer = () => {
  const { controlsState, controlsDispatch } = useContext(ControlsContext);
  const { directionsService, directionsRenderer } = useContext(MapContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (controlsState.newOrigin && controlsState.newDestination) {
      const request = {
        origin: controlsState.newOrigin,
        destination: controlsState.newDestination,
        travelMode: 'DRIVING',
      };
      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
          const data = result.routes[0].legs[0];
          controlsDispatch({
            type: 'setCurrentRoute',
            payload: {
              origin: data.start_address,
              destination: data.end_address,
              routeDistance: data.distance.text,
              routeTimeTravel: data.duration.text,
            },
          });
          controlsDispatch({
            type: 'resetNewOriginAndDestination',
            payload: {},
          });
          if (controlsState.errorMessage) {
            controlsDispatch({ type: 'setErrorMessage', payload: '' });
          }
        } else {
          controlsDispatch({
            type: 'setErrorMessage',
            payload: 'Route Not Found - Please try a new one',
          });
        }
      });
    }
  };

  return <Form handleSubmit={handleSubmit} />;
};

export { FormContainer };
