import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './Numbers.scss';

const Numbers = () => {
  const history = useHistory();

  return (
    <div className="view view__numbers">
      <Banner background={Background}>
        <Back onClick={() => history.push('/')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="h1 text-center medium">Numery alarmowe</h4>
        <div className="content">
          <h4 className="h2 big">Najważniejsze kontakty:</h4>
          <div className="address">
            <h3 className="h3">Dolnośląskie</h3>
            <p className="p1 small">
              Powiatowa Stacja Sanitarno-Epidemiologiczna we Wrocławiu
            </p>
            <p className="p2 small text-bold">tel. 71 329 58 43</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Numbers;
