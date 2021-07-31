import React from 'react';
import { StyledInfoContainer, StyledPlace, StyledRouteData } from './style';

const Info = ({ origin, destination, distance, travelTime }) => {
  return (
    <StyledInfoContainer>
      <StyledPlace>
        <strong>Origin</strong>: {origin}
      </StyledPlace>
      <StyledRouteData>{distance}</StyledRouteData>
      <StyledPlace>
        <strong>Destination</strong>: {destination}
      </StyledPlace>
      <StyledRouteData>{travelTime}</StyledRouteData>
    </StyledInfoContainer>
  );
};

export { Info };
