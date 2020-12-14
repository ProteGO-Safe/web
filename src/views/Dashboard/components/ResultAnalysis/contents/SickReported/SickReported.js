import React from 'react';
import { ListStats } from '../../components';
import { T } from '../../../../../../components/T';
import { Button } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './SickReported.styled';

const SickReported = ({ dateLastRiskTest, dateRiskMonitoring, isInfected, handleRecommendation }) => (
  <Styled.SickReported>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_27" />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_28" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.SickReported>
);

export default SickReported;
