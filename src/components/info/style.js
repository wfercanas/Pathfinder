import styled from 'styled-components';

const StyledInfoContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: calc(50% - 15rem);
  width: 30rem;
  padding: 1.4rem 3rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  row-gap: 0.5rem;
  border-radius: 1.6rem;
  background-color: var(--n400a);
  color: var(--n10);
`;

const StyledPlace = styled.p``;

const StyledRouteData = styled.p`
  text-align: center;
`;

export { StyledInfoContainer, StyledPlace, StyledRouteData };