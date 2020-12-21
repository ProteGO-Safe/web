import React from 'react';
import { T } from '../../../../../../components';
import { ListStats } from '../../components';
import * as Styled from './RiskTestLow.styled';

const RiskTestLow = () => (
  <Styled.RiskTestLow>
    <ListStats />

    <Styled.Text>
      <T i18nKey="result_analysis_text_9" />
    </Styled.Text>
  </Styled.RiskTestLow>
);

export default RiskTestLow;
