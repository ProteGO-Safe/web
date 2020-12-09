import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Color.styled';

const Color = ({ children, color }) => <Styled.Color color={color}>{children}</Styled.Color>;

Color.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};

export default Color;
