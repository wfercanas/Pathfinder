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

  // create the directionsService
  const [directionsService, setDirectionsService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setDirectionsService(new google.maps.DirectionsService());
    });
  }, [loader]);

  // create the directionsRenderer
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setDirectionsRenderer(new google.maps.DirectionsRenderer());
    });
  }, [loader, map]);

  // Attach directionsRenderer to the map
  useEffect(() => {
    if (directionsRenderer) {
      directionsRenderer.setMap(map);
    }
  }, [directionsRenderer, map]);

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        loader,
        autocompleteService,
        geocoderService,
        directionsService,
        directionsRenderer,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
