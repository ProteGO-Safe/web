import { QUESTIONNAIRES_ADD } from '../../types/questionnaires';

const INITIAL_STATE = {};

const questionnairesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONNAIRES_ADD:
      return (() => {
        const { data, timestamp } = action;

        return {
          ...state,
          [timestamp]: data
        };
      })();
    default:
      return state;
  }
};

export default questionnairesReducer;
