import React from 'react';
import PropTypes from 'prop-types';
import { T, ToggleButton } from '../../../../components';
import * as Styled from './ResultAnalysis.styled';
import {
  ContentText,
  CurrentStateText,
  CustomCallToActionButton,
  Icon,
  LabTestActionButton,
  ListStats,
  ResultAnalysisWrapper,
  SignedForLabTest
} from './components';

const ResultAnalysis = ({ handleToggleButton, isOpen, userName }) => (
  <ResultAnalysisWrapper>
    <Styled.Title>
      <T i18nKey="result_analysis_text_1" variables={{ userName }} />
      <Icon />
    </Styled.Title>

    <Styled.CurrentState>
      <CurrentStateText />
      <Styled.Content isOpen={isOpen}>
        <ListStats />
        <ContentText />
        <SignedForLabTest />
        <CustomCallToActionButton />
        <LabTestActionButton />
      </Styled.Content>
    </Styled.CurrentState>

    <Styled.ToggleButtonWrapper>
      <ToggleButton active={isOpen} onClick={handleToggleButton} />
    </Styled.ToggleButtonWrapper>
  </ResultAnalysisWrapper>
);

ResultAnalysis.propTypes = {
  handleToggleButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default ResultAnalysis;
