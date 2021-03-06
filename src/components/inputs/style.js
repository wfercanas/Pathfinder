import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInputWrapper = styled.div`
  position: relative;
`;

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
  color: var(--n200);

  &:focus {
    outline: none;
  }
`;

const StyledInputAutocomplete = styled.div`
  position: absolute;
  z-index: 1;
  top: 5.6rem;
  display: ${({ show }) => (show === false ? 'none' : 'block')};
`;

export {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputContainer,
  StyledImage,
  StyledInput,
  StyledInputAutocomplete,
};

StyledInputLabel.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

StyledImage.propTypes = {
  src: PropTypes.string.isRequired,
};

StyledInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

StyledInputAutocomplete.propTypes = {
  show: PropTypes.bool.isRequired,
};
