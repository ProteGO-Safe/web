import * as types from '../types/questionnaires';

export const questionnaireAddRequested = ({ data }) => ({
  data,
  timestamp: new Date(),
  type: types.QUESTIONNAIRES_ADD
});

export function addQuestionnaire(data) {
  return dispatch => {
    dispatch(questionnaireAddRequested({ data }));
  };
}
