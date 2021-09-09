import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../../../../components';
import * as Styled from './ResultAnalysis.styled';
import {
  ContentText,
  CurrentStateText,
  CustomCallToActionButton,
  Icon,
  ListStats,
  ResultAnalysisWrapper,
  SignedForLabTest,
  ToggleButton
} from './components';

const ResultAnalysis = ({ handleToggleButton, isOpen, userName }) => {
  return (
    <ResultAnalysisWrapper>
      <Styled.Head isOpen={isOpen}>
        <Styled.Title>
          <T i18nKey="result_analysis_text_1" variables={{ userName }} />
          <Icon />
        </Styled.Title>

        <CurrentStateText hideContactDetectedText={isOpen} />
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
        <ToggleButton active={isOpen} onClick={handleToggleButton} />
      </Styled.ToggleButtonWrapper>
    </ResultAnalysisWrapper>
  );
};

ResultAnalysis.propTypes = {
  handleToggleButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default ResultAnalysis;
