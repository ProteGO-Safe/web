import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { InstallApp, Step1, Step2, Step3, Step4 } from './components';
import { Banner } from '../../components';

import Banner1 from '../../assets/img/banners/banner-1.png';
import Banner2 from '../../assets/img/banners/banner-2.png';
import Banner3 from '../../assets/img/banners/banner-3.png';
import Banner4 from '../../assets/img/banners/banner-4.png';

const banners = {
  1: Banner1,
  2: Banner2,
  3: Banner3,
  4: Banner4
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

  if (step === 'install_app') {
    return <InstallApp />;
  }

  return (
    <div className="view view__registration">
      <div className={`registration registration__step--${step}`}>
        <Banner background={banners[step]} size="small" />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>
    </div>
  );
};

export default Registration;
