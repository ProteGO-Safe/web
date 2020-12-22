import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useModalContext from '../../hooks/useModalContext';
import ResultLabTest from './ResultLabTest';
import { ModalFooter } from './components';
import { Layout, T } from '../../components';
import useNavigation from '../../hooks/useNavigation';
import { revokeEnStatus } from '../../store/actions/nativeData';
import { confirmManualCovid, revokeManualCovid, revokeTorStatus } from '../../store/actions/triage';
import { InfoNegativeLabTest } from '../InfoNegativeLabTest';
import { Routes } from '../../services/navigationService/routes';

const ResultLabTestContainer = () => {
  const dispatch = useDispatch();
  const { goTo } = useNavigation();
  const { openModal, onClose } = useModalContext();

  const [showNegativeView, setShowNegativeView] = useState(false);

  const closeModal = () => {
    onClose();
    goTo(Routes.Home);
  };

  const handlePositiveYes = () => {
    dispatch(confirmManualCovid());
    closeModal();
  };

  const handleNegativeYes = () => {
    dispatch(revokeEnStatus()).then(() => {
      dispatch(revokeTorStatus());
      dispatch(revokeManualCovid());
      onClose();
      setShowNegativeView(true);
    });
  };

  const BUTTONS = [
    {
      type: 'default',
      name: <T i18nKey="result_test_lab_text1" />,
      onClick: () =>
        openModal({
          value: <T i18nKey="result_test_lab_text9" />,
          modalTitle: <T i18nKey="result_test_lab_text10" />,
          modalFooter: <ModalFooter handleClickYes={() => handlePositiveYes()} handleClickCancel={onClose} />
        })
    },
    {
      type: 'default',
      name: <T i18nKey="result_test_lab_text2" />,
      onClick: () =>
        openModal({
          value: <T i18nKey="result_test_lab_text5" />,
          modalTitle: <T i18nKey="result_test_lab_text6" />,
          modalFooter: <ModalFooter handleClickYes={() => handleNegativeYes()} handleClickCancel={onClose} />
        })
    }
  ];

  if (showNegativeView) {
    return <InfoNegativeLabTest />;
  }

  return (
    <Layout isNavigation fullHeight hideBackButton>
      <ResultLabTest
        title={<T i18nKey="result_test_lab_text8" />}
        content={<T i18nKey="result_test_lab_text7" />}
        buttons={BUTTONS}
      />
    </Layout>
  );
};

export default ResultLabTestContainer;
