import React, { useState, useEffect, createContext } from 'react';
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

  // autocompleteService
  const [autocompleteService, setAutocompleteService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setAutocompleteService(new google.maps.places.AutocompleteService());
    });
  }, [loader]);

  return (
    <MapContext.Provider value={{ map, setMap, loader, autocompleteService }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
