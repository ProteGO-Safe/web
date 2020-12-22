import React from 'react';
import { ListStats, LabTestActionButton } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './ExposureHigh.styled';

const ExposureHigh = ({ handleRecommendation }) => (
  <Styled.ExposureHigh>
    <ListStats />

    <Styled.Text>
      <T i18nKey="result_analysis_text_19" />
    </Styled.Text>

    <Styled.ButtonsWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_20" />
      </Button>
      <LabTestActionButton />
    </Styled.ButtonsWrapper>
  </Styled.ExposureHigh>
);

export default ExposureHigh;
