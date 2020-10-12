import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './StatusItem.styled';

const StatusItem = ({ handleClick, name, status }) => (
  <Styled.StatusItem>
    <Styled.Status status={status} />
    <Styled.Name>{name}</Styled.Name>
    {handleClick && <Styled.Action onClick={handleClick} />}
  </Styled.StatusItem>
);

StatusItem.defaultProps = {
  handleClick: null
};

StatusItem.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired
};

export default StatusItem;
