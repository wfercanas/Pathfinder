import React, { useContext } from 'react';
import error from '../../assets/danger.svg';
import { StyledBannerContainer, StyledMessage } from './style';
import { ControlsContext } from '../../context/ControlsContext';

const Banner = () => {
  const { errorMessage } = useContext(ControlsContext);
  return (
    <StyledBannerContainer show={errorMessage}>
      <img src={error} alt="error icon" />
      <StyledMessage>{errorMessage}</StyledMessage>
    </StyledBannerContainer>
  );
};

export { Banner };
