import React from 'react';
import { useFormikContext } from 'formik';
import {InstallApp, InstallAppInstruction, Step1, Step2, Step3, Step4} from './components';
import { Back, Banner } from '../../components';
import Background from '../../assets/img/banners/banner-1.png';

const Registration = () => {
  const {
    setFieldValue,
    values: { step }
  } = useFormikContext();

  const handleBack = () => {
    if (step <= 1) {
      return;
    }

    setFieldValue('step', parseInt(step) - 1);
  };

  if (step === 'install_app_1') {
    return <InstallApp />;
  }

  if (step === 'install_app_2') {
    return <InstallAppInstruction />;
  }

  return (
    <div className="view view__registration">
      <div className={`registration registration__step--${step}`}>
        <Banner background={Background} size="small">
          {step > 1 && <Back onClick={handleBack} />}
        </Banner>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>
    </div>
  );
};

export default Registration;
