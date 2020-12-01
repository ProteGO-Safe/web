import React from 'react';
import { MakeDiagnosisButton, Smile, TriageInfoBorder } from '../../../index';
import { T } from '../../../../../../components';
import { Paragraph } from '../../../../../../theme/typography';

const ExposureLow = () => {
  return (
    <>
      <Smile />
      <TriageInfoBorder />
      <Paragraph>
        <T i18nKey="exposure_low_text1" />
      </Paragraph>
      <MakeDiagnosisButton />
    </>
  );
};

export default ExposureLow;
