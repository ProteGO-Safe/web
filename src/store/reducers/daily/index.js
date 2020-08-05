import { DAILY_ADD, DAILY_UPDATE } from '../../types/daily';

const INITIAL_STATE = {};

const dailyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DAILY_ADD:
      return (() => {
        const { data, timestamp } = action;

        return {
          ...state,
          [timestamp]: data
        };
      })();
    case DAILY_UPDATE:
      return (() => {
        const { data, id } = action;

        return {
          ...state,
          [id]: data
        };
      })();
    default:
      return state;
  }
};

export default dailyReducer;
