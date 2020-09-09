import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_TYPES } from './Button.constants';
import {
  ArrowRight,
  ButtonBlankSmall,
  ButtonBorder,
  ButtonBorderArrow,
  ButtonDefault,
  ButtonOutline,
  Content,
  Description,
  Label
} from './Button.styled';

import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-current-color.svg';

const Button = ({
  children,
  description,
  disabled,
  icon,
  label,
  onClick,
  type
}) => {
  const renderButton = Component => (
    <Component disabled={disabled} onClick={onClick} type="button">
      {icon}
      {label || children}
    </Component>
  );

  const renderButtonBorder = Component => (
    <Component disabled={disabled} onClick={onClick} type="button">
      {icon}
      <Content>
        <Label>{label || children}</Label>
        <Description>{description}</Description>
      </Content>
      {type === BUTTON_TYPES.BORDER_ARROW && (
        <ArrowRight>
          <ArrowIcon />
        </ArrowRight>
      )}
    </Component>
  );

  switch (type) {
    case BUTTON_TYPES.DEFAULT: {
      return renderButton(ButtonDefault);
    }
    case BUTTON_TYPES.OUTLINE: {
      return renderButton(ButtonOutline);
    }
    case BUTTON_TYPES.BORDER: {
      return renderButtonBorder(ButtonBorder);
    }
    case BUTTON_TYPES.BORDER_ARROW: {
      return renderButtonBorder(ButtonBorderArrow);
    }
    case BUTTON_TYPES.BLANK_SMALL: {
      return renderButton(ButtonBlankSmall);
    }
    default: {
      return renderButton(ButtonDefault);
    }
  }
};

Button.defaultProps = {
  children: null,
  description: null,
  disabled: false,
  label: null,
  type: BUTTON_TYPES.DEFAULT
};

Button.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    BUTTON_TYPES.BLANK_SMALL,
    BUTTON_TYPES.BORDER,
    BUTTON_TYPES.BORDER_ARROW,
    BUTTON_TYPES.DEFAULT,
    BUTTON_TYPES.OUTLINE
  ])
};

export default Button;
