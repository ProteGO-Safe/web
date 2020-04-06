import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import Background__fakemap from '../../assets/img/fake/fake___numbers-map.webp';
import icoPhone from '../../assets/img/icons/phone.svg';
import icoNavigation from '../../assets/img/icons/navigation.svg';
import icoRight from '../../assets/img/icons/angle-right.svg';
import { Container } from '../../components';
import { Header } from '../components';
import { Button } from '../../components/Button';
import './Numbers.scss';

const callEmergency = () => {
  window.open( 'tel:800190590' );
  return null;
}

const Numbers = () => (
  <div className="view view__numbers">
    <Header background={Background} prevUrl="/" />
    <Container background={Background__fakemap}>
      <div className="content">
        <h3>Szukaj pomocy w Twojej okolicy</h3>
        <Button
          icon={icoPhone}
          text='Zadzwoń na infolinię 800 190 590'
          onClick={callEmergency}
          height="normal"
          iconLeft
          type="white"
        />
        <Button
          icon={icoNavigation}
          text='Pokaż najbliższe szpitale zakaźne i sanepidy w okolicy'
          disabled
          onClick={() => {}}
          height="normal"
          iconLeft
          type="white"
        />
        <Button
          icon={icoRight}
          text='Pokaż adresy szpitali zakaźnych'
          onClick={() => {}}
          height="small"
          type="blank"
        />
        <Button
          icon={icoRight}
          text='Pokaż adresy sanepidów'
          disabled
          onClick={() => {}}
          height="small"
          type="blank"
        />
        <Button
          icon={icoRight}
          text='Teleporady'
          disabled
          onClick={() => {}}
          height="small"
          type="blank"
        />
      </div>
    </Container>
  </div>
);

export default Numbers;
