import React, { useState } from 'react';

const ControlsContext = React.createContext(null);

const ControlsContextProvider = ({ children }) => {
  const [newOrigin, setNewOrigin] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [currentOrigin, setCurrentOrigin] = useState('');
  const [currentDestination, setCurrentDestination] = useState('');
  const [currentRouteDistance, setCurrentRouteDistance] = useState('');
  const [currentRouteTimeTravel, setCurrentRouteTimeTravel] = useState('');
  const [showFinder, setShowFinder] = useState(false);

  return (
    <ControlsContext.Provider
      value={{
        newOrigin,
        setNewOrigin,
        newDestination,
        setNewDestination,
        currentOrigin,
        setCurrentOrigin,
        currentDestination,
        setCurrentDestination,
        showFinder,
        setShowFinder,
        currentRouteDistance,
        setCurrentRouteDistance,
        currentRouteTimeTravel,
        setCurrentRouteTimeTravel
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export { ControlsContext, ControlsContextProvider };
