import React, { useState } from 'react';

import { Map } from '../map';
import { Modal } from '../../components/modal';
import { Controls } from '../controls';

const MainContainer = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <Map />
      <Controls />  
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
