import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledButtonContainer = styled.div`
  width: 31rem;
  display: flex;
  justify-content: flex-end;
`;

export { StyledForm, StyledButtonContainer };

StyledForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
