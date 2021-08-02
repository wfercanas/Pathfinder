import React from 'react';

import { Banner } from '../../components/banner';
import { Info } from '../../components/info';
import { Finder } from '../../components/finder';
import { ControlsContextProvider } from '../../context/ControlsContext';

const Controls = () => {
  return (
    <ControlsContextProvider>
      <Banner />
      <Info />
      <Finder />
    </ControlsContextProvider>
  );
};

export { Controls };
