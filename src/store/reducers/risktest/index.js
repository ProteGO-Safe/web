import { RISK_TEST_ADD } from '../../types/risktest';

const INITIAL_STATE = {};

const riskTestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RISK_TEST_ADD:
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

export default riskTestReducer;
