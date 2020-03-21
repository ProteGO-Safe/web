import { DAILY_ADD } from '../../types/daily';

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
    default:
      return state;
  }
};

export default dailyReducer;
