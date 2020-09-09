import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Error.styled';

const Error = ({ text }) => <Styled.Error>{text}</Styled.Error>;

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error;
