import React from 'react';
import { withTranslation } from 'react-i18next';
import { Smile, TriageInfoBorder, TriageRiskInformation } from '../../../index';
import { T } from '../../../../../../components';
import { Paragraph } from '../../../../../../theme/typography';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ExposureSick.styled';

const ExposureSick = ({ t }) => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <Styled.MoreInformation>
        <Styled.Title>{t('exposure_sick_text1')}</Styled.Title>
        <Paragraph color={Color.lightBlack}>
          <T i18nKey="exposure_sick_text2" />
        </Paragraph>
      </Styled.MoreInformation>
    </>
  );
};

export default withTranslation()(ExposureSick);
