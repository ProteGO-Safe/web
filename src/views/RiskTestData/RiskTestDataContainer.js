import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import RiskTestData from './RiskTestData';
import triageLevelResolver from '../../utills/triage';

const dateFormat = 'D-MM-YYYY';

const RiskTestDataContainer = () => {
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

  return (
    <RiskTestData
      day={day.format(dateFormat)}
      questions={allQuestions}
      idToChoiceResolver={idToChoiceResolver}
      isToday={isToday}
      triageLevelInformation={triageLevelResolver(triageLevel)}
    />
  );
};

export default RiskTestDataContainer;
