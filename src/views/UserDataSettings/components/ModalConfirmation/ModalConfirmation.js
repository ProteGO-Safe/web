import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import Routes from '../../../../routes';
import useLoaderContext from '../../../../hooks/useLoaderContext';
import { clearBluetoothData } from '../../../../store/actions/nativeData';

const ModalConfirmation = () => {
  const dispatch = useDispatch();
  const { onClose } = useModalContext();
  const history = useHistory();
  const { setLoader } = useLoaderContext();

  const handleClose = () => {
    dispatch(clearBluetoothData());
    localStorage.clear();

    onClose();

    setLoader(true);
    setTimeout(() => setLoader(false), 5000);
    history.push(Routes.Home);
  };

  useEffect(() => () => window.location.reload(), []);

  return (
    <div className="user-data__modal-confirmation">
      <h4 className="text-center">Twoje dane zostały wymazane.</h4>
      <Button onClick={handleClose} text="OK" />
    </div>
  );
};

export default ModalConfirmation;
