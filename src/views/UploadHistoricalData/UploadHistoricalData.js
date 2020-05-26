import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { UploadData } from './components/UploadData';
import {
  endUploadHistoricalData,
  uploadHistoricalData
} from '../../store/actions/nativeData';
import UploadInProgress from './components/UploadInProgress/UploadInProgress';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';
import { UploadSuccess } from './components/UploadSuccess';
import { getBanData, createErrorMessage } from './helpers/ban-pin-tries';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from '../../store/reducers/app/app.constants';
import Routes from '../../routes';

const UploadHistoricalData = () => {
  const { areEnableAllServices } = useSupportExposureNotificationTracing();
  const MAX_UPLOAD_TIME = 60;
  const dispatch = useDispatch();
  const history = useHistory();
  const { name: userName } = useSelector(state => state.user);
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
    if (unsuccessfulAttempts) {
      const banInfo = getBanData(unsuccessfulAttempts);
      setBanData(banInfo);
    }
  }, [unsuccessfulAttempts]);

  useEffect(() => {
    if (banData && banData.lockdownTime) {
      const timer = setTimeout(() => {
        setBanData(getBanData(unsuccessfulAttempts));
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
    const data = {
      pin
    };
    dispatch(uploadHistoricalData(data));
  };

  const finishUpload = () => {
    dispatch(endUploadHistoricalData()).then(history.push(Routes.Home));
  };

  if (status === uploadState.REQUESTED && isUploading) {
    return <UploadInProgress />;
  }

  if (status === uploadState.SUCCESS) {
    return <UploadSuccess finishUpload={finishUpload} />;
  }
  const getErrorMessage = () =>
    banData && createErrorMessage(banData, unsuccessfulAttempts.length);
  return (
    <>
      {areEnableAllServices ? (
        <UploadData
          disableButton={status === uploadState.REQUESTED}
          disablePinInput={Boolean(banData && banData.lockdownTime)}
          errorMessage={getErrorMessage()}
          onUploadData={uploadData}
          pin={pin}
          setPin={setPin}
          userName={userName}
        />
      ) : (
        <Redirect to={Routes.Home} />
      )}
    </>
  );
};

export default UploadHistoricalData;
