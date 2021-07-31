import React from 'react';
import error from '../../assets/danger.svg';
import { StyledBannerContainer, StyledMessage } from './style';

const Banner = ({ message }) => {
  return (
    <StyledBannerContainer>
      <img src={error} alt="error icon" />
      <StyledMessage>{message}</StyledMessage>
    </StyledBannerContainer>
  );
};

export { Banner };
