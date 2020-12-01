import React from 'react';
import { Small, Paragraph } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import * as Styled from './MoreInformation.styled';
import { T } from '../../../../components';

const MoreInformation = () => (
  <Styled.MoreInformation>
    <Styled.Title>
      <T i18nKey="home_more_information_text1" />
    </Styled.Title>
    <Paragraph color={Color.lightBlack}>
      <T i18nKey="home_more_information_text2" />
    </Paragraph>
    <Small>
      <T i18nKey="home_more_information_text3" />
    </Small>
  </Styled.MoreInformation>
);

export default MoreInformation;
