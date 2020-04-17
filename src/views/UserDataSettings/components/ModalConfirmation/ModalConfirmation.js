import React, { useEffect } from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';

import Routes from '../../../../routes';
import { useHistory } from 'react-router-dom';
import useLoaderContext from '../../../../hooks/useLoaderContext';

const ModalConfirmation = () => {
  const { onClose } = useModalContext();
  const history = useHistory();
  const { setLoader } = useLoaderContext();

  const handleClose = () => {
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
