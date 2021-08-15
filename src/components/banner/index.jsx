import React, { useContext } from 'react';
import { ControlsContext } from '../../context/ControlsContext';
import { StyledBannerContainer, StyledMessage } from './style';
import error from '../../assets/danger.svg';

const Banner = () => {
  const { controlsState } = useContext(ControlsContext);
  return (
    <StyledBannerContainer show={controlsState.errorMessage}>
      <img src={error} alt='error icon' />
      <StyledMessage>{controlsState.errorMessage}</StyledMessage>
    </StyledBannerContainer>
  );
};

export { Banner };