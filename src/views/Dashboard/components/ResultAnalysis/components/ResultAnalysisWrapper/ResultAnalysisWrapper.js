import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ResultAnalysisWrapper.styled';

const ResultAnalysisWrapper = ({ backgroundColor, fontColor, pipeColor, children }) => (
  <Styled.Wrapper pipeColor={pipeColor} backgroundColor={backgroundColor} fontColor={fontColor}>
    {children}
  </Styled.Wrapper>
);

ResultAnalysisWrapper.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fontColor: PropTypes.string.isRequired,
  pipeColor: PropTypes.string.isRequired
};

export default ResultAnalysisWrapper;
