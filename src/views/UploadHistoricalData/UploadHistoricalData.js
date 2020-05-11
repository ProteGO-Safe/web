import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UploadFailed } from './components/UploadFailed';
import {
  endUploadHistoricalData,
  uploadHistoricalData
} from '../../store/actions/nativeData';
import { UploadData } from './components/UploadData';
import { UploadSuccess } from './components/UploadSuccess';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from '../../store/reducers/app/app.constants';
import Routes from '../../routes';
import UploadInProgress from './components/UploadInProgress/UploadInProgress';

const UploadHistoricalData = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name: userName } = useSelector(state => state.user);
  const { uploadHistoricalDataState = uploadState.EMPTY } = useSelector(
    state => state.app
  );

  const [pin, setPin] = useState('');

  const uploadData = () => {
    const data = {
      pin
    };
    dispatch(uploadHistoricalData(data));
  };

  const finishUpload = () => {
    dispatch(endUploadHistoricalData()).then(history.push(Routes.Home));
  };

  if (uploadHistoricalDataState === uploadState.EMPTY) {
    return (
      <UploadData
        userName={userName}
        pin={pin}
        setPin={setPin}
        onUploadData={uploadData}
        disableButton={uploadHistoricalDataState === uploadState.REQUESTED}
      />
    );
  }

  if (uploadHistoricalDataState === uploadState.REQUESTED) {
    return <UploadInProgress />;
  }

  if (uploadHistoricalDataState === uploadState.FAILED) {
    return (
      <UploadFailed
        userName={userName}
        pin={pin}
        setPin={setPin}
        onUploadData={uploadData}
      />
    );
  }

  if (uploadHistoricalDataState === uploadState.SUCCESS) {
    return <UploadSuccess finishUpload={finishUpload} />;
  }

  return null;
};

export default UploadHistoricalData;
