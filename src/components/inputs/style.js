import styled from 'styled-components';

const StyledInputLabel = styled.label`
  color: var(--n10);
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const StyledInputContainer = styled.div`
  margin-top: 0.6rem;
  padding: 0.2rem 0.6rem;
  width: 29.4rem;
  display: flex;
  align-items: center;
  background-color: var(--n10);
  border: 0.2rem solid var(--n40);
  border-radius: 0.3rem;
`;

const StyledImage = styled.img`
  margin-right: 0.6rem;
`;

const StyledInput = styled.input`
  border: none;
  width: 80%;
  background-color: transparent;
  color: var(-n100);

  &:focus {
    outline: none;
  }
`;

export { StyledInputLabel, StyledInputContainer, StyledImage, StyledInput };
