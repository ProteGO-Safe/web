import React from 'react';
import { Container, Content, View } from '../../theme/grid';
import { Header, BottomNavigation } from '../../components';
import AdviceInformation from './AdviceInformation';
import advicesData from './advices.json';

const AdviceInformationContainer = () => {
  if (!advicesData) {
    return null;
  }

  const { advices, watermark } = advicesData;
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height tips">
          <AdviceInformation
            title="Porady"
            collapse={advices}
            watermark={watermark}
          />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default AdviceInformationContainer;
