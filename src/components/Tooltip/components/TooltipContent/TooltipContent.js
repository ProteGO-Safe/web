import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './TooltipContent.styled';

const TooltipContent = ({ content }) => (
  <Styled.TooltipContent>
    <Styled.Paragraph>{content}</Styled.Paragraph>
  </Styled.TooltipContent>
);

TooltipContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default TooltipContent;
