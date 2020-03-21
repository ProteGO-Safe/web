import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { DiagnosisAlreadyDone } from './components/DiagnosisAlreadyDone';
import RiskTest from './RiskTest';
import createCalendar from '../../utills/calendar';

const RiskTestContainer = () => {
  const history = useHistory();
  const questionnaires = useSelector(state => state.questionnaires);
  const [isFilled, setIsFilled] = useState(false);

  const daysInQuestionnaires = Object.keys(questionnaires);
  const calendar = createCalendar(daysInQuestionnaires);

  const makeDiagnosisInLast12Hours = () => {
    const _12HoursAgo = moment().subtract(12, 'h');
    return daysInQuestionnaires.some(value => _12HoursAgo.diff(value) <= 0);
  };

  const goToDiagnosis = () => {
    if (makeDiagnosisInLast12Hours()) {
      setIsFilled(true);
      return;
    }
    history.push('/diagnosis');
  };

  const goToHome = () => history.push('/');

  if (isFilled) {
    return <DiagnosisAlreadyDone goBack={() => setIsFilled(false)} />;
  }

  return (
    <RiskTest
      onBack={goToHome}
      onFill={goToDiagnosis}
      calendar={calendar}
    />
  );
};

export default RiskTestContainer;
