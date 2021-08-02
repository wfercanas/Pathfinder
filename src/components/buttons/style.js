import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.3rem;
  color: var(--n10);
  background-color: ${({ purpose }) => {
    switch (purpose) {
      case 'modal':
        return 'var(--b400)';
      case 'go':
        return 'var(--g200)';
      default:
        return 'var(--n900)';
    }
  }};
`;

export { StyledButton };
