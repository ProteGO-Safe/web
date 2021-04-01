import * as types from '../../types/statisctics';

const INITIAL_STATE = {
  details: undefined,
  summary: undefined,
  exposureAggregate: undefined
};

const statisticsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SUMMARY_STATISTICS_SUCCESS: {
      const { body } = action;
      return {
        ...state,
        summary: body
      };
    }
    case types.FETCH_DETAILS_STATISTICS_SUCCESS: {
      const { body } = action;
      return {
        ...state,
        details: body
      };
    }
    case types.FETCH_EXPOSURE_AGGREGATE_STATISTICS: {
      const {
        body: { riskCheck }
      } = action;
      return {
        ...state,
        exposureAggregate: riskCheck
      };
    }
    default:
      return state;
  }
};

export default statisticsReducer;
