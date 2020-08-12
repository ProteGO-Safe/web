import React from 'react';
import { withTranslation } from 'react-i18next';
import { Smile, TriageRiskInformation, TriageInfoBorder } from '../../../index';
import { PhoneNumber, Url } from '../../../../../../components';
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
          {t('exposure_sick_text2')}{' '}
          <Url value="https://www.gov.pl/koronawirus">
            {t('exposure_sick_text3')}
          </Url>{' '}
          lub{' '}
          <Url value="https://www.pacjent.gov.pl">
            {t('exposure_sick_text4')}
          </Url>
          {t('exposure_sick_text5')}{' '}
          <PhoneNumber>{t('exposure_sick_text6')}</PhoneNumber>.
        </Paragraph>
      </Styled.MoreInformation>
    </>
  );
};

export default withTranslation()(ExposureSick);
