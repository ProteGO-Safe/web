import moment from 'moment';

import * as types from '../types/questionnaires';
import { clearDiagnosisRequested } from './diagnosis';

export const questionnaireAddRequested = ({ data }) => ({
  data,
  timestamp: moment(),
  type: types.QUESTIONNAIRES_ADD
});

export function addQuestionnaire(data) {
  return dispatch => {
    dispatch(questionnaireAddRequested({ data }));
    dispatch(clearDiagnosisRequested({ data }));
  };
}
