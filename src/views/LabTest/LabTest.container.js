import React, { useState } from 'react';
import LabTestContainer from './LabTestContainer';
import { LabTestOnBoarding } from './components';

const LabTest = () => {
  const [onboardingFinished, setOnboardingFinished] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingAnswers, setOnboardingAnswers] = useState({});

  if (onboardingFinished) {
    return <LabTestContainer goBack={() => setOnboardingFinished(false)} />;
  }
  return (
    <LabTestOnBoarding
      answers={onboardingAnswers}
      setAnswers={setOnboardingAnswers}
      step={onboardingStep}
      setStep={setOnboardingStep}
      onFinish={() => setOnboardingFinished(true)}
    />
  );
};

export default LabTest;
