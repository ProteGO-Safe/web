import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Icon.styled';

const Icon = ({ icon, isBigIcon }) => <Styled.Wrapper size={isBigIcon}>{icon}</Styled.Wrapper>;

Icon.propTypes = {
  isBigIcon: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired
};

export default Icon;
