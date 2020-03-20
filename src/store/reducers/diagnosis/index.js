import {
  DIAGNOSIS_FETCH_REQUESTED,
  DIAGNOSIS_FETCH_SUCCESS,
  DIAGNOSIS_FETCH_ERROR,
  DIAGNOSIS_CLEAR_REQUESTED
} from '../../types/diagnosis';

const INITIAL_STATE = {
  evidence: [],
  inProgress: false,
  isLoading: false,
  isResetting: false,
  question: {}
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIAGNOSIS_FETCH_REQUESTED:
      return (() => {
        const {
          data: { evidence }
        } = action;

        return {
          ...state,
          evidence: [...evidence],
          inProgress: true,
          isLoading: true,
          isResetting: false
        };
      })();
    case DIAGNOSIS_FETCH_SUCCESS:
      return (() => {
        const {
          data: { question, should_stop }
        } = action;

        return {
          ...state,
          ...(question !== null && { question }),
          inProgress: !should_stop,
          isLoading: false
        };
      })();
    case DIAGNOSIS_FETCH_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case DIAGNOSIS_CLEAR_REQUESTED:
      return {
        ...state,
        ...INITIAL_STATE,
        isResetting: true
      };
    default:
      return state;
  }
};

export default diagnosisReducer;
