import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/statisctics';

export const fetchSummaryStatisticsSuccess = body => ({
  body,
  type: types.FETCH_SUMMARY_STATISTICS_SUCCESS
});

export const fetchSummaryStatistics = () => {
  return dispatch => {
    nativeBridge.fetchSummaryStatistics().then(data => {
      dispatch(fetchSummaryStatisticsSuccess(data));
    });
  };
};

export const fetchDetailsStatisticsSuccess = body => ({
  body,
  type: types.FETCH_DETAILS_STATISTICS_SUCCESS
});

export const fetchDetailsStatistics = () => {
  return dispatch => {
    nativeBridge.fetchDetailsStatistics().then(data => {
      dispatch(fetchDetailsStatisticsSuccess(data));
    });
  };
};

export const fetchExposureAggregateStatisticsSuccess = body => ({
  body,
  type: types.FETCH_EXPOSURE_AGGREGATE_STATISTICS
});

export const fetchExposureAggregateStatistics = () => {
  return dispatch => {
    nativeBridge.fetchExposureAggregateStatistics().then(data => {
      dispatch(fetchExposureAggregateStatisticsSuccess(data));
    });
  };
};
