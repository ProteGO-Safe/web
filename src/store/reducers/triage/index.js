import {
  TRIAGE_FETCH_REQUESTED,
  TRIAGE_FETCH_SUCCESS,
} from '../../types/triage';

const INITIAL_STATE = {
  isLoading: false,
  triageLevel: '',
  label: '',
  description: '',
  serious: []
};

const triageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIAGE_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case TRIAGE_FETCH_SUCCESS:
      return (() => {
        const {
          data: { triage_level, label, description, serious }
        } = action;

        return {
          ...state,
          triageLevel: triage_level,
          label,
          description,
          serious,
          isLoading: false
        };
      })();
    default:
      return state;
  }
};

export default triageReducer;
