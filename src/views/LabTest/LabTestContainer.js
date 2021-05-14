import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LabTest from './LabTest';
import { PinVerificationLoader } from './components';
import { Layout, NavigationBackGuard, T } from '../../components';
import { NUMBER_OF_STEPS } from './labTest.constants';
import { uploadLabTestPin } from '../../store/actions/nativeData';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const LabTestContainer = ({ goBack }) => {
  const dispatch = useDispatch();
  const { goTo } = useNavigation();

  const [step, setStep] = useState(1);
  const [pin, setPin] = useState(undefined);
  const [isInvalidPin, setIsInvalidPin] = useState(false);
  const [isSafetyNetError, setIsSafetyNetError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showBackGuard, setShowBackGuard] = useState(false);

  const hideBackButton = loader || step > NUMBER_OF_STEPS - 1;

  const handleResetSteps = () => {
    setPin(undefined);
    setStep(1);
    setIsInvalidPin(false);
    setIsSafetyNetError(false);
  };

  useEffect(() => {
    if (step === 1) {
      setIsSafetyNetError(false);
    }
  }, [step]);

  const handleSubmitPin = () => {
    setLoader(true);
    setIsInvalidPin(false);
    setIsSafetyNetError(false);
    dispatch(uploadLabTestPin(pin)).then(({ result }) => {
      setLoader(false);
      if (result === 1) {
        setStep(3);
      }
      if (result === 2) {
        setIsInvalidPin(true);
        setPin(undefined);
      }
      if (result === 3) {
        goTo(Routes.Home);
      }
      if (result === 4) {
        setIsSafetyNetError(true);
      }
    });
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
          isSafetyNetError={isSafetyNetError}
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
          title={<T i18nKey="lab_test_text23" />}
          description={<T i18nKey="lab_test_text24" />}
          handleCancel={() => setShowBackGuard(false)}
          handleConfirm={() => backOnGuard()}
        />
      )}
    </>
  );
};

export default LabTestContainer;
