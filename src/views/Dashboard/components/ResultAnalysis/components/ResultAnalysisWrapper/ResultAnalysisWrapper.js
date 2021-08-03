import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ResultAnalysisWrapper.styled';

const ResultAnalysisWrapper = ({ bckColor, color, children, fontColor }) => (
  <Styled.Wrapper color={color} bckColor={bckColor} fontColor={fontColor}>
    {children}
  </Styled.Wrapper>
);

ResultAnalysisWrapper.defaultProps = {
  bckColor: Color.white,
  color: Color.gradient_c2,
  fontColor: Color.black
};

ResultAnalysisWrapper.propTypes = {
  bckColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontColor: PropTypes.string
};

export default ResultAnalysisWrapper;
