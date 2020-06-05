import React from 'react';
import {
  Smile,
  TriageRiskInformation,
  TriageInfoBorder,
  MoreInformation,
  TriageRecommendations
} from '../../components/index';
import { Paragraph } from '../../../../theme/typography';

const ExposureSick = () => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <Paragraph>
        <strong>Co jeszcze powinnaś/powinieneś zrobić?</strong>
      </Paragraph>
      <TriageRecommendations />
      <MoreInformation />
    </>
  );
};

export default ExposureSick;
