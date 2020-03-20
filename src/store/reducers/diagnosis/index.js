import {
  DIAGNOSIS_FETCH_REQUESTED,
  DIAGNOSIS_FETCH_SUCCESS,
  DIAGNOSIS_FETCH_ERROR
} from '../../types/diagnosis';

const INITIAL_STATE = {
  evidence: [],
  inProgress: false,
  allQuestion: []
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
          isLoading: true
        };
      })();
    case DIAGNOSIS_FETCH_SUCCESS:
      return (() => {
        const {
          data: { question, should_stop, conditions }
        } = action;

        const currentAllQuestion = state.allQuestion;

        return {
          ...state,
          question,
          should_stop,
          conditions,
          inProgress: should_stop !== null,
          isLoading: false,
          allQuestion: [...currentAllQuestion, question]
        };
      })();
    case DIAGNOSIS_FETCH_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default diagnosisReducer;
