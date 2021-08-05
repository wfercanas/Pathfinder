import React, { useContext } from 'react';
import { Finder } from '../../components/finder';

import { ControlsContext } from '../../context/ControlsContext';

const FinderContainer = () => {
  const { controlsState, controlsDispatch } = useContext(ControlsContext);
  const toggleFinder = ({ target }) => {
    if (target.tagName === 'DIV') {
      controlsDispatch({
        type: 'setShowFinder',
        payload: !controlsState.showFinder,
      });
    }
  };

  return (
    <Finder showFinder={controlsState.showFinder} toggleFinder={toggleFinder} />
  );
};

export { FinderContainer };
