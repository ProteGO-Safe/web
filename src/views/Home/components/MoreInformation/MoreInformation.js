import React from 'react';
import { withTranslation } from 'react-i18next';
import { Small, Paragraph } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import * as Styled from './MoreInformation.styled';

const MoreInformation = ({ t }) => (
  <Styled.MoreInformation>
    <Styled.Title>{t('home_more_information_text1')}</Styled.Title>
    <Paragraph color={Color.lightBlack}>{t('home_more_information_text2')}</Paragraph>
    <Small>{t('home_more_information_text3')}</Small>
  </Styled.MoreInformation>
);

export default withTranslation()(MoreInformation);
