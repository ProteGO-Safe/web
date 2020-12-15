import React from 'react';
import { ListStats } from '../../components';
import { T, Button, ButtonWithDescription } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ExposureHigh.styled';

const ExposureHigh = ({ handlePickUpTest, handleRecommendation, isInfected }) => (
  <Styled.ExposureHigh>
    <ListStats isInfected={isInfected} />

    <Styled.Text>
      <T i18nKey="result_analysis_text_19" />
    </Styled.Text>

    <Styled.ButtonsWrapper>
      <Button onClick={handleRecommendation} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_20" />
      </Button>

      <ButtonWithDescription
        color={Color.primary}
        description={<T i18nKey="result_analysis_text_22" />}
        onClick={handlePickUpTest}
        title={<T i18nKey="result_analysis_text_21" />}
      />
    </Styled.ButtonsWrapper>
  </Styled.ExposureHigh>
);

export default ExposureHigh;
