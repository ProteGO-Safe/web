import moment from 'moment';
import {
  TRIAGE_FETCH_SUCCESS,
  TIME_OF_CONFIRMED_COVID_RESETED,
  WHOLE_TRIAGE_UPDATED,
  REVOKE_TOR_STATUS_FINISHED,
  CONFIRM_MANUAL_COVID_FINISHED,
  REVOKE_MANUAL_COVID_FINISHED,
} from '../../types/triage';
import { UPLOAD_HISTORICAL_DATA_FINISHED } from '../../types/app';

const INITIAL_STATE = {
  triageLevel: '',
  description: '',
  serious: [],
  timeOfConfirmedCovid: undefined,
  timeOfConfirmedManualCovid: undefined
};

const isCovidOccurs = (state, result) => {
  const { timeOfConfirmedCovid } = state;

  return result === 1 && timeOfConfirmedCovid === undefined;
};

const obtainTimeOfConfirmedCovid = state => {
  const { timeOfConfirmedManualCovid } = state;
  return timeOfConfirmedManualCovid || moment().unix();
};

const triageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIAGE_FETCH_SUCCESS:
      return (() => {
        const {
          data: { triage_level, description, serious }
        } = action;

        return {
          ...state,
          triageLevel: triage_level,
          description,
          serious
        };
      })();
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;

        if (isCovidOccurs(state, result)) {
          return {
            ...state,
            timeOfConfirmedCovid: obtainTimeOfConfirmedCovid(state, result),
            timeOfConfirmedManualCovid: undefined
          };
        }

        return {
          ...state
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
    case REVOKE_MANUAL_COVID_FINISHED: {
      return {
        ...state,
        timeOfConfirmedManualCovid: undefined
      };
    }

    default:
      return state;
  }
};

export default triageReducer;
