import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, Ok, Warning } from '../../components';
import { Header } from '../components/Header';
import './Home.scss';

const Home = () => {
  const history = useHistory();
  const { triageLevel } = useSelector(state => state.triage);
  const userName = useSelector(state => state.user.name);

  const renderRiskLevel = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return <Ok color="blue" />;
      }
      case 'self_monitoring': {
        return <Ok color="blue" />;
      }
      case 'quarantine': {
        return <Warning color="yellow" />;
      }
      case 'isolation_call': {
        return <Warning color="orange" />;
      }
      case 'isolation_ambulance': {
        return <Warning color="red" />;
      }
      default: {
        return null;
      }
    }
  })();

  const renderRiskInfo = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return <Fragment><p className="text-level-1">PRZESTRZEGAJ PROFILAKTYKI</p></Fragment>;
      }
      case 'self_monitoring': {
        return <Fragment><p className="text-level-2">SAMOOBSERWACJA - POZOSTAŃ W DOMU I MONITORUJ STAN ZDROWIA</p></Fragment>;
      }
      case 'quarantine': {
        return <Fragment><p>ODOSOBNIENIE DOMOWE. UNIKAJ KONTAKTU Z DOMOWNIKAMI.</p><p>OBSERWUJ SWÓJ STAN ZDROWIA</p></Fragment>;
      }
      case 'isolation_call': {
        return <Fragment><p>IZOLACJA DOMOWA. UNIKAJ KONTAKTU Z DOMOWNIKAMI.</p><p>SKONTAKTUJ SIĘ Z NUMEREM ALARMOWYM</p></Fragment>;
      }
      case 'isolation_ambulance': {
        return <Fragment><p className="text-error">BEZWZGLĘDNIE NIE OPUSZCZAJ DOMU.</p><p>ZABRONIONY KONTAKT Z INNYMI LUDŹMI/DOMOWNIKAMI.</p><p className="text-error">OBOWIĄZKOWY KONTAKT Z NUMEREM ALARMOWYM</p></Fragment>;
      }
      default: {
        return null;
      }
    }
  })();

  const goToRiskInformation = () =>
    history.push(`/risk-information/${triageLevel}`);

  return (
    <div className="view view__home">
      <Header background={Background} />
      <Container>
        <div className="header">
          {renderRiskLevel}
          <h3 className="primary-2">{userName}</h3>
          <p>
            przeanalizowaliśmy Twoje odpowiedzi na podstawie wytycznych WHO, w tym
            momencie jesteś w grupie:
          </p>
        </div>
        <div className="content">
          {renderRiskInfo}
        </div>
        <Button
          onClick={goToRiskInformation}
          type="primary"
          text="Co mam zrobić?"
        />
      </Container>
    </div>
  );
};

export default Home;
