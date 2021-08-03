import styled from 'styled-components';

const StyledBannerContainer = styled.div`
  position: fixed;
  top: 0.5rem;
  width: 80%;
  max-width: 46rem;
  padding: 1.4rem 3rem;
  display: ${({ show }) => (show === '' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: var(--r400);
  color: var(--n10);
  z-index: 1;
`;

const StyledMessage = styled.p`
  margin: 0.4rem;
`;

export { StyledBannerContainer, StyledMessage };
