import React from 'react';
import Header from '../../../../components/Header/Header';
import { BottomNavigation } from '../../../../components/BottomNavigation';
import { ResultView } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import PositiveIcon from '../../../../assets/img/icons/success-icon.svg';

const UploadSuccess = ({ finishUpload }) => {
  const buttons = [
    {
      text: 'ok',
      onClick: finishUpload
    }
  ];

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <ResultView
            title="Dziękujemy,"
            text="że myślisz o bezpieczeństwie innych. Informacje zostały przesłane. "
            icon={PositiveIcon}
            buttons={buttons}
          />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default UploadSuccess;
