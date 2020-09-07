import { RISK_TEST_ADD, WHOLE_RISK_TEST_UPDATED } from '../../types/risktest';

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
    case WHOLE_RISK_TEST_UPDATED: {
      const { data } = action;
      return {
        ...state,
        ...data
      };
    }
    default:
      return state;
  }
};

export default riskTestReducer;
