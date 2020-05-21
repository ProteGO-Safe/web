import React from 'react';
import PropTypes from 'prop-types';
import { Close, CookieWrapper, Description, Icon } from './Cookie.styled';

import IconClose from '../../assets/img/icons/close.svg';
import IconInfo from '../../assets/img/icons/bad.svg';

const Cookie = ({ onClick, children }) => {
  return (
    <CookieWrapper>
      <Close onClick={onClick}>
        <img src={IconClose} alt={children} />
      </Close>
      <Icon>
        <img src={IconInfo} alt={children} />
      </Icon>
      <Description>{children}</Description>
    </CookieWrapper>
  );
};

Cookie.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Cookie;
