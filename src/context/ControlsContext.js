import React, { useState } from 'react';

const ControlsContext = React.createContext(null);

const ControlsContextProvider = ({ children }) => {
  const [newOrigin, setNewOrigin] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [showFinder, setShowFinder] = useState(false);

  return (
    <ControlsContext.Provider
      value={{
        newOrigin,
        setNewOrigin,
        newDestination,
        setNewDestination,
        showFinder,
        setShowFinder,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};

export { ControlsContext, ControlsContextProvider };
