import {
  TRIAGE_FETCH_REQUESTED,
  TRIAGE_FETCH_SUCCESS,
  TRIAGE_FETCH_ERROR
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
          triageLevel: triage_level, // no_risk || self_monitoring ||  quarantine || isolation_call || isolation_ambulance
          label,
          description,
          serious,
          isLoading: false
        };
      })();
    case TRIAGE_FETCH_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default triageReducer;
