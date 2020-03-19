import React from 'react';
import { useFormikContext } from 'formik';
import { Step1, Step2, Step3 } from './components';
import { Banner } from '../../components/Banner';
import Background from '../../assets/img/banners/banner-1.png';

const Registration = () => {
  const {
    values: { step }
  } = useFormikContext();

  return (
    <div className="view view__registration">
      <div className={`registration registration__step--${step}`}>
        <Banner background={Background} size="small" />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </div>
    </div>
  );
};

export default Registration;
