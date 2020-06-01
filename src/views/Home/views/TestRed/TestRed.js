import React from 'react';
import {
  TriageRecommendations,
  Smile,
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
    </>
  );
};

export default TestYellow;
