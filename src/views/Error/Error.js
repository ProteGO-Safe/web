import React from 'react';
import { Header, ResultView } from '../../components';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';

const Error = ({ icon, buttons, colorTitle, title, text }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <ResultView
            icon={icon}
            buttons={buttons}
            colorTitle={colorTitle}
            title={title}
            text={text}
          />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default Error;
