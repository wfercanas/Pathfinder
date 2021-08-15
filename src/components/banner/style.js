import styled from 'styled-components';
import PropTypes from 'prop-types';

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

StyledBannerContainer.propTypes = {
  show: PropTypes.string.isRequired,
};

StyledMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
