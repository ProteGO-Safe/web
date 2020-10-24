import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LabTest from './LabTest';
import { PinVerificationLoader } from './components';
import { Layout } from '../../components';
import Routes from '../../routes';
import { NUMBER_OF_STEPS } from './labTest.constants';

const LabTestContainer = () => {
  const history = useHistory();

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

  const handleSubmitPin = () => {
    // todo - remove logic below, it is only mock for ui

    setLoader(true);

    if (!isInvalidPin) {
      setIsInvalidPin(true);

      setTimeout(() => {
        setLoader(false);
        setPin(undefined);
      }, 2000);
      return;
    }

    if (isInvalidPin) {
      setTimeout(() => setLoader(false), 2000);
      setCompletedSteps(2);
      history.push(`${Routes.LabTest}/3`);
    }
  };

  return (
    <Layout hideBackButton={hideBackButton}>
      <LabTest
        completedSteps={completedSteps}
        isInvalidPin={isInvalidPin}
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
