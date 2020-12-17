import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import isequal from 'lodash.isequal';
import { NUMBER_OF_STEPS } from './ImprintFiller.constants';
import { BloodGroup, ChronicSick, ManualCovidState, Name, Smoke, Summary } from './components';
import { Layout, NavigationBackGuard, Stepper, T } from '../index';
import useNavigation from '../../hooks/useNavigation';
import useHealthStats from '../../hooks/useHealthStats';

const steps = {
  1: {
    Component: Name
  },
  2: {
    Component: ChronicSick
  },
  3: {
    Component: BloodGroup
  },
  4: {
    Component: Smoke
  },
  5: {
    Component: ManualCovidState
  },
  6: {
    Component: Summary
  }
};

const ImprintFiller = () => {
  const { goBack } = useNavigation();
  const { resetForm, values, initialValues } = useFormikContext();
  const { isCovidManual } = useHealthStats();
  const [step, setStep] = useState(1);
  const [showBackGuard, setShowBackGuard] = useState(false);

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  const numberOfSteps = isCovidManual ? NUMBER_OF_STEPS : NUMBER_OF_STEPS - 1;

  const processBackOnFirstStep = () => {
    if (isequal(values, initialValues)) {
      goBack();
    } else {
      setShowBackGuard(true);
    }
  };

  const onBackClick = () => {
    if (step === 1) {
      processBackOnFirstStep();
      return;
    }
    if (step === 6 && !isCovidManual) {
      setStep(prev => prev - 2);
      return;
    }
    setStep(prev => prev - 1);
  };

  const goToNextStep = () => {
    if (step === 4 && !isCovidManual) {
      setStep(prev => prev + 2);
      return;
    }
    setStep(prev => prev + 1);
  };

  const onResetForm = () => {
    resetForm();
    setStep(1);
  };

  const StepComponent = steps[step].Component;

  return (
    <>
      <Layout isGovFooter hideBell onBackClick={onBackClick}>
        <Stepper currentStep={step} numberOfSteps={numberOfSteps} />
        <StepComponent handelGoToNextStep={goToNextStep} handleResetForm={onResetForm} />
      </Layout>
      {showBackGuard && (
        <NavigationBackGuard
          title={<T i18nKey="imprint_filler_text1" />}
          description={<T i18nKey="imprint_filler_text2" />}
          handleCancel={() => setShowBackGuard(false)}
          handleConfirm={() => goBack()}
        />
      )}
    </>
  );
};

export default ImprintFiller;
