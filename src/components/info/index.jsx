import React, { useContext } from 'react';
import { StyledInfoContainer, StyledPlace, StyledRouteData } from './style';
import { ControlsContext } from '../../context/ControlsContext';

const Info = () => {
  const { controlsState } = useContext(ControlsContext);
  return (
    <StyledInfoContainer
      show={controlsState.currentOrigin}
      verticalSpace={controlsState.errorMessage}
    >
      <StyledPlace>
        <strong>Origin:</strong> {controlsState.currentOrigin}
      </StyledPlace>
      <StyledRouteData>{controlsState.currentRouteDistance}</StyledRouteData>
      <StyledPlace>
        <strong>Destination:</strong> {controlsState.currentDestination}
      </StyledPlace>
      <StyledRouteData>{controlsState.currentRouteTimeTravel}</StyledRouteData>
    </StyledInfoContainer>
  );
};

export { Info };
