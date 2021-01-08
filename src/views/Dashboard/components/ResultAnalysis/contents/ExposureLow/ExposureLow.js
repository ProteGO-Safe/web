import React from 'react';
import { ListStats } from '../../components';
import { T } from '../../../../../../components';
import * as Styled from './ExposureLow.styled';

const ExposureLow = () => (
  <Styled.ExposureLow>
    <ListStats />

    <Styled.Text>
      <T i18nKey="result_analysis_text_14" />
    </Styled.Text>
  </Styled.ExposureLow>
);

export default ExposureLow;
