import React from 'react';
import { Routes } from '../../../../../services/navigationService/routes';
import ModalFalseFooter from './ModalFalseFooter';
import useLanguage from '../../../../../hooks/useLanguage';
import useNavigation from '../../../../../hooks/useNavigation';
import useModalContext from '../../../../../hooks/useModalContext';

const ModalFalseFooterContainer = () => {
  const { isPolish } = useLanguage();
  const { goTo } = useNavigation();
  const { onClose } = useModalContext();

  const type = isPolish ? 'link' : 'route';

  const onClickSkip = () => {
    onClose();
  };

  const onClickGiveFeedback = () => {
    onClose();
    if (isPolish) {
      window.open('https://www.gov.pl/web/protegosafe/pytania-i-odpowiedzi', '_blank');
    } else {
      goTo(Routes.ReportBug);
    }
  };

  return <ModalFalseFooter type={type} handleClickTrue={onClickGiveFeedback} handleClickFalse={onClickSkip} />;
};

export default ModalFalseFooterContainer;
