import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './RiskInformation.scss';

const RiskInformation = () => {
  const history = useHistory();
  const { triageLevel } = useSelector(state => state.triage);

  const renderRiskHeader = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return 'todo';
      }
      case 'self_monitoring': {
        return 'todo';
      }
      case 'quarantine': {
        return 'todo';
      }
      case 'isolation_call': {
        return 'todo';
      }
      case 'isolation_ambulance': {
        return 'todo';
      }
      default: {
        return null;
      }
    }
  })();

  const renderRiskInformation = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return 'todo';
      }
      case 'self_monitoring': {
        return 'todo';
      }
      case 'quarantine': {
        return 'todo';
      }
      case 'isolation_call': {
        return 'todo';
      }
      case 'isolation_ambulance': {
        return 'todo';
      }
      default: {
        return null;
      }
    }
  })();

  return (
    <div className="view view__risk-information">
      <Banner background={Background}>
        <Back onClick={() => history.push('/')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <p className="p2 small text-center">{renderRiskHeader}</p>
        <div className="content">
          <p className="p1 small">{renderRiskInformation}</p>
        </div>
      </Container>
    </div>
  );
};

export default RiskInformation;
