import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Error.styled';

const Error = ({ id, text }) => <Styled.Error data-cy={id}>{text}</Styled.Error>;

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error;
