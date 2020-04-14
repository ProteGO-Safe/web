import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import {
  IconButton,
  Content,
  Info,
  Map,
  Navigation,
  Phone,
  Text,
  ArrowButton,
  Text2,
  AngleRight,
  Line
} from './Numbers.styled';
import Routes from '../../routes';

const Numbers = () => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);
  const phoneClick = () => {
    window.open('tel:800190590');
  };

  return (
    <div className="view view__numbers">
      <Header />
      <Map />
      <Content>
        <Info>Szukaj pomocy w Twojej okolicy</Info>
        <IconButton onClick={phoneClick}>
          <Phone />
          <Text>Zadzwoń na infolinię</Text>
        </IconButton>
        <IconButton>
          <Navigation />
          <Text>
            Pokaż najbliższe szpitale zakaźne
            <br />i sanepidy w okolicy
          </Text>
        </IconButton>
        <ArrowButton onClick={goToHospitalsList}>
          <Text2>Pokaż adresy szpitali zakaźnych</Text2>
          <AngleRight />
        </ArrowButton>
        <ArrowButton>
          <Text2>Pokaż adresy sanepidów</Text2>
          <AngleRight />
        </ArrowButton>
        <ArrowButton>
          <Text2>Teleporady</Text2>
          <AngleRight />
        </ArrowButton>
        <Line />
      </Content>
      <BottomNavigation />
    </div>
  );
};

export default Numbers;
