import React from 'react';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { BordersButton } from '../../components/BordersButton';
import { LineItem } from '../../components/LineItem';
import { Info, Phone, Line } from './Numbers.styled';
import { Container, Content, View } from '../../theme/grid';

const Numbers = () => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Info>Szukaj pomocy w Twojej okolicy</Info>
          <BordersButton
            className="small"
            text="Zadzwoń na infolinię - 800190590"
            icon={<Phone />}
          />
          <LineItem
            onClick={goToHospitalsList}
            text="Pokaż adresy szpitali zakaźnych"
          />
          <Line />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default Numbers;
