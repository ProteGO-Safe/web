import React from 'react';
import Background from '../../../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../../../components';
import './RiskTestAlreadyDone.scss';

const RiskTestAlreadyDone = ({ goBack }) => {
  return (
    <div className="view view__regulations">
      <Banner background={Background}>
        <Back onClick={goBack} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <div className="content">
          <p className="h4 big text-center text-bold">
            Już odpowiedziałeś na ankietę w tym dniu. Dziękujemy!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RiskTestAlreadyDone;
