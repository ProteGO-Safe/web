import React from 'react';
import { withTranslation } from 'react-i18next';
import { ListStats } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './RiskTestHigh.styled';

const RiskTestHigh = ({ currentState, dateLastRiskTest, dateRiskMonitoring, isInfected, handleRecommendation, t }) => (
  <Styled.RiskTestHigh>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_12" variables={{ date: dateLastRiskTest, currentState: t(currentState) }} />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_13" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.RiskTestHigh>
);

export default withTranslation()(RiskTestHigh);
