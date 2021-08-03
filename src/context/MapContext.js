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
      libraries: ['places', 'geocoder'],
    })
  );

  // create the autocompleteService
  const [autocompleteService, setAutocompleteService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setAutocompleteService(new google.maps.places.AutocompleteService());
    });
  }, [loader]);

  // create the geocoderService
  const [geocoderService, setGeocoderService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setGeocoderService(new google.maps.Geocoder());
    });
  }, [loader]);

  return (
    <MapContext.Provider
      value={{ map, setMap, loader, autocompleteService, geocoderService }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
