import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const ControlsContext = React.createContext(null);

const initialState = {
  newOrigin: '',
  newDestination: '',
  currentOrigin: '',
  currentDestination: '',
  currentRouteDistance: '',
  currentRouteTimeTravel: '',
  errorMessage: '',
  showFinder: false,
};

const controlsReducer = (state, action) => {
  switch (action.type) {
    case 'setNewOrigin':
      return {
        ...state,
        newOrigin: action.payload,
      };
    case 'setNewDestination':
      return {
        ...state,
        newDestination: action.payload,
      };
    case 'setCurrentRoute':
      return {
        ...state,
        currentOrigin: action.payload.origin,
        currentDestination: action.payload.destination,
        currentRouteDistance: action.payload.routeDistance,
        currentRouteTimeTravel: action.payload.routeTimeTravel,
      };
    case 'resetNewOriginAndDestination':
      return {
        ...state,
        newOrigin: '',
        newDestination: '',
      };
    case 'setErrorMessage':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'setShowFinder':
      return {
        ...state,
        showFinder: action.payload,
      };
    default:
      return state;
  }
};

const ControlsContextProvider = ({ children }) => {
  const [controlsState, controlsDispatch] = useReducer(
    controlsReducer,
    initialState
  );

  return (
    <ControlsContext.Provider
      value={{
        controlsState,
        controlsDispatch,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export { ControlsContext, ControlsContextProvider };

ControlsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
