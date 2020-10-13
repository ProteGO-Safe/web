import {
  FETCH_DISTRICTS_STATUS_SUCCESS,
  FETCH_SUBSCRIBED_DISTRICTS_SUCCESS,
  SUBSCRIBED_DISTRICTS_SUCCESS,
  UNSUBSCRIBED_DISTRICTS_SUCCESS
} from '../../types/restrictions';

const INITIAL_STATE = {
  voivodeships: [],
  updated: undefined,
  subscribedDistricts: []
};

const restrictionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DISTRICTS_STATUS_SUCCESS: {
      const {
        body: { voivodeships, updated }
      } = action;
      return {
        ...state,
        voivodeships,
        updated
      };
    }
    case SUBSCRIBED_DISTRICTS_SUCCESS:
    case UNSUBSCRIBED_DISTRICTS_SUCCESS:
    case FETCH_SUBSCRIBED_DISTRICTS_SUCCESS: {
      const {
        body: { districts }
      } = action;
      return {
        ...state,
        subscribedDistricts: [...districts]
      };
    }

    default:
      return state;
  }
};

export default restrictionsReducer;
