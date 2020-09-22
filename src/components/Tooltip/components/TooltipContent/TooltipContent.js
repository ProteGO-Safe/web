import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '../../../../theme/typography';
import * as Styled from './TooltipContent.styled';

const TooltipContent = ({ content }) => (
  <Styled.TooltipContent>
    <Paragraph>{content}</Paragraph>
  </Styled.TooltipContent>
);

TooltipContent.propTypes = {
  content: PropTypes.string.isRequired
};

export default TooltipContent;
