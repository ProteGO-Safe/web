import React from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';

const ModalContent = () => {
  const { onClose, openModal } = useModalContext();

  const handleSubmit = () => {
    openModal(<ModalConfirmation />, 'dialog');
  };

  return (
    <div className="user-data__modal-content">
      <h4 className="text-center medium-2">Czy na pewno wymazać dane?</h4>
      <p className="text-center medium">
        Tej operacji nie da się odwrócić. Stracisz całą historię i wszystkie
        podane dane. Jeśli będziesz chciała/chciał korzystać dalej z aplikacji,
        konieczne bedzie ponowne podanie danych. W celu pełnego wymazania danych
        możemy przenieść Cię do ustawień systemowych, gdzie będziesz mógł
        wymazać także dane spotkań.
      </p>
      <div className="buttons">
        <Button onClick={handleSubmit} text="Tak" />
        <Button onClick={onClose} text="Nie" />
      </div>
    </div>
  );
};

export default ModalContent;
