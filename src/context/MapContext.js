import React, { useState, createContext } from 'react';

const MapContext = createContext(null);

const MapContextProvider = ({ children }) => {
  const [map, setMap] = useState();

  return (
    <MapContext.Provider value={[map, setMap]}>{children}</MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
