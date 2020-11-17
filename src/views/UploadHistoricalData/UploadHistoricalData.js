import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { UploadData } from './components/UploadData';
import {
  endUploadHistoricalData,
  uploadHistoricalData
} from '../../store/actions/nativeData';
import UploadInProgress from './components/UploadInProgress/UploadInProgress';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';
import { UploadSuccess } from './components/UploadSuccess';
import banPinTries from '../../services/banPinTries';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from '../../store/reducers/app/app.constants';
import {
  getUploadHistoricalDataStateErrorMessageVisible,
  getWarningInEuropeTermState
} from '../../store/selectors/app';
import { hideUploadHistoricalDataErrorMessage } from '../../store/actions/app';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const UploadHistoricalData = ({ t }) => {
  const { goTo } = useNavigation();
  const { areEnableAllServices } = useSupportExposureNotificationTracing();
  const MAX_UPLOAD_TIME = 60;
  const dispatch = useDispatch();
  const { name: userName } = useSelector(state => state.user);
  const isInteroperabilityEnabled = useSelector(getWarningInEuropeTermState);
  const errorMessageVisible = useSelector(
    getUploadHistoricalDataStateErrorMessageVisible
  );
  const {
    uploadHistoricalDataState: { status, date, unsuccessfulAttempts } = {
      status: uploadState.EMPTY,
      date: null
    }
  } = useSelector(state => state.app);

  const [pin, setPin] = useState('');
  const [banData, setBanData] = useState(null);
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
    if (isInteroperabilityEnabled) {
      dispatch(uploadHistoricalData(pin, isInteroperabilityEnabled));
    }
    return null;
  };

  const hideErrorMessage = () => {
    dispatch(hideUploadHistoricalDataErrorMessage());
  };

  const finishUpload = () => {
    dispatch(endUploadHistoricalData()).then(goTo(Routes.Home));
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
    return (
      banData &&
      banPinTries.createErrorMessage(banData, unsuccessfulAttempts.length, t)
    );
  };
  return (
    <UploadData
      disableButton={status === uploadState.REQUESTED}
      disablePinInput={Boolean(banData && banData.lockdownTime)}
      errorMessage={getErrorMessage()}
      errorMessageVisible={errorMessageVisible}
      hideErrorMessage={hideErrorMessage}
      onUploadData={uploadData}
      pin={pin}
      setPin={setPin}
      userName={userName}
    />
  );
};

export default withTranslation()(UploadHistoricalData);
