import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../../../components/Container';

const Summary = ({ onSave, onTryAgain }) => {
  return (
    <Container>
      <button onClick={onSave}>zapisz</button>
      <button onClick={onTryAgain}>powrot</button>
    </Container>
  );
};

Summary.propTypes = {
  onSave: PropTypes.func.isRequired,
  onTryAgain: PropTypes.func.isRequired
};

export default Summary;
