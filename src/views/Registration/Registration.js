import React from 'react';
import { useFormikContext } from 'formik';
import { Explainer } from './components/Explainer';
import { NameForm } from './components/NameForm';
import { Terms } from './components/Terms';

const steps = {
  1: {
    Component: Explainer
  },
  2: {
    Component: Terms
  },
  3: {
    Component: NameForm
  }
};

const Registration = () => {
  const { values } = useFormikContext();

  const StepComponent = steps[values.step].Component;

  return <StepComponent />;
};

export default Registration;
