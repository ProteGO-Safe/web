import React from 'react';
import { ListStats, InstallKwarantannaActionButton } from '../../components';
import { T } from '../../../../../../components/T';
import { Button, ButtonWithIcon } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './ExposureHighPinApprove.styled';

import { ReactComponent as Icon } from '../../../../../../assets/img/icons/icon-rejestracja.svg';

const ExposureHighPinApprove = ({ handleLabTestResult, handleRecommendation }) => (
  <Styled.ExposureHighPinApprove>
    <ListStats />

    <Styled.Text>
      <T i18nKey="result_analysis_text_37" />
    </Styled.Text>

    <Styled.Title>
      <T i18nKey="result_analysis_text_38" />
    </Styled.Title>

    <Styled.NumberList>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_39" />
      </Styled.NumberListItem>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_40" />
      </Styled.NumberListItem>
    </Styled.NumberList>

    <Styled.ButtonsWrapper>
      <ButtonWithIcon icon={<Icon />} onClick={handleLabTestResult} name={<T i18nKey="result_analysis_text_41" />} />
      <InstallKwarantannaActionButton />
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_44" />
      </Button>
    </Styled.ButtonsWrapper>
  </Styled.ExposureHighPinApprove>
);

export default ExposureHighPinApprove;
