import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ButtonWithDescription.styled';

import { ReactComponent as IconArrow } from '../../assets/img/icons/arrow-current-color.svg';

const ButtonWithDescription = ({ color, description, isTopDescription, onClick, title }) => (
  <Styled.ButtonWithDescription onClick={onClick} color={color} position={isTopDescription}>
    <Styled.Title color={color}>
      {title} <IconArrow />
    </Styled.Title>
    <Styled.Description position={isTopDescription}>{description}</Styled.Description>
  </Styled.ButtonWithDescription>
);

ButtonWithDescription.propTypes = {
  color: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default ButtonWithDescription;
