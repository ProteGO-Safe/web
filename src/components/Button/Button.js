import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_TYPES } from './Button.constants';
import { RippleEffect } from '../index';
import {
  ArrowRight,
  ButtonBlankSmall,
  ButtonBorder,
  ButtonBorderArrow,
  ButtonDefault,
  ButtonOutline,
  ButtonSmallOutline,
  Content,
  Description,
  Label
} from './Button.styled';

import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-current-color.svg';
import { Color } from '../../theme/colors';
import useDelayedAction from '../../hooks/useDelayedAction';

const Button = ({ children, description, disabled, icon, label, onClick, type }) => {
  const { timeout } = useDelayedAction();

  const renderButton = Component => (
    <Component data-cy={`button-${type}`} disabled={disabled} onClick={() => timeout(onClick)} type="button">
      {icon}
      {label || children}
      <RippleEffect color={type === BUTTON_TYPES.DEFAULT ? Color.white : Color.primaryLight} />
    </Component>
  );

  const renderButtonBorder = Component => (
    <Component data-cy={`button-${type}`} disabled={disabled} onClick={() => timeout(onClick)} type="button">
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
      <RippleEffect color={type === BUTTON_TYPES.DEFAULT ? Color.white : Color.primaryLight} />
    </Component>
  );

  switch (type) {
    case BUTTON_TYPES.DEFAULT: {
      return renderButton(ButtonDefault);
    }
    case BUTTON_TYPES.OUTLINE: {
      return renderButton(ButtonOutline);
    }
    case BUTTON_TYPES.SMALL_OUTLINE: {
      return renderButton(ButtonSmallOutline);
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
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    BUTTON_TYPES.BLANK_SMALL,
    BUTTON_TYPES.BORDER,
    BUTTON_TYPES.BORDER_ARROW,
    BUTTON_TYPES.DEFAULT,
    BUTTON_TYPES.OUTLINE,
    BUTTON_TYPES.SMALL_OUTLINE
  ])
};

export default Button;
