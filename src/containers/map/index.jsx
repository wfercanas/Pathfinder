import React, { useEffect, useContext } from 'react';
import { MapContext } from '../../context/MapContext';

import { Loader } from '@googlemaps/js-api-loader';

function Map() {
  const [map, setMap] = useContext(MapContext);

  const loader = new Loader({
    apiKey: 'AIzaSyDIpChs6-EgIwHbLFYaHmy1-UYkYtsvCaA',
    version: 'weekly',
  });
  const bogota = { lat: 4.624, lng: -74.063 };

  useEffect(() => {
    loader.load().then((google) => {
      setMap(
        new google.maps.Map(document.getElementById('map'), {
          center: bogota,
          zoom: 10,
          disableDefaultUI: true,
        })
      );
    });
  }, []);

  // useEffect(() => {
  //   loader.load().then((google) => {
  //     let marker = new google.maps.Marker({
  //       position: bogota,
  //       map: map,
  //     });
  //   });
  // });

  return <></>;
}

export { Map };
