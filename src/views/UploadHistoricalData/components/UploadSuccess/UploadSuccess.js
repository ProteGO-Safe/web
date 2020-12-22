import React from 'react';
import { Layout, ResultView, T } from '../../../../components';
import PositiveIcon from '../../../../assets/img/icons/success-icon.svg';

const UploadSuccess = ({ finishUpload }) => {
  const buttons = [
    {
      label: <T i18nKey="ok" />,
      onClick: finishUpload
    }
  ];

  return (
    <Layout hideBackButton isNavigation>
      <ResultView
        title={<T i18nKey="upload_success_text1" />}
        text={<T i18nKey="upload_success_text2" />}
        icon={PositiveIcon}
        buttons={buttons}
      />
    </Layout>
  );
};

export default UploadSuccess;
