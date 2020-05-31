import React from 'react';
import {
  TriageRecommendations,
  Smile,
  MakeDiagnosisButton,
  TriageRiskInformation,
  TriageInfoBorder,
  MoreInformation
} from '../../components/index';

const TestYellow = () => {
  return (
    <>
      <Smile />
      <MakeDiagnosisButton />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <TriageRecommendations />
      <MoreInformation />
    </>
  );
};

export default TestYellow;
