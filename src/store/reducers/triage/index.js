import {
  TRIAGE_FETCH_REQUESTED,
  TRIAGE_FETCH_SUCCESS,
  TRIAGE_FETCH_ERROR
} from '../../types/triage';
import { DIAGNOSIS_CLEAR_REQUESTED } from '../../types/diagnosis';

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

        console.log(action);

        return {
          ...state,
          triageLevel: triage_level,
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
    case DIAGNOSIS_CLEAR_REQUESTED:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

export default triageReducer;
