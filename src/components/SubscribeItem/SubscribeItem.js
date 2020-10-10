import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SubscribeItem.styled';

const SubscribeItem = ({ handleClick, name, status, subscribed }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(prev => !prev);
    handleClick();
  };

  return (
    <Styled.SubscribeItem onClick={onClick}>
      <Styled.Status status={status} />
      <Styled.Name active={active}>{name}</Styled.Name>
      <Styled.Action active={active} className={active && 'active'} />
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
