import React from 'react';
import { ListStats } from '../../components';
import { T } from '../../../../../../components/T';
import { Button, ButtonWithDescription, ButtonWithIcon } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ExposureMiddlePinApprove.styled';

import { ReactComponent as Icon } from '../../../../../../assets/img/icons/icon-rejestracja.svg';

const ExposureMiddlePinApprove = ({
  dateLastRiskTest,
  dateRiskMonitoring,
  handleInstallApp,
  handleLabTestResult,
  handleRecommendation,
  isInfected
}) => (
  <Styled.ExposureMiddlePinApprove>
    <ListStats isInfected={isInfected} dateRiskMonitoring={dateRiskMonitoring} dateLastRiskTest={dateLastRiskTest} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_29" />
    </Styled.Text>

    <Styled.Title>
      <T i18nKey="result_analysis_text_30" />
    </Styled.Title>

    <Styled.NumberList>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_31" />
      </Styled.NumberListItem>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_32" />
      </Styled.NumberListItem>
    </Styled.NumberList>

    <Styled.ButtonsWrapper>
      <ButtonWithIcon icon={<Icon />} onClick={handleLabTestResult} name={<T i18nKey="result_analysis_text_33" />} />

      <ButtonWithDescription
        isTopDescription
        color={Color.primary}
        description={<T i18nKey="result_analysis_text_34" />}
        onClick={handleInstallApp}
        title={<T i18nKey="result_analysis_text_35" />}
      />

      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_36" />
      </Button>
    </Styled.ButtonsWrapper>
  </Styled.ExposureMiddlePinApprove>
);

export default ExposureMiddlePinApprove;
