import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SubscribeItem.styled';

const SubscribeItem = ({ handleClick, name, status, subscribed }) => {
  const onClick = () => {
    handleClick();
  };

  return (
    <Styled.SubscribeItem onClick={onClick}>
      <Styled.Status status={status} />
      <Styled.Name active={subscribed}>{name}</Styled.Name>
      <Styled.Action active={subscribed} className={subscribed && 'active'} />
    </Styled.SubscribeItem>
  );
};

SubscribeItem.defaultProps = {
  subscribed: false
};

SubscribeItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  subscribed: PropTypes.bool
};

export default SubscribeItem;
