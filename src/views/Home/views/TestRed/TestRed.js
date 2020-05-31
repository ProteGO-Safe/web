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
      <TriageRiskInformation />
      <TriageInfoBorder />
      <TriageRecommendations />
      <MoreInformation />
      <MakeDiagnosisButton />
    </>
  );
};

export default TestYellow;
