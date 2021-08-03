import React, { useEffect, useContext } from 'react';
import { MapContext } from '../../context/MapContext';

function MapContainer() {
  const { setMap, loader } = useContext(MapContext);

  useEffect(() => {
    loader.load().then((google) => {
      const bogota = { lat: 4.624, lng: -74.063 };
      setMap(
        new google.maps.Map(document.getElementById('map'), {
          center: bogota,
          zoom: 10,
          disableDefaultUI: true,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export { MapContainer };
