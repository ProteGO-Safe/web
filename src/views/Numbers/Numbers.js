import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { Header } from '../components';
import './Numbers.scss';

const Numbers = () => (
  <div className="view view__numbers">
    <Header background={Background} prevUrl="/" />
    <Container>
      <h4 className="h1 text-center medium">Numery alarmowe</h4>
      <div className="content">
        <h4 className="h2 big">Najważniejsze kontakty:</h4>
        <div className="address">
          <h3 className="h3">Dolnośląskie</h3>
          <p className="p1 small">
            Powiatowa Stacja Sanitarno-Epidemiologiczna we Wrocławiu
          </p>
          <p className="p2 small text-bold">
            <a href="tel:713295843">tel. 71 329 58 43</a>
          </p>
        </div>
      </div>
    </Container>
  </div>
);

export default Numbers;
