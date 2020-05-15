import React from 'react';
import PropTypes from 'prop-types';
import {
  WarningWrapper,
  TitleWrapper,
  Icon,
  Title,
  Content
} from './Warning.styled';

import error from '../../assets/img/warning/error.svg';
import info from '../../assets/img/warning/info.svg';
import success from '../../assets/img/warning/success.svg';
import warning from '../../assets/img/warning/warning.svg';

const Warning = ({ content, status, title, onClick }) => {
  const renderIcon = (() => {
    switch (status) {
      case 'success': {
        return success;
      }
      case 'warning': {
        return warning;
      }
      case 'info': {
        return info;
      }
      case 'error': {
        return error;
      }
      default: {
        return success;
      }
    }
  })();
  return (
    <WarningWrapper className={`${status}`} onClick={onClick}>
      <TitleWrapper>
        <Icon>
          <img src={renderIcon} alt="icon" />
        </Icon>
        <Title>{title}</Title>
      </TitleWrapper>
      <Content>{content}</Content>
    </WarningWrapper>
  );
};

Warning.defaultProps = {
  status: 'success'
};

Warning.propTypes = {
  content: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Warning;
