import React, { useContext } from 'react';
import { StyledInfoContainer, StyledPlace, StyledRouteData } from './style';
import { ControlsContext } from '../../context/ControlsContext';

const Info = () => {
  const {
    currentOrigin,
    currentDestination,
    currentRouteDistance,
    currentRouteTimeTravel,
  } = useContext(ControlsContext);
  return (
    <StyledInfoContainer show={currentOrigin}>
      <StyledPlace>
        <strong>Origin</strong>: {currentOrigin}
      </StyledPlace>
      <StyledRouteData>{currentRouteDistance}</StyledRouteData>
      <StyledPlace>
        <strong>Destination</strong>: {currentDestination}
      </StyledPlace>
      <StyledRouteData>{currentRouteTimeTravel}</StyledRouteData>
    </StyledInfoContainer>
  );
};

export { Info };
