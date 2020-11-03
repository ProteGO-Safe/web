import moment from 'moment';
import {
  TRIAGE_FETCH_REQUESTED,
  TRIAGE_FETCH_SUCCESS,
  TIME_OF_CONFIRMED_COVID_RESETED,
  WHOLE_TRIAGE_UPDATED,
  REVOKE_TOR_STATUS_FINISHED,
  CONFIRM_MANUAL_COVID_FINISHED
} from '../../types/triage';
import { UPLOAD_HISTORICAL_DATA_FINISHED } from '../../types/app';

const INITIAL_STATE = {
  isLoading: false,
  triageLevel: '',
  description: '',
  serious: [],
  timeOfConfirmedCovid: undefined,
  timeOfConfirmedManualCovid: undefined
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
          data: { triage_level, description, serious }
        } = action;

        return {
          ...state,
          triageLevel: triage_level,
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
    case WHOLE_TRIAGE_UPDATED: {
      const { data } = action;
      return {
        ...state,
        ...data
      };
    }
    case REVOKE_TOR_STATUS_FINISHED: {
      return {
        ...state,
        triageLevel: '',
        description: '',
        serious: []
      };
    }
    case CONFIRM_MANUAL_COVID_FINISHED: {
      const { data } = action;
      return {
        ...state,
        timeOfConfirmedManualCovid: data
      };
    }

    default:
      return state;
  }
};

export default triageReducer;
