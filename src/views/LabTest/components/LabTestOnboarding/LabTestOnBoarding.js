import React, { useState, useEffect } from 'react';
import { Result, Step1, Step2, Step3 } from './components';

const LabTestOnBoarding = ({ answers, setAnswers, step, setStep, onFinish }) => {
  const [isReadyForLabTest, setIsReadyForLabTest] = useState(false);

  useEffect(() => {
    if (answers[1] === true) {
      setIsReadyForLabTest(true);
    }
    if (answers[3] && Object.values(answers[3]).filter(value => value).length >= 2) {
      setIsReadyForLabTest(true);
    }
    // eslint-disable-next-line
  }, []);

  const next = answer => {
    setAnswers(prev => {
      return {
        ...prev,
        [step]: answer
      };
    });
    if (step === 1) {
      setStep(2);
    }

    if (step === 2) {
      setStep(3);
    }

    if (step === 3) {
      setIsReadyForLabTest(answers[1] === true || Object.values(answer).filter(value => value).length >= 2);
      setStep('result');
    }
  };

  const back = () => {
    if (step === 2) {
      setStep(1);
    }
    if (step === 3) {
      setStep(2);
    }
    if (step === 'result') {
      setStep(3);
    }
  };

  if (step === 1) {
    return <Step1 answers={answers} back={back} next={next} />;
  }

  if (step === 2) {
    return <Step2 answers={answers} back={back} next={next} />;
  }

  if (step === 3) {
    return <Step3 answers={answers} back={back} next={next} />;
  }

  if (step === 'result') {
    return <Result back={back} isReadyForLabTest={isReadyForLabTest} onFinish={onFinish} />;
  }

  return null;
};

export default LabTestOnBoarding;
