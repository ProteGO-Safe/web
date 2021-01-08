import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import RiskTestData from './RiskTestData';
import { TRIAGE_LEVEL } from './RiskTestData.constants';
import locations from '../../services/diagnosisLogic/locations.json';
import useNavigation from '../../hooks/useNavigation';
import { T } from '../../components';

const dateFormat = 'D.MM.YYYY';

const RiskTestDataContainer = () => {
  const { getParam } = useNavigation();
  const riskTest = useSelector(state => state.riskTest);
  const id = getParam('id');
  const day = moment.unix(id);
  const isToday = day.isSame(moment(), 'day');

  const { allQuestions, evidence, triageLevel } = riskTest[[id]];

  const getCountries = () => {
    const countryAnswers = evidence.filter(_obj => _obj.id.startsWith('l'));
    const countryNames = countryAnswers.map(answer => locations.find(country => country.id === answer.id).name);
    return countryNames.map((name, index) => (
      <>
        <T i18nKey={name} />
        {index !== countryNames.length - 1 ? ', ' : null}
      </>
    ));
  };

  const idToChoiceResolver = (evidenceId, choices) => {
    if (evidenceId === 'p_5') {
      return getCountries();
    }
    const answer = evidence.find(_obj => _obj.id === evidenceId);
    const choiceId = answer ? answer.choice_id : 'absent';
    const choice = choices.find(_obj => _obj.id === choiceId);
    return choice ? <T i18nKey={choice.label} /> : '';
  };

  const { riskTestInformation } = TRIAGE_LEVEL[triageLevel];

  return (
    <RiskTestData
      day={day.format(dateFormat)}
      questions={allQuestions}
      idToChoiceResolver={idToChoiceResolver}
      isToday={isToday}
      triageLevelInformation={<T i18nKey={riskTestInformation} />}
    />
  );
};

export default RiskTestDataContainer;
