import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './TextBlockWithIcon.styled';

const TextBlockWithIcon = ({ children, icon, title }) => (
  <Styled.TextBlockWithIcon>
    <Styled.Header>
      <Styled.Icon>
        <Styled.Image src={icon} alt={title} />
      </Styled.Icon>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Header>

    <Styled.Description>{children}</Styled.Description>
  </Styled.TextBlockWithIcon>
);

TextBlockWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TextBlockWithIcon;
