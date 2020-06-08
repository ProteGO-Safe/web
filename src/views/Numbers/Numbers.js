import React from 'react';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import {
  BottomNavigation,
  BordersButton,
  Header,
  LineItem,
  PhoneNumber
} from '../../components';
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
          <PhoneNumber value="800190590">
            <BordersButton
              className="small"
              text="Zadzwoń na infolinię - 800190590"
              icon={<Phone />}
            >
              Zadzwoń na infolinię - 800190590
            </BordersButton>
          </PhoneNumber>
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
