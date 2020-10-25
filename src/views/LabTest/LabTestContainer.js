import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LabTest from './LabTest';
import { PinVerificationLoader } from './components';
import { Layout } from '../../components';
import Routes from '../../routes';
import { NUMBER_OF_STEPS } from './labTest.constants';
import {
  resetUploadTestPinResult,
  uploadTestPin
} from '../../store/actions/nativeData';
import { getUploadTestPinResult } from '../../store/selectors/nativeData';

const LabTestContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadTestPinResult = useSelector(getUploadTestPinResult);

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
    dispatch(resetUploadTestPinResult());
    return () => {
      dispatch(resetUploadTestPinResult());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (uploadTestPinResult === 1) {
      setLoader(false);
      setCompletedSteps(2);
      history.push(`${Routes.LabTest}/3`);
    }

    if (uploadTestPinResult === 2 || uploadTestPinResult === 3) {
      setLoader(false);
      setIsInvalidPin(true);
      setPin(undefined);
    }
    // eslint-disable-next-line
  }, [uploadTestPinResult]);

  const handleSubmitPin = () => {
    setLoader(true);
    setIsInvalidPin(false);
    dispatch(uploadTestPin(pin));
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
