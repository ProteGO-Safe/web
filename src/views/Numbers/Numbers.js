import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container } from '../../components';
import { Button } from '../../components/Button';

import Background__fakemap from '../../assets/img/fake/fake___numbers-map.webp';
import icoPhone from '../../assets/img/icons/phone.svg';
import icoNavigation from '../../assets/img/icons/navigation.svg';
import icoRight from '../../assets/img/icons/angle-right.svg';

import './Numbers.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const Numbers = () => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);

  const goBack = () => history.push(Routes.Home);

  const callEmergency = () => {
    window.open('tel:800190590');
    return null;
  };

  return (
    <div className="view view__numbers">
      <Header onBackClick={goBack} />
      <Container background={Background__fakemap}>
        <div className="content">
          <h3>Szukaj pomocy w Twojej okolicy</h3>
          <Button
            icon={icoPhone}
            text="Zadzwoń na infolinię 800 190 590"
            onClick={callEmergency}
            height="normal"
            iconLeft
            type="white"
          />
          <Button
            icon={icoNavigation}
            text="Pokaż najbliższe szpitale zakaźne i sanepidy w okolicy"
            disabled
            onClick={() => {}}
            height="normal"
            iconLeft
            type="white"
          />
          <Button
            icon={icoRight}
            text="Pokaż adresy szpitali zakaźnych"
            onClick={goToHospitalsList}
            height="small"
            type="blank"
          />
          <Button
            icon={icoRight}
            text="Pokaż adresy sanepidów"
            disabled
            onClick={() => {}}
            height="small"
            type="blank"
          />
          <Button
            icon={icoRight}
            text="Teleporady"
            disabled
            onClick={() => {}}
            height="small"
            type="blank"
          />
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Numbers;
