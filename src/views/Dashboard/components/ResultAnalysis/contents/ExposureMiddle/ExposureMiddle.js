import React from 'react';
import { ListStats, LabTestActionButton } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './ExposureMiddle.styled';

const ExposureMiddle = ({ handleRecommendation }) => (
  <Styled.ExposureMiddle>
    <ListStats />

    <Styled.Text>
      <T i18nKey="result_analysis_text_15" />
    </Styled.Text>

    <Styled.ButtonsWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_16" />
      </Button>
      <LabTestActionButton />
    </Styled.ButtonsWrapper>
  </Styled.ExposureMiddle>
);

export default ExposureMiddle;
