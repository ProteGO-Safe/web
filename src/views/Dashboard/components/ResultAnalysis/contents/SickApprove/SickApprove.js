import React from 'react';
import { ListStats } from '../../components';
import { T } from '../../../../../../components/T';
import { Button } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './SickApprove.styled';

const SickApprove = ({ dateLastRiskTest, dateRiskMonitoring, isInfected, handleRecommendation }) => (
  <Styled.SickApprove>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_25" />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_26" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.SickApprove>
);

export default SickApprove;
