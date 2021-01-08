import React from 'react';
import { Button, T } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';
import * as Styled from './NoData.styled';

const NoData = ({ onClick }) => (
  <Styled.NoData>
    <Styled.Text>
      <T i18nKey="result_analysis_text_3" />
    </Styled.Text>

    <Styled.ButtonWrapper>
      <Button onClick={onClick} type={BUTTON_TYPES.SMALL_OUTLINE}>
        <T i18nKey="result_analysis_text_4" />
      </Button>
    </Styled.ButtonWrapper>
  </Styled.NoData>
);

export default NoData;
