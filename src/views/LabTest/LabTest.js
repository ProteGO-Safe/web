import React from 'react';
import { NUMBER_OF_STEPS } from './labTest.constants';
import { Stepper, T } from '../../components';
import { Step1, Step2, Step3 } from './components';
import { H5 } from '../../theme/typography';
import * as Styled from './LabTest.styled';

const LabTest = ({ isInvalidPin, isSafetyNetError, loader, onReset, onSubmit, pin, setPin, setStep, step }) => {
  return (
    <>
      <Styled.Content>
        <H5>
          <T i18nKey="lab_test_text1" />
        </H5>
        <Styled.LabTestStepper>
          <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        </Styled.LabTestStepper>
      </Styled.Content>
      {step === 1 && <Step1 setPin={setPin} setStep={setStep} />}
      {step === 2 && (
        <Step2
          isInvalidPin={isInvalidPin}
          isSafetyNetError={isSafetyNetError}
          loader={loader}
          onReset={onReset}
          onSubmit={onSubmit}
          pin={pin}
          setPin={setPin}
          setStep={setStep}
        />
      )}
      {step === 3 && <Step3 />}
    </>
  );
};

export default LabTest;
