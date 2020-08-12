import React from 'react';
import { withTranslation } from 'react-i18next';
import { Layout, ResultView } from '../../../../components';
import PositiveIcon from '../../../../assets/img/icons/success-icon.svg';

const UploadSuccess = ({ t, finishUpload }) => {
  const buttons = [
    {
      label: t('ok'),
      onClick: finishUpload
    }
  ];

  return (
    <Layout hideBackButton isNavigation>
      <ResultView
        title={t('upload_success_text1')}
        text={t('upload_success_text2')}
        icon={PositiveIcon}
        buttons={buttons}
      />
    </Layout>
  );
};

export default withTranslation()(UploadSuccess);
