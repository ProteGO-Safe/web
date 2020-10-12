import { FETCH_DISTRICTS_STATUS_SUCCESS } from '../../types/restrictions';

const INITIAL_STATE = {
  voivodeships: [],
  updated: undefined
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

    default:
      return state;
  }
};

export default restrictionsReducer;
