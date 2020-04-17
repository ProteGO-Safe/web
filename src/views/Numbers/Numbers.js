import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, Info, Phone, Line } from './Numbers.styled';
import Routes from '../../routes';
import { BordersButton } from '../../components/BordersButton';
import { LineItem } from '../../components/LineItem';

const Numbers = () => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);
  const phoneClick = () => {
    //window.open('tel:800190590');
    window.location.href="tel:800190590";
  };

  return (
    <>
      <Header />
      <Content>
        <Info>Szukaj pomocy w Twojej okolicy</Info>
        <BordersButton
          onClick={phoneClick}
          text="Zadzwoń na infolinię - 800190590"
          icon={<Phone />}
        />
        <LineItem
          onClick={goToHospitalsList}
          text="Pokaż adresy szpitali zakaźnych"
        />
        <Line />
      </Content>
      <BottomNavigation />
    </>
  );
};

export default Numbers;
