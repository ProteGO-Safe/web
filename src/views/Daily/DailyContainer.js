import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';

import { DiagnosisAlreadyDone } from './components/DiagnosisAlreadyDone';
import Daily from './Daily';

const dateFormat = 'dddd - D-MM-YYYY';
const todayFormat = 'D-MM-YYYY';

const DailyContainer = () => {
  const history = useHistory();
  const questionnaires = useSelector(state => state.questionnaires);
  const [showDiagnosisAlreadyDone, setShowDiagnosisAlreadyDone] = useState(
    false
  );
  moment.locale('pl');
  const day = moment();
  const today = day.format(todayFormat);

  const daysInQuestionnaires = Object.keys(questionnaires);

  const previousDays = [];
  for (let index = 0; index < 14; index++) {
    const dayBefore = day.subtract(1, 'days');
    const isFilled = daysInQuestionnaires.some(value =>
      moment(value).isSame(dayBefore, 'day')
    );
    previousDays.push({ day: dayBefore.format(dateFormat), isFilled });
  }

  const makeDiagnosisInLast12Hours = () => {
    const _12HoursAgo = moment().subtract(12, 'h');
    return daysInQuestionnaires.some(value => _12HoursAgo.diff(value) <= 0);
  };

  const goToDiagnosis = () => {
    if (makeDiagnosisInLast12Hours()) {
      setShowDiagnosisAlreadyDone(true);
      return;
    }
    history.push('/diagnosis');
  };

  const goToHome = () => history.push('/');

  if (showDiagnosisAlreadyDone) {
    return (
      <DiagnosisAlreadyDone goBack={() => setShowDiagnosisAlreadyDone(false)} />
    );
  }

  return (
    <Daily
      onBack={goToHome}
      onFill={goToDiagnosis}
      today={today}
      previousDays={previousDays}
    />
  );
};

export default DailyContainer;
