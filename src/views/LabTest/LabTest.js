import React from 'react';
import { useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { NUMBER_OF_STEPS } from './labTest.constants';
import { Stepper } from '../../components';
import { Step1, Step2, Step3 } from './components';
import { H5 } from '../../theme/typography';
import * as Styled from './LabTest.styled';

const LabTest = ({
  completedSteps,
  isInvalidPin,
  loader,
  onReset,
  onSubmit,
  pin,
  setCompletedSteps,
  setPin,
  t
}) => {
  const { step } = useParams();

  return (
    <>
      <Styled.Content>
        <H5>{t('lab_test_text1')}</H5>
        <Styled.LabTestStepper>
          <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        </Styled.LabTestStepper>
      </Styled.Content>
      {step === '1' && (
        <Step1 setCompletedSteps={setCompletedSteps} setPin={setPin} />
      )}
      {step === '2' && (
        <Step2
          completedSteps={completedSteps}
          isInvalidPin={isInvalidPin}
          loader={loader}
          onReset={onReset}
          onSubmit={onSubmit}
          pin={pin}
          setCompletedSteps={setCompletedSteps}
          setPin={setPin}
        />
      )}
      {step === '3' && <Step3 completedSteps={completedSteps} />}
    </>
  );
};

export default withTranslation()(LabTest);
