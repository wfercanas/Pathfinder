import React, { useState } from 'react';

import { MapContainer } from '../mapContainer';
import { Modal } from '../../components/modal';
import { ControlsContainer } from '../controlsContainer';

const MainContainer = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <MapContainer />
      <ControlsContainer />
      <Modal
        modal={modal}
        setModal={setModal}
        labels={[
          'Welcome to Pathfinder',
          "You give me two places and I'll show you the path.",
        ]}
      />
    </>
  );
};

export { MainContainer };
