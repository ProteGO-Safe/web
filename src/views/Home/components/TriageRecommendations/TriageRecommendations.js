import React from 'react';
import useTriage from '../../../../hooks/useTriage';

const TriageRecommendations = () => {
  const { Recommendation } = useTriage();

  return Recommendation ? <Recommendation /> : null;
};

export default TriageRecommendations;
