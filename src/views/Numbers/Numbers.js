import React from 'react';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import {
  BottomNavigation,
  Button,
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
            <Button
              onClick={() => null}
              className="small"
              label="Zadzwoń na infolinię - 800190590"
              type="border"
              icon={<Phone />}
            />
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
