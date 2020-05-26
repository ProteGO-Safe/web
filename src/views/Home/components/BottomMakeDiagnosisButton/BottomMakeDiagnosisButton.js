import React from 'react';
import { MakeDiagnosisButton } from '../MakeDiagnosisButton';
import useTriage from '../../../../hooks/useTriage';

const BottomMakeDiagnosisButton = () => {
  const { riskLevel, isExposure = false } = useTriage();
  if (!isExposure && riskLevel === 3) {
    return <MakeDiagnosisButton />;
  }
  return null;
};

export default BottomMakeDiagnosisButton;
