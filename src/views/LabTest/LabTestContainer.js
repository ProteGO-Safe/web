import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import LabTest from './LabTest';
import { PinVerificationLoader } from './components';
import { NavigationBackGuard, Layout } from '../../components';
import { NUMBER_OF_STEPS } from './labTest.constants';
import {
  resetUploadLabTestPinResult,
  uploadLabTestPin
} from '../../store/actions/nativeData';
import { getUploadLabTestPinResult } from '../../store/selectors/nativeData';
import useNavigation from '../../hooks/useNavigation';

const LabTestContainer = ({ t }) => {
  const dispatch = useDispatch();
  const { goHome, goBack } = useNavigation();

  const uploadLabTestPinResult = useSelector(getUploadLabTestPinResult);

  const [step, setStep] = useState(1);
  const [pin, setPin] = useState(undefined);
  const [isInvalidPin, setIsInvalidPin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showBackGuard, setShowBackGuard] = useState(false);

  const hideBackButton = loader || step > NUMBER_OF_STEPS - 1;

  const handleResetSteps = () => {
    setPin(undefined);
    setStep(1);
    setIsInvalidPin(false);
  };

  useEffect(() => {
    dispatch(resetUploadLabTestPinResult());
    return () => {
      dispatch(resetUploadLabTestPinResult());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (uploadLabTestPinResult === 1) {
      setLoader(false);
      setStep(3);
    }

    if (uploadLabTestPinResult === 2) {
      setLoader(false);
      setIsInvalidPin(true);
      setPin(undefined);
    }

    if (uploadLabTestPinResult === 3) {
      goHome();
    }

    // eslint-disable-next-line
  }, [uploadLabTestPinResult]);

  const handleSubmitPin = () => {
    setLoader(true);
    setIsInvalidPin(false);
    dispatch(uploadLabTestPin(pin));
  };

  const back = () => {
    if (!!(pin && pin.toString().length) && step === 2) {
      setShowBackGuard(true);
      return;
    }
    if (step === 1) {
      goBack();
    } else {
      setStep(prev => prev - 1);
    }
  };

  const backOnGuard = () => {
    setPin(undefined);
    setShowBackGuard(false);
    setStep(1);
  };

  return (
    <>
      <Layout onBackClick={back} hideBackButton={hideBackButton}>
        <LabTest
          isInvalidPin={isInvalidPin}
          loader={loader}
          onReset={handleResetSteps}
          onSubmit={handleSubmitPin}
          pin={pin}
          setPin={setPin}
          setStep={setStep}
          step={step}
        />
        {loader && <PinVerificationLoader />}
      </Layout>
      {showBackGuard && (
        <NavigationBackGuard
          title={t('lab_test_text23')}
          description={t('lab_test_text24')}
          handleCancel={() => setShowBackGuard(false)}
          handleConfirm={() => backOnGuard()}
        />
      )}
    </>
  );
};

export default withTranslation()(LabTestContainer);
