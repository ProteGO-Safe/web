import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, Info, Map, Navigation, Phone, Line } from './Numbers.styled';
import Routes from '../../routes';
import { BordersButton } from '../../components/BordersButton';
import { LineItem } from '../../components/LineItem';

const Numbers = () => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);
  const phoneClick = () => {
    window.open('tel:800190590');
  };

  return (
    <>
      <Header />
      <Map />
      <Content>
        <Info>Szukaj pomocy w Twojej okolicy</Info>
        <BordersButton
          onClick={phoneClick}
          text="Zadzwoń na infolinię"
          icon={<Phone />}
        />
        <BordersButton
          onClick={() => null}
          text={
            <>
              Pokaż najbliższe szpitale zakaźne
              <br />i sanepidy w okolicy"
            </>
          }
          icon={<Navigation />}
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
