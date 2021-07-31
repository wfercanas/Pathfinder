import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  top: calc(40%);
  right: calc(50% - 13.75rem);
  padding: 1.6rem 2rem;
  width: 27.5rem;
  border-radius: 0.3rem;
  background-color: var(--b200);
  color: var(--n10);
`;

const StyledModalControls = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledModalButtons = styled.div`
  button {
    margin-left: 0.8rem;
  }
`;

export { StyledModal, StyledModalControls, StyledModalButtons };
