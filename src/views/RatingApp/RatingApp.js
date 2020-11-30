import React, { useEffect, useCallback } from 'react';
import useModalContext from '../../hooks/useModalContext';
import useLanguage from '../../hooks/useLanguage';
import useNavigation from '../../hooks/useNavigation';
import { AVAILABLE_LANGUAGES } from '../../constants';
import { RatingAppModalFooter, RatingAppModalContent } from './components';
import { TYPE } from '../../components/Modal/Modal.helpers';
import { ModalFalseContent, ModalFalseFooter } from './components/RatingAppModalFalse';
import { Routes } from '../../services/navigationService/routes';

const RatingApp = ({ handleClose, handleYes, handleNo }) => {
  const { openModal, onClose } = useModalContext();
  const { language } = useLanguage();
  const { goTo } = useNavigation();

  const handleModalClickYes = useCallback(() => {
    handleYes();
    onClose();
    // eslint-disable-next-line
  }, []);

  const handleModalClickNo = useCallback(() => {
    onClose();
    handleNo();
    openModal({
      value: <ModalFalseContent />,
      modalType: TYPE.CUSTOM,
      modalFooter: (
        <ModalFalseFooter
          type={language === AVAILABLE_LANGUAGES.pl ? 'link' : 'route'}
          path="https://www.gov.pl/web/protegosafe/pytania-i-odpowiedzi"
          handleClickTrue={() => {
            onClose();
            goTo(Routes.ReportBug);
          }}
          handleClickFalse={() => {
            onClose();
          }}
        />
      )
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    openModal({
      value: <RatingAppModalContent />,
      modalType: TYPE.CUSTOM,
      modalFooter: <RatingAppModalFooter handleClickYes={handleModalClickYes} handleClickNo={handleModalClickNo} />,
      closeCallback: handleClose
    });
    // eslint-disable-next-line
  }, []);

  return null;
};

export default RatingApp;
