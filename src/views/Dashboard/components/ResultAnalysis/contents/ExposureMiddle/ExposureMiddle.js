import React from 'react';
import { ListStats } from '../../components';
import { Button, ButtonWithDescription, T } from '../../../../../../components';
import { Color } from '../../../../../../theme/colors';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './ExposureMiddle.styled';

const ExposureMiddle = ({
  dateLastRiskTest,
  dateRiskMonitoring,
  handlePickUpTest,
  handleRecommendation,
  isInfected
}) => (
  <Styled.ExposureMiddle>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_15" />
    </Styled.Text>

    <Styled.ButtonsWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_16" />
      </Button>

      <ButtonWithDescription
        color={Color.primary}
        description={<T i18nKey="result_analysis_text_18" />}
        onClick={handlePickUpTest}
        title={<T i18nKey="result_analysis_text_17" />}
      />
    </Styled.ButtonsWrapper>
  </Styled.ExposureMiddle>
);

export default ExposureMiddle;
