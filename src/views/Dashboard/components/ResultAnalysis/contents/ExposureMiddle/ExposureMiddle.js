import React from 'react';
import { ListStats, TestLabActionButton } from '../../components';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './ExposureMiddle.styled';

const ExposureMiddle = ({ handleRecommendation, isInfected }) => (
  <Styled.ExposureMiddle>
    <ListStats isInfected={isInfected} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_15" />
    </Styled.Text>

    <Styled.ButtonsWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_16" />
      </Button>
      <TestLabActionButton />
    </Styled.ButtonsWrapper>
  </Styled.ExposureMiddle>
);

export default ExposureMiddle;
