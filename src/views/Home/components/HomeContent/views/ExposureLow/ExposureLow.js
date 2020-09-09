import React from 'react';
import { withTranslation } from 'react-i18next';
import { MakeDiagnosisButton, Smile, TriageInfoBorder } from '../../../index';
import { Paragraph } from '../../../../../../theme/typography';

const ExposureLow = ({ t }) => {
  return (
    <>
      <Smile />
      <TriageInfoBorder />
      <Paragraph>{t('exposure_low_text1')}</Paragraph>
      <MakeDiagnosisButton />
    </>
  );
};

export default withTranslation()(ExposureLow);
