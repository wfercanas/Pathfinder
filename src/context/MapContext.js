import React, { useState, createContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { apiKey } from '../config';

const MapContext = createContext(null);

const MapContextProvider = ({ children }) => {
  const [map, setMap] = useState();
  const [loader] = useState(
    new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places'],
    })
  );

  return (
    <MapContext.Provider value={{ map, setMap, loader }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
