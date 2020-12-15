import React from 'react';
import { withTranslation } from 'react-i18next';
import { ListStats } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './RiskTestMiddle.styled';

const RiskTestMiddle = ({ currentState, dateLastRiskTest, handleRecommendation, isInfected, t }) => (
  <Styled.RiskTestMiddle>
    <ListStats isInfected={isInfected} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_10" variables={{ date: dateLastRiskTest, currentState: t(currentState) }} />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_11" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.RiskTestMiddle>
);

export default withTranslation()(RiskTestMiddle);
