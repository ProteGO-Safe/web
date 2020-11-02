import React from 'react';
import { withTranslation } from 'react-i18next';
import useModalContext from '../../hooks/useModalContext';
import ResultLabTest from './ResultLabTest';
import { ModalFooter } from './components';
import { Layout } from '../../components';

const ResultLabTestContainer = ({ t }) => {
  const { openModal, onClose } = useModalContext();

  const BUTTONS = [
    {
      type: 'default',
      name: t('result_test_lab_text1'),
      onClick: () =>
        openModal(
          <>
            {t('result_test_lab_text9')}{' '}
            <strong>{t('result_test_lab_text4')}.</strong>
          </>,
          'dialog',
          t('result_test_lab_text10'),
          <ModalFooter
            handleClickYes={() => null}
            handleClickCancel={onClose}
          />
        )
    },
    {
      type: 'default',
      name: t('result_test_lab_text2'),
      onClick: () =>
        openModal(
          t('result_test_lab_text5'),
          'dialog',
          t('result_test_lab_text6'),
          <ModalFooter
            handleClickYes={() => null}
            handleClickCancel={onClose}
          />
        )
    }
  ];

  return (
    <Layout isNavigation fullHeight noPadding>
      <ResultLabTest
        title={t('result_test_lab_text8')}
        content={t('result_test_lab_text7')}
        buttons={BUTTONS}
      />
    </Layout>
  );
};

export default withTranslation()(ResultLabTestContainer);
