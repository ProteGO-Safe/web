import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UploadData } from './components/UploadData';
import { endUploadHistoricalData, uploadHistoricalData } from '../../store/actions/nativeData';
import UploadInProgress from './components/UploadInProgress/UploadInProgress';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';
import { UploadSuccess } from './components/UploadSuccess';
import { T } from '../../components';
import banPinTries from '../../services/banPinTries';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from '../../store/reducers/app/app.constants';
import {
  getUploadHistoricalDataStateErrorMessageVisible,
  getWarningInEuropeTermState
} from '../../store/selectors/app';
import { hideUploadHistoricalDataErrorMessage } from '../../store/actions/app';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import { NavigationBackGuard } from '../../components/NavigationBackGuard';
import { UPLOAD_DATA } from '../../services/banPinTries/pin.types';

const UploadHistoricalData = () => {
  const { goTo, goBack, getParam } = useNavigation();
  const { areEnableAllServices } = useSupportExposureNotificationTracing();
  const MAX_UPLOAD_TIME = 60;
  const dispatch = useDispatch();
  const { name: userName } = useSelector(state => state.user);
  const isInteroperabilityEnabled = useSelector(getWarningInEuropeTermState);
  const errorMessageVisible = useSelector(getUploadHistoricalDataStateErrorMessageVisible);
  const {
    uploadHistoricalDataState: { status, date, unsuccessfulAttempts } = {
      status: uploadState.EMPTY,
      date: null
    }
  } = useSelector(state => state.app);

  const [pin, setPin] = useState(getParam('pin') || '');
  const [banData, setBanData] = useState(null);
  const [showBackGuard, setShowBackGuard] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!areEnableAllServices) {
      goTo(Routes.Home);
    }
    // eslint-disable-next-line
  }, [areEnableAllServices]);

  useEffect(() => {
    if (unsuccessfulAttempts) {
      const banInfo = banPinTries.getBanData(unsuccessfulAttempts);
      setBanData(banInfo);
    }
  }, [unsuccessfulAttempts]);

  useEffect(() => {
    if (banData && banData.lockdownTime) {
      const timer = setTimeout(() => {
        setBanData(banPinTries.getBanData(unsuccessfulAttempts));
      }, banData.lockdownTime);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [banData, unsuccessfulAttempts]);

  useEffect(() => {
    const dateNow = new Date();
    const endUpload = date + MAX_UPLOAD_TIME * 1000;
    setIsUploading(dateNow < endUpload);
    const timeout = dateNow < endUpload ? endUpload - dateNow : 0;
    const timer = setTimeout(() => {
      setIsUploading(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [date]);

  const uploadData = () => {
    dispatch(uploadHistoricalData(pin, isInteroperabilityEnabled));
  };

  const hideErrorMessage = () => {
    dispatch(hideUploadHistoricalDataErrorMessage());
  };

  const finishUpload = () => {
    dispatch(endUploadHistoricalData()).then(goTo(Routes.Home));
  };

  const handleBack = () => {
    if (pin && pin.toString().length) {
      setShowBackGuard(true);
      return;
    }
    goBack();
  };

  const backOnGuard = () => {
    setPin(undefined);
    setShowBackGuard(false);
    goBack();
  };

  if (status === uploadState.REQUESTED && isUploading) {
    return <UploadInProgress />;
  }

  if (status === uploadState.SUCCESS) {
    return <UploadSuccess finishUpload={finishUpload} />;
  }
  const getErrorMessage = () => {
    if (status === uploadState.DENIED) {
      return null;
    }
    return banData && banPinTries.createErrorMessage(banData, unsuccessfulAttempts.length, UPLOAD_DATA);
  };
  return (
    <>
      <UploadData
        disableButton={status === uploadState.REQUESTED}
        disablePinInput={Boolean(banData && banData.lockdownTime)}
        errorMessage={getErrorMessage()}
        errorMessageVisible={errorMessageVisible}
        handleBack={handleBack}
        hideErrorMessage={hideErrorMessage}
        onUploadData={uploadData}
        pin={pin}
        setPin={setPin}
        userName={userName}
      />
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

export default UploadHistoricalData;
