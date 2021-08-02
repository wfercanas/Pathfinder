import React, { useState } from 'react';

const ControlsContext = React.createContext(null);

const ControlsContextProvider = ({ children }) => {
  const [newOrigin, setNewOrigin] = useState({
    description: '',
    place_id: '',
  });
  const [newDestination, setNewDestination] = useState({
    description: '',
    place_id: '',
  });
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
