import React, { useState } from 'react';

import { Banner } from '../../components/banner';
import { Info } from '../../components/info';
import { Finder } from '../../components/finder';

const Controls = () => {
  const [showFinder, setShowFinder] = useState(false);

  return (
    <>
      <Banner />
      <Info />
      <Finder showFinder={showFinder} setShowFinder={setShowFinder} />
    </>
  );
};

export { Controls };
