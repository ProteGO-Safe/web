import React from 'react';
import {
  TriageRecommendations,
  Smile,
  TriageRiskInformation,
  TriageInfoBorder,
  MoreInformation,
  MakeDiagnosisButton
} from '../../components/index';

const TestYellow = () => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <TriageRecommendations />
      <MoreInformation />
      <MakeDiagnosisButton />
    </>
  );
};

export default TestYellow;
