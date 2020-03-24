import React from 'react';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';

const ModalContent = () => {
  const { onClose, openModal } = useModalContext();

  const handleSubmit = () => {
    openModal(<ModalConfirmation />, 'dialog');
    localStorage.clear();
  };

  return (
    <div className="user-data__modal-content">
      <h4 className="text-center medium-2">Czy jesteś pewien?</h4>
      <p className="text-center medium">
        Tej operacji nie da się odwrócić. Stracisz całą historię, wszystkie
        podane dane a także zostaniesz przeniesiony/a do pierwszego ekranu.
        Jeżeli będziesz chciał/a korzystać dalej z aplikacji będziesz musiał/a
        podać jeszcze raz wszystkie swoje dane.
      </p>
      <div className="buttons">
        <Button onClick={onClose} text="Nie" />
        <Button onClick={handleSubmit} text="Tak" />
      </div>
    </div>
  );
};

export default ModalContent;
