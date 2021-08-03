import React from 'react';

import { Banner } from '../../components/banner';
import { Info } from '../../components/info';
import { ControlsContextProvider } from '../../context/ControlsContext';
import { FinderContainer } from '../finderContainer';

const ControlsContainer = () => {
  return (
    <ControlsContextProvider>
      <Banner />
      <Info />
      <FinderContainer />
    </ControlsContextProvider>
  );
};

export { ControlsContainer };
