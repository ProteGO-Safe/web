import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ResultAnalysisWrapper.styled';

const ResultAnalysisWrapper = ({ color, children }) => <Styled.Wrapper color={color}>{children}</Styled.Wrapper>;

ResultAnalysisWrapper.defaultProps = {
  color: Color.gradient_c2
};

ResultAnalysisWrapper.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ResultAnalysisWrapper;
