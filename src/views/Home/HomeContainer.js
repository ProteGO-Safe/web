import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Home from './Home';
import { Diagnosis } from '../Diagnosis';
import { getLastDate } from '../../utills/calendar';
import { Color } from '../../theme/colors';
import smileGreen from '../../assets/img/icons/buzka-zielona.svg';
import smileRed from '../../assets/img/icons/buzka-czerwona.svg';
import smileBlue from '../../assets/img/icons/buzka-niebieska.svg';
import smileYellow from '../../assets/img/icons/buzka-zolta.svg';
import hasBadge from '../../utills/badge';

const HomeContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);
  const { serious = [], triageLevel, description } = useSelector(
    state => state.triage
  );
  const { name: userName } = useSelector(state => state.user);
  const { notification } = useSelector(state => state.nativeData);

  const filledDays = Object.keys(riskTest);

  if (filledDays.length === 0) {
    return <Diagnosis />;
  }

  const resolveRiskGroup = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return 'Niskie ryzyko infekcji';
      }
      case 'self_monitoring': {
        return 'Niskie ryzyko infekcji';
      }
      case 'quarantine': {
        return 'Średnie ryzyko infekcji';
      }
      case 'isolation_call': {
        return 'Wysokie ryzyko infekcji';
      }
      case 'isolation_ambulance': {
        return 'Wysokie ryzyko infekcji';
      }
      default: {
        return null;
      }
    }
  })();

  const resolveInfoContent = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return 'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).';
      }
      case 'self_monitoring': {
        return 'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).';
      }
      case 'quarantine': {
        return 'Jeśli twoje objawy wydają się niepokojące – reaguj. Przeczytaj poniżej, jakich zasad powinieneś|powinnaś przestrzegać i na czyją pomoc możesz liczyć.';
      }
      case 'isolation_call': {
        return 'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.';
      }
      case 'isolation_ambulance': {
        return 'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.';
      }
      default: {
        return null;
      }
    }
  })();

  const resolveRiskColor = (() => {
    switch (triageLevel) {
      case 'quarantine': {
        return Color.info;
      }
      case 'isolation_call': {
        return Color.danger;
      }
      case 'isolation_ambulance': {
        return Color.danger;
      }
      default: {
        return null;
      }
    }
  })();

  const renderRiskLevel = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return smileGreen;
      }
      case 'self_monitoring': {
        return smileGreen;
      }
      case 'quarantine': {
        return smileYellow;
      }
      case 'isolation_call': {
        return smileRed;
      }
      case 'isolation_ambulance': {
        return smileRed;
      }
      default: {
        return smileBlue;
      }
    }
  })();

  const lastDate = getLastDate(filledDays);

  const seriousNames = serious.map(_obj => _obj.common_name);

  const triage =
    triageLevel &&
    !(triageLevel === 'no_risk' || triageLevel === 'self_monitoring');

  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  const showBadge = hasBadge(filledDays);

  return (
    <Home
      lastDate={lastDate}
      infoContent={resolveInfoContent}
      onClickGoToDiagnosis={goToDiagnosis}
      riskColor={resolveRiskColor}
      riskDescription={description}
      riskGroup={resolveRiskGroup}
      riskLevel={renderRiskLevel}
      seriousNames={seriousNames}
      showBadge={showBadge}
      showNotification={notification && notification.isVisible}
      triage={triage}
      userName={userName}
    />
  );
};

export default HomeContainer;
