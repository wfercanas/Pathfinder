import React, { useContext } from 'react';
import error from '../../assets/danger.svg';
import { StyledBannerContainer, StyledMessage } from './style';
import { ControlsContext } from '../../context/ControlsContext';

const Banner = () => {
  const { controlsState } = useContext(ControlsContext);
  return (
    <StyledBannerContainer show={controlsState.errorMessage}>
      <img src={error} alt="error icon" />
      <StyledMessage>{controlsState.errorMessage}</StyledMessage>
    </StyledBannerContainer>
  );
};

export { Banner };
