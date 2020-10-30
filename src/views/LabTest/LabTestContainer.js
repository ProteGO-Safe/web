import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LabTest from './LabTest';
import { PinVerificationLoader } from './components';
import { Layout } from '../../components';
import Routes from '../../routes';
import { NUMBER_OF_STEPS } from './labTest.constants';
import {
  resetUploadLabTestPinResult,
  uploadLabTestPin
} from '../../store/actions/nativeData';
import { getUploadLabTestPinResult } from '../../store/selectors/nativeData';

const LabTestContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadLabTestPinResult = useSelector(getUploadLabTestPinResult);

  const [completedSteps, setCompletedSteps] = useState(0);
  const [pin, setPin] = useState(undefined);
  const [isInvalidPin, setIsInvalidPin] = useState(false);
  const [loader, setLoader] = useState(false);

  const hideBackButton = loader || completedSteps >= NUMBER_OF_STEPS - 1;

  const handleResetSteps = () => {
    setPin(undefined);
    setCompletedSteps(0);
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
      setCompletedSteps(2);
      history.replace(`${Routes.LabTest}/3`);
    }

    if (uploadLabTestPinResult === 2) {
      setLoader(false);
      setIsInvalidPin(true);
      setPin(undefined);
    }

    if (uploadLabTestPinResult === 3) {
      history.push(Routes.Home);
    }

    // eslint-disable-next-line
  }, [uploadLabTestPinResult]);

  const handleSubmitPin = () => {
    setLoader(true);
    setIsInvalidPin(false);
    dispatch(uploadLabTestPin(pin));
  };

  return (
    <Layout hideBackButton={hideBackButton}>
      <LabTest
        completedSteps={completedSteps}
        isInvalidPin={isInvalidPin}
        loader={loader}
        onReset={handleResetSteps}
        onSubmit={handleSubmitPin}
        pin={pin}
        setCompletedSteps={setCompletedSteps}
        setPin={setPin}
      />
      {loader && <PinVerificationLoader />}
    </Layout>
  );
};

export default LabTestContainer;
