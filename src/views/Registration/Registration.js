import React, { useEffect, useCallback } from 'react';
import { useFormikContext } from 'formik';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Summary
} from './components';
import './Registration.scss';

import Banner1 from '../../assets/img/banners/banner-1.png';
import Banner2 from '../../assets/img/banners/banner-2.png';
import Banner3 from '../../assets/img/banners/banner-3.png';
import Banner4 from '../../assets/img/banners/banner-4.png';
import Banner5 from '../../assets/img/banners/banner-5.png';
import Banner6 from '../../assets/img/banners/banner-6.png';
import Banner7 from '../../assets/img/banners/banner-7.png';
import Banner8 from '../../assets/img/banners/banner-8.png';
import { Header } from '../../components/Header';
import { StartScreen } from '../StartScreen';

const steps = {
  1: {
    bannerUrl: Banner1,
    Component: Step1
  },
  2: {
    bannerUrl: Banner8,
    Component: Step8
  },
  3: {
    bannerUrl: Banner2,
    Component: Step2
  },
  4: {
    bannerUrl: Banner3,
    Component: Step3
  },
  5: {
    bannerUrl: Banner4,
    Component: Step4
  },
  6: {
    bannerUrl: Banner5,
    Component: Step5
  },
  7: {
    bannerUrl: Banner6,
    Component: Step6
  },
  8: {
    bannerUrl: Banner7,
    Component: Step7
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

  const onBack = useCallback(() => {
    let previousStep;
    if (step === 8) {
      previousStep = step - 2;
    } else {
      previousStep = step - 1;
    }
    setFieldValue('step', previousStep);
  }, [step, setFieldValue]);

  if (!step) {
    return <StartScreen onStartClick={() => setFieldValue('step', 1)} />;
  }

  if (step === 9) {
    return <Summary />;
  }

  const StepComponent = steps[step].Component;

  return (
    <div className="view view__registration">
      <div className={`registration registration__step--${step}`}>
        <Header
          hideMenuButton
          hideBackButton={step === 1}
          onBackClick={onBack}
        />
        <StepComponent />
      </div>
    </div>
  );
};

export default Registration;
