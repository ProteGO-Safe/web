import { QUESTIONNAIRES_ADD } from '../../types/questionnaires';

const INITIAL_STATE = {};

const questionnairesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONNAIRES_ADD:
      return (() => {
        const {
          data: { questionnaire }
        } = action;

        const timestamp = new Date();

        return {
          ...state,
          [timestamp]: questionnaire
        };
      })();
    default:
      return state;
  }
};

export default questionnairesReducer;
