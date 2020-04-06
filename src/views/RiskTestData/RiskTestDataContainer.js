import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

import RiskTestData from './RiskTestData';
import triageLevelResolver from '../../utills/triage';
import Routes from '../../routes';

const dateFormat = 'D-MM-YYYY';

const RiskTestDataContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);
  const { id } = useParams();
  const day = moment.unix(id);
  const isToday = day.isSame(moment(), 'day');

  const { allQuestions, evidence, triageLevel } = riskTest[[id]];

  const idToChoiceResolver = (evidenceId, choices) => {
    const answer = evidence.find(_obj => _obj.id === evidenceId);
    const choiceId = answer ? answer.choice_id : 'absent';
    return choices.find(_obj => _obj.id === choiceId).label;
  };

  const goBack = () => history.push(Routes.RiskTest);

  return (
    <RiskTestData
      day={day.format(dateFormat)}
      onBack={goBack}
      questions={allQuestions}
      idToChoiceResolver={idToChoiceResolver}
      isToday={isToday}
      triageLevelInformation={triageLevelResolver(triageLevel)}
    />
  );
};

export default RiskTestDataContainer;
