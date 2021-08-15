import React, { useState, useEffect, createContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';

const MapContext = createContext(null);

const MapContextProvider = ({ children }) => {
  const [map, setMap] = useState();
  const [loader] = useState(
    new Loader({
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      version: 'weekly',
      libraries: ['places', 'geocoder'],
    })
  );

  const [autocompleteService, setAutocompleteService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setAutocompleteService(new google.maps.places.AutocompleteService());
    });
  }, [loader]);

  const [geocoderService, setGeocoderService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setGeocoderService(new google.maps.Geocoder());
    });
  }, [loader]);

  const [directionsService, setDirectionsService] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setDirectionsService(new google.maps.DirectionsService());
    });
  }, [loader]);

  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  useEffect(() => {
    loader.load().then((google) => {
      setDirectionsRenderer(new google.maps.DirectionsRenderer());
    });
  }, [loader, map]);
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

MapContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
