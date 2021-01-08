import React from 'react';
import PropTypes from 'prop-types';
import { WarningWrapper, TitleWrapper, IconArrow, Icon, Title, Content } from './Warning.styled';

import error from '../../assets/img/warning/error.svg';
import info from '../../assets/img/warning/info.svg';
import success from '../../assets/img/warning/success.svg';
import warning from '../../assets/img/warning/warning.svg';

const Warning = ({ arrow, content, colorFont, borderColor, status, title, onClick }) => {
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
    <WarningWrapper border={borderColor} onClick={onClick}>
      {arrow && <IconArrow color={colorFont} />}
      <TitleWrapper>
        <Icon>
          <img src={renderIcon} alt="icon" />
        </Icon>
        <Title color={colorFont}>{title}</Title>
        {content && <Content color={colorFont}>{content}</Content>}
      </TitleWrapper>
    </WarningWrapper>
  );
};

Warning.defaultProps = {
  arrow: false,
  borderColor: '',
  content: '',
  colorFont: '',
  onClick: () => null,
  status: 'success'
};

Warning.propTypes = {
  arrow: PropTypes.bool,
  borderColor: PropTypes.string,
  content: PropTypes.string,
  colorFont: PropTypes.string,
  status: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Warning;
