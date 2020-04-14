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
  PhoneNumber,
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
    Component: PhoneNumber
  },
  3: {
    Component: Sex
  },
  4: {
    Component: Age
  },
  5: {
    Component: ChronicSick
  },
  6: {
    Component: BloodGroup
  },
  7: {
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
    return <StartScreen onStartClick={() => setFieldValue('step', 1)} />;
  }

  if (step === STEP_EXPLAINER) {
    return <Explainer />;
  }

  if (step === 8) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <View>
      <Header hideMenuButton hideBackButton title="Rejestracja" />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <StepComponent />
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default Registration;
