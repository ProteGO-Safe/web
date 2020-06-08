import moment from "moment";
import {
  TRIAGE_FETCH_REQUESTED,
  TRIAGE_FETCH_SUCCESS,
  TIME_OF_CONFIRMED_COVID_RESETED
} from '../../types/triage';
import { UPLOAD_HISTORICAL_DATA_FINISHED } from '../../types/app';

const INITIAL_STATE = {
  isLoading: false,
  triageLevel: '',
  label: '',
  description: '',
  serious: [],
  timeOfConfirmedCovid: undefined
};

const obtainTimeOfConfirmedCovid = (result, currentTimeOfConfirmedCovid) => {
  if (result === 1 && currentTimeOfConfirmedCovid === undefined) {
    return moment().unix();
  }
  return currentTimeOfConfirmedCovid;
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
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;
        const { timeOfConfirmedCovid: currentTimeOfConfirmedCovid } = state;

        const timeOfConfirmedCovid = obtainTimeOfConfirmedCovid(
          result,
          currentTimeOfConfirmedCovid
        );
        return {
          ...state,
          timeOfConfirmedCovid
        };
      })();
    case TIME_OF_CONFIRMED_COVID_RESETED:
      return {
        ...state,
        timeOfConfirmedCovid: undefined
      };
    default:
      return state;
  }
};

export default triageReducer;
