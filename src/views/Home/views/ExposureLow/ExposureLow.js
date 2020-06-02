import React from 'react';
import {
  MakeDiagnosisButton,
  Smile,
  TriageInfoBorder
} from '../../components/index';
import { Paragraph } from '../../../../theme/typography';

const ExposureLow = () => {
  return (
    <>
      <Smile />
      <TriageInfoBorder />
      <Paragraph>
        Jeśli chcesz dowiedzieć się więcej na temat czynników mających wpływ na
        ryzyko infekcji, kliknij poniżej i wykonaj test oceny ryzyka.
      </Paragraph>
      <MakeDiagnosisButton />
    </>
  );
};

export default ExposureLow;
