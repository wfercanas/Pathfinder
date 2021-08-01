import React, { useState } from 'react';

import { StyledMain } from './style';
import { Map } from '../map';
import { Modal } from '../../components/modal';

const MainContainer = () => {
  const [modal, setModal] = useState(true);

  return (
    <StyledMain>
      <Modal
        modal={modal}
        setModal={setModal}
        labels={[
          'Welcome to Pathfinder',
          "You give me two places and I'll show you the path.",
        ]}
      />
      <Map />
    </StyledMain>
  );
};

export { MainContainer };
