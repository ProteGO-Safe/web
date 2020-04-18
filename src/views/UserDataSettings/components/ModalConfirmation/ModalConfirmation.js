import React, { useEffect } from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';

const ModalConfirmation = () => {
  const { onClose } = useModalContext();

  useEffect(() => () => window.location.reload(), []);

  return (
    <div className="user-data__modal-confirmation">
      <h4 className="text-center">Twoje dane zostały wymazane.</h4>
      <Button onClick={onClose} text="OK" />
    </div>
  );
};

export default ModalConfirmation;
