import React from 'react';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import * as Styled from './ButtonWithDescription.styled';

import { ReactComponent as IconArrow } from '../../assets/img/icons/arrow-current-color.svg';

const ButtonWithDescription = ({ color, children, description, hideArrow, isTopDescription, onClick, title }) => (
  <Styled.ButtonWithDescription padding={children} onClick={onClick} color={color} position={isTopDescription}>
    {!isTopDescription && children && <Styled.Children>{children}</Styled.Children>}
    <Styled.Title color={color} arrowPosition={children}>
      {title}
      {not(hideArrow) && <IconArrow />}
    </Styled.Title>
    <Styled.Description position={isTopDescription} margin={children}>
      {description}
    </Styled.Description>
  </Styled.ButtonWithDescription>
);

ButtonWithDescription.defaultProps = {
  children: undefined,
  hideArrow: false
};

ButtonWithDescription.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  hideArrow: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default ButtonWithDescription;
