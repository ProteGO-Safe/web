import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

import { STEP_EXPLAINER } from '../../constants';
import { NUMBER_OF_STEPS } from './Registration.constants';

import {
  Age,
  BloodGroup,
  ChronicSick,
  Explainer,
  Name,
  Sex,
  Smoke,
  Summary
} from './components';
import { GovFooter, Stepper } from '../../components';
import { Header } from '../../components/Header';
import { StartScreen } from '../StartScreen';

import { Container, View } from '../../theme/grid';

const steps = {
  1: {
    Component: Name
  },
  2: {
    Component: Sex
  },
  3: {
    Component: Age
  },
  4: {
    Component: ChronicSick
  },
  5: {
    Component: BloodGroup
  },
  6: {
    Component: Smoke
  }
};

const Registration = () => {
  const {
    values: { step },
    setFieldValue
  } = useFormikContext();

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  if (!step) {
    return (
      <StartScreen onStartClick={() => setFieldValue('step', STEP_EXPLAINER)} />
    );
  }

  if (step === STEP_EXPLAINER) {
    return <Explainer />;
  }

  if (step === 7) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <View>
      <Header hideMenuButton hideBackButton />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <StepComponent />
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default Registration;
