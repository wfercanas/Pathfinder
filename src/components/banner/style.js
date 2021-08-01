import styled from 'styled-components';

const StyledBannerContainer = styled.div`
  position: fixed;
  top: 1rem;
  width: 30rem;
  padding: 1.4rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--r400);
  color: var(--n10);
`;

const StyledMessage = styled.p`
  margin: 0.4rem;
`;

export { StyledBannerContainer, StyledMessage };
