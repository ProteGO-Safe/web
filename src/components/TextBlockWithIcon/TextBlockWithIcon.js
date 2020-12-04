import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './TextBlockWithIcon.styled';

const TextBlockWithIcon = ({ children, icon, title }) => (
  <Styled.TextBlockWithIcon>
    <Styled.Header>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Header>

    <Styled.Description>{children}</Styled.Description>
  </Styled.TextBlockWithIcon>
);

TextBlockWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default TextBlockWithIcon;
