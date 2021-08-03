import React, { useState } from 'react';

const ControlsContext = React.createContext(null);

const ControlsContextProvider = ({ children }) => {
  const [newOrigin, setNewOrigin] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [currentOrigin, setCurrentOrigin] = useState('');
  const [currentDestination, setCurrentDestination] = useState('');
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
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export { ControlsContext, ControlsContextProvider };
