import React, { useEffect } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

function Map() {
  const loader = new Loader({
    apiKey: 'AIzaSyDIpChs6-EgIwHbLFYaHmy1-UYkYtsvCaA',
    version: 'weekly',
  });

  useEffect(() => {
    loader.load().then((google) => {
      const bogota = { lat: 4.624, lng: -74.063 };
      const map = new google.maps.Map(document.getElementById('root'), {
        center: bogota,
        zoom: 10,
        disableDefaultUI: true,
      });
      console.log('map:');
      console.log(map);
      let marker = new google.maps.Marker({
        position: bogota,
        map: map,
      });
      map.setMapTypeId('terrain');
      console.log('marker:');
      console.log(marker);
    });
  });

  return <></>;
}

export { Map };
