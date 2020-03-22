import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import {
  InstallApp,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Summary
} from './components';
import { Banner } from '../../components';

import Banner1 from '../../assets/img/banners/banner-1.png';
import Banner2 from '../../assets/img/banners/banner-2.png';
import Banner3 from '../../assets/img/banners/banner-3.png';
import Banner4 from '../../assets/img/banners/banner-4.png';
import Banner5 from '../../assets/img/banners/banner-5.png';
import Banner6 from '../../assets/img/banners/banner-6.png';
import Banner7 from '../../assets/img/banners/banner-7.png';

const banners = {
  1: Banner1,
  install_app: Banner1,
  2: Banner2,
  3: Banner3,
  4: Banner4,
  5: Banner5,
  6: Banner6,
  7: Banner7
};

const Registration = () => {
  const {
    values: { step }
  } = useFormikContext();

  useEffect(() => {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [step]);

  switch (step) {
    case 'install_app':
      return <InstallApp />;
    case 8:
      return <Summary />;
    default:
      return (
        <div className="view view__registration">
          <div className={`registration registration__step--${step}`}>
            <Banner background={banners[step]} size="small" />
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
            {step === 6 && <Step6 />}
            {step === 7 && <Step7 />}
          </div>
        </div>
      );
  }
};

export default Registration;
