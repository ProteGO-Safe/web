import React from 'react';
import { Container } from '../../../../components';
import { Header } from '../../../../components/Header';
import './RiskTestAlreadyDone.scss';

const RiskTestAlreadyDone = ({ goBack }) => {
  return (
    <div className="view view__regulations">
      <Header onBackClick={goBack} />
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
