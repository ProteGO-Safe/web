import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './StatusItem.styled';

const StatusItem = ({ handleClick, id, name, status, isShadow }) => (
  <Styled.StatusItem shadow={isShadow}>
    <Styled.Status status={status} />
    <Styled.Name>{name}</Styled.Name>
    {handleClick && <Styled.Action onClick={() => handleClick(id)} />}
  </Styled.StatusItem>
);

StatusItem.defaultProps = {
  handleClick: null,
  isShadow: false
};

StatusItem.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  isShadow: PropTypes.bool
};

export default StatusItem;
