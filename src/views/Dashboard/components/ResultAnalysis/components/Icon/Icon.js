import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Icon.styled';

const Icon = ({ icon, isBig }) => <Styled.Wrapper size={isBig}>{icon}</Styled.Wrapper>;

Icon.propTypes = {
  isBig: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired
};

export default Icon;
