import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import triageLevelResolver from '../../utills/triage';
import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, Ok, Warning } from '../../components';
import { Header } from '../components/Header';
import './Home.scss';

const OkCase = ({ text }) => (
  <>
    <Ok color="blue" />
    <p className="big text-center text-bold">{text}</p>
  </>
);

const WarningCase2 = ({ text }) => (
  <>
    <Ok color="blue" />
    <h2>{text}</h2>
  </>
);

const WarningCase3 = ({ text }) => (
  <>
    <Warning color="yellow" />
    <h2>{text}</h2>
  </>
);

const WarningCase4 = ({ text }) => (
  <>
    <Warning color="orange" />
    <h2>{text}</h2>
  </>
);

const WarningCase5 = ({ text }) => (
  <>
    <Warning color="red" />
    <h2>{text}</h2>
  </>
);

const Home = () => {
  const history = useHistory();
  const { triageLevel } = useSelector(state => state.triage);
  const triageLevelInformation = triageLevelResolver(triageLevel);
  const renderRiskLevel = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return <OkCase text={triageLevelInformation} />;
      }
      case 'self_monitoring': {
        return <WarningCase2 text={triageLevelInformation} />;
      }
      case 'quarantine': {
        return <WarningCase3 text={triageLevelInformation} />;
      }
      case 'isolation_call': {
        return <WarningCase4 text={triageLevelInformation} />;
      }
      case 'isolation_ambulance': {
        return <WarningCase5 text={triageLevelInformation} />;
      }
      default: {
        return null;
      }
    }
  })();

  return (
    <div className="view view__home">
      <Header background={Background} />
      <Container>
        <p>
          przeanalizowaliśmy Twoje odpowiedzi na podstawie wytycznych WHO, w tym
          momencie jesteś w grupie:
        </p>
        {renderRiskLevel}
        <Button
          onClick={() => history.push('/risk-information')}
          type="primary"
          text="Co mam zrobić?"
        />
      </Container>
    </div>
  );
};

export default Home;
