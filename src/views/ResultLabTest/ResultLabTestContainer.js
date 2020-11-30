import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import useModalContext from '../../hooks/useModalContext';
import ResultLabTest from './ResultLabTest';
import { ModalFooter } from './components';
import { Layout } from '../../components';
import useNavigation from '../../hooks/useNavigation';
import { revokeEnStatus } from '../../store/actions/nativeData';
import { confirmManualCovid, revokeManualCovid, revokeTorStatus } from '../../store/actions/triage';
import { InfoNegativeLabTest } from '../InfoNegativeLabTest';
import { Routes } from '../../services/navigationService/routes';

const ResultLabTestContainer = ({ t }) => {
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
      name: t('result_test_lab_text1'),
      onClick: () =>
        openModal({
          value: (
            <>
              {t('result_test_lab_text9')} <strong>{t('result_test_lab_text4')}.</strong>
            </>
          ),
          modalTitle: t('result_test_lab_text10'),
          modalFooter: <ModalFooter handleClickYes={() => handlePositiveYes()} handleClickCancel={onClose} />
        })
    },
    {
      type: 'default',
      name: t('result_test_lab_text2'),
      onClick: () =>
        openModal({
          value: t('result_test_lab_text5'),
          modalTitle: t('result_test_lab_text6'),
          modalFooter: <ModalFooter handleClickYes={() => handleNegativeYes()} handleClickCancel={onClose} />
        })
    }
  ];

  if (showNegativeView) {
    return <InfoNegativeLabTest />;
  }

  return (
    <Layout isNavigation fullHeight noPadding hideBackButton>
      <ResultLabTest title={t('result_test_lab_text8')} content={t('result_test_lab_text7')} buttons={BUTTONS} />
    </Layout>
  );
};

export default withTranslation()(ResultLabTestContainer);
