import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from '../../../../components/Header/Header';
import { BottomNavigation } from '../../../../components/BottomNavigation';
import { ResultView } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import PositiveIcon from '../../../../assets/img/icons/success-icon.svg';

const UploadSuccess = ({ t, finishUpload }) => {
  const buttons = [
    {
      label: t('ok'),
      onClick: finishUpload
    }
  ];

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <ResultView
            title={t('upload_success_text1')}
            text={t('upload_success_text2')}
            icon={PositiveIcon}
            buttons={buttons}
          />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(UploadSuccess);
