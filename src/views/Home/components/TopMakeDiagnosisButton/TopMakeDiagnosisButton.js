import React from 'react';
import { MakeDiagnosisButton } from '../MakeDiagnosisButton';
import useTriage from '../../../../hooks/useTriage';

const TopMakeDiagnosisButton = () => {
  const { riskLevel, isExposure = false } = useTriage();
  if (isExposure || riskLevel === 3) {
    return null;
  }
  return <MakeDiagnosisButton />;
};

export default TopMakeDiagnosisButton;
