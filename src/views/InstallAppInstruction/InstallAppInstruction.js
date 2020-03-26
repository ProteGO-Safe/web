import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import { Banner, Brand, Instruction } from '../../components';
import Background from '../../assets/img/banners/banner-1.png';
import './InstallAppInstruction.scss';

const InstallAppInstruction = ({ steps }) => {
  return (
    <div className="view view__install-app-instruction">
      <Banner background={Background}>
        <Brand content={false} small white />
      </Banner>
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
