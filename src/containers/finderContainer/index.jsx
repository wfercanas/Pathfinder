import React, { useContext } from 'react';
import { Finder } from '../../components/finder';

import { ControlsContext } from '../../context/ControlsContext';

const FinderContainer = () => {
  const { showFinder, setShowFinder } = useContext(ControlsContext);
  const toggleFinder = ({ target }) => {
    if (target.tagName === 'DIV') {
      setShowFinder(!showFinder);
    }
  };

  return <Finder showFinder={showFinder} toggleFinder={toggleFinder} />;
};

export { FinderContainer };
