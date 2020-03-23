import React from 'react';

import Background from '../../assets/img/banners/banner-8.png';
import { Banner, Brand, Button, Container, FieldSet } from '../../components';
import './Information.scss';

const Complete = ({ hideInformation }) => {
  return (
    <div className="view view__information">
      <Banner background={Background}>
        <Brand content={false} small white />
      </Banner>
      <Container>
        <div className="content">
          <p className="p1 medium-2">
            Jedną z głównych funkcji tej aplikacji jest{' '}
            <span className="text-bold">
              Ankieta Oceny Ryzyka infekcji COVID-19. Jest stworzona w 100% zgodnie
              z&nbsp;wytycznymi WHO
            </span>{' '}
            (Światowej Organizacji Zdrowia).
          </p>
          <h4 className="medium">WAŻNE - Ankieta Oceny Ryzyka:</h4>
          <p className="p2 medium-2">
            - NIE JEST DIAGNOZĄ. Diagnozę może postawić wyłącznie lekarz i test
            medyczny na obecność wirusa.
            <br />- Pomaga monitorować swój stan zdrowia - Musi zostać
            wypełniony w 100% zgodnie z prawdą
          </p>
          <p className="p3 medium-2 primary-2 text-bold">
            - Musi zostać wypełniony w 100% zgodnie z prawdą
          </p>
        </div>

        <FieldSet>
          <Button onClick={hideInformation} text="Ok, zaczynamy" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Complete;
