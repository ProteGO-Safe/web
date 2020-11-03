import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { NUMBER_OF_STEPS } from './ImprintFiller.constants';
import {
  BloodGroup,
  ChronicSick,
  ManualCovidState,
  Name,
  Smoke,
  Summary
} from './components';
import { Stepper, Layout } from '../index';

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
  }
};

const ImprintFiller = () => {
  const {
    values: { step }
  } = useFormikContext();

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  if (step === 6) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <Layout hideBackButton isGovFooter>
      <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
      <StepComponent />
    </Layout>
  );
};

export default ImprintFiller;
