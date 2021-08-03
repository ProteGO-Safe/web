import React from 'react';
import PropTypes from 'prop-types';
import { T, ToggleButton } from '../../../../components';
import { Color } from '../../../../theme/colors';
import * as Styled from './ResultAnalysis.styled';
import {
  ContentText,
  CurrentStateText,
  CustomCallToActionButton,
  Icon,
  ListStats,
  ResultAnalysisWrapper,
  SignedForLabTest
} from './components';

const ResultAnalysis = ({ colorToggleButton, handleToggleButton, isOpen, userName }) => (
  <ResultAnalysisWrapper>
    <Styled.Head isOpen={isOpen}>
      <Styled.Title>
        <T i18nKey="result_analysis_text_1" variables={{ userName }} />
        <Icon />
      </Styled.Title>

      <CurrentStateText />
    </Styled.Head>

    <Styled.CurrentState>
      <Styled.Content isOpen={isOpen}>
        <ListStats />
        <ContentText />
        <SignedForLabTest />
        <CustomCallToActionButton />
      </Styled.Content>
    </Styled.CurrentState>

    <Styled.ToggleButtonWrapper active={isOpen}>
      <ToggleButton color={colorToggleButton} active={isOpen} onClick={handleToggleButton} />
    </Styled.ToggleButtonWrapper>
  </ResultAnalysisWrapper>
);

ResultAnalysis.defaultProps = {
  colorToggleButton: Color.primary
};

ResultAnalysis.propTypes = {
  handleToggleButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  colorToggleButton: PropTypes.string
};

export default ResultAnalysis;
