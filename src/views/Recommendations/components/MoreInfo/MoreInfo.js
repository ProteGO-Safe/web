import React from 'react';
import * as Styled from './MoreInfo.styled';
import { T } from '../../../../components';

const MoreInfo = () => (
  <Styled.Wrapper>
    <Styled.Title>
      <T i18nKey="recommendation_more_information_text1" />
    </Styled.Title>
    <Styled.Text>
      <T i18nKey="recommendation_more_information_text2" />
    </Styled.Text>
    <Styled.Small>
      <T i18nKey="recommendation_more_information_text3" />
    </Styled.Small>
  </Styled.Wrapper>
);

export default MoreInfo;
