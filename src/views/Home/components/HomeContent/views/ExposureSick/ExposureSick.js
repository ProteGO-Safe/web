import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Smile,
  TriageRiskInformation,
  TriageInfoBorder
} from '../../../index';
import { PhoneNumber, Url } from '../../../../../../components';

const ExposureSick = ({ t }) => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <div className="more-information">
        <h4>{t('exposure_sick_text1')}</h4>
        <p>
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
        </p>
      </div>
    </>
  );
};

export default withTranslation()(ExposureSick);
