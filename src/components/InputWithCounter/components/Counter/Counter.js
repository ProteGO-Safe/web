import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Counter.styled';

const Counter = ({ count, limit }) => (
  <Styled.Counter count={count}>
    {count}/{limit}
  </Styled.Counter>
);

Counter.defaultProps = {
  count: 0
};

Counter.propTypes = {
  count: PropTypes.number,
  limit: PropTypes.number.isRequired
};

export default Counter;
