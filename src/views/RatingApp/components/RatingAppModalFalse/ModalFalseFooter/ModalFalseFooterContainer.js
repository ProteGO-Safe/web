import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from '../../../../../services/navigationService/routes';
import ModalFalseFooter from './ModalFalseFooter';
import useLanguage from '../../../../../hooks/useLanguage';
import useNavigation from '../../../../../hooks/useNavigation';
import useModalContext from '../../../../../hooks/useModalContext';
import { rateApplicationShowed } from '../../../../../store/actions/app';

const ModalFalseFooterContainer = () => {
  const dispatch = useDispatch();
  const { isPolish } = useLanguage();
  const { goTo } = useNavigation();
  const { onClose } = useModalContext();

  const onClickSkip = () => {
    dispatch(rateApplicationShowed());
    onClose();
  };

  const onClickGiveFeedback = () => {
    dispatch(rateApplicationShowed());
    onClose();
    if (isPolish) {
      return;
    }
    goTo(Routes.ReportBug);
  };

  return (
    <ModalFalseFooter
      isPolish={isPolish}
      handleClickTrue={onClickGiveFeedback}
      handleClickFalse={onClickSkip}
      path="https://www.gov.pl/web/protegosafe/pytania-i-odpowiedzi"
    />
  );
};

export default ModalFalseFooterContainer;
