import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Icon.styled';

const Icon = ({ icon }) => <Styled.Wrapper>{icon}</Styled.Wrapper>;

Icon.propTypes = {
  icon: PropTypes.node.isRequired
};

export default Icon;
