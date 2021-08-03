import styled from 'styled-components';

const StyledInfoContainer = styled.div`
  position: fixed;
  top: ${({ verticalSpace }) => (verticalSpace === '' ? '1rem' : '7rem')};
  width: 80%;
  max-width: 46rem;
  padding: 1.4rem 3rem;
  display: ${({ show }) => (show !== '' ? 'grid' : 'none')};
  grid-template-columns: 4fr 1fr;
  row-gap: 0.5rem;
  border-radius: 1.6rem;
  background-color: var(--n400a);
  color: var(--n10);
`;

const StyledPlace = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRouteData = styled.p`
  display: flex;
  text-align: end;
  justify-self: end;
  align-items: center;
`;

export { StyledInfoContainer, StyledPlace, StyledRouteData };
