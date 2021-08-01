import styled from 'styled-components';

const StyledFinderContainer = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: ${({ showFinder }) => (showFinder === false ? '-28rem' : '0')};
  transition: bottom 1s ease-out;
  border-radius: 1.6rem 1.6rem 0 0;
  display: flex;
  justify-content: center;
  padding: 4.5rem 4rem 11rem;
  background-color: var(--n400a);
`;

const StyledFinderBar = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 35%;
  width: 30%;
  height: 0.5rem;
  border-radius: 1.2rem;
  background-color: var(--n10);
`;

export { StyledFinderContainer, StyledFinderBar };
