import {
  FETCH_FAQ_SUCCESS,
  EXTERNAL_DATA_RESETED,
  EXTERNAL_DATA_REQUESTED,
  EXTERNAL_DATA_FAILURE,
  FETCH_HOSPITALS_SUCCESS,
  FETCH_ADVICES_SUCCESS
} from '../../types/externalData';

const INITIAL_STATE = {
  faqData: undefined,
  hospitalsData: undefined,
  advicesData: undefined,
  isFetching: false,
  error: false
};

const faqReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXTERNAL_DATA_RESETED:
      return {
        ...INITIAL_STATE
      };
    case EXTERNAL_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case FETCH_FAQ_SUCCESS:
      return {
        ...state,
        isFetching: false,
        faqData: action.payload
      };
    case FETCH_HOSPITALS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hospitalsData: action.payload
      };
    case FETCH_ADVICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        advicesData: action.payload
      };
    case EXTERNAL_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default faqReducer;
