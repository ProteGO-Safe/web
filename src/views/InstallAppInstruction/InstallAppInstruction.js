import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import { Instruction } from '../../components';
import './InstallAppInstruction.scss';
import { Header } from '../../components/Header';

const InstallAppInstruction = ({ steps }) => {
  return (
    <div className="view view__install-app-instruction">
      <Header />
      <Container>
        <Instruction steps={steps} />
      </Container>
    </div>
  );
};

InstallAppInstruction.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InstallAppInstruction;
