import invoke from 'lodash.invoke';
import uniqueId from 'lodash.uniqueid';

import { always, cond, equals } from 'ramda';
import StoreRegistry from '../../store/storeRegistry';
import { FETCH_LANGUAGE, NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS } from '../../store/types/nativeData';
import { DATA_TYPE } from './nativeBridge.constants';
import { isAndroidWebView, isIOSWebView } from '../../utils/native';
import {
  enStatusReceived,
  fetchExposureNotificationStatistics,
  fetchLabTestSubscriptionSuccess
} from '../../store/actions/nativeData';
import { fetchSubscribedDistricts } from '../../store/actions/restrictions';
import {
  fetchSummaryStatisticsSuccess,
  fetchSummaryStatistics as fetchSummaryStatisticsAction,
  fetchExposureAggregateStatistics as fetchExposureAggregateStatisticsAction,
  fetchDetailsStatisticsSuccess
} from '../../store/actions/statistics';
import { BACK_PRESSED } from '../../store/types/navigation';
import { UPLOAD_HISTORICAL_DATA_FINISHED } from '../../store/types/app';
import { changeRoute } from '../../store/actions/navigation';
import { Routes } from '../navigationService/routes';
import { fetchActivities } from '../../store/actions/activities';

const nativeRequests = {};

const sendNativeRequest = (functionName, requestId, dataType, data) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(
      `${Date.now()}: functionName: ${functionName}, dataType: ${dataType}, data: ${data}, requestId: ${requestId}`
    );
  }
  return new Promise((resolve, reject) => {
    nativeRequests[requestId] = { resolve, reject };
    if (isIOSWebView()) {
      invoke(window.webkit, `messageHandlers.${functionName}.postMessage`, {
        type: dataType,
        data,
        requestId
      });
    } else if (isAndroidWebView()) {
      invoke(window.NativeBridge, functionName, dataType, data, requestId);
    }
  });
};

const receiveNativeResponse = (body, dataType, requestId) => {
  try {
    nativeRequests[requestId].resolve(body);
  } catch (error) {
    console.error('requestId', requestId, error);
    nativeRequests[requestId].reject(error);
  }
  delete nativeRequests[requestId];
};

const callNativeFunction = async (functionName, dataType, data, requestId) => {
  const args = [dataType];
  if (data) {
    args.push(JSON.stringify(data));
  }

  if (isAndroidWebView() && functionName === 'setBridgeData') {
    return invoke(window.NativeBridge, functionName, ...args);
  }

  return sendNativeRequest(functionName, requestId, ...args);
};

const callBridgeData = async (functionName, dataType, data = undefined) => {
  const requestId = uniqueId('request-');
  try {
    const json = await callNativeFunction(functionName, dataType, data, requestId);
    callNativeFunction('bridgeDataReceived', dataType, undefined, requestId);
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return '';
};

const callGetBridgeData = async (dataType, data = undefined) => {
  return callBridgeData('getBridgeData', dataType, data);
};

const callSetBridgeData = async (dataType, data = undefined) => {
  return callBridgeData('setBridgeData', dataType, data);
};

const listActivities = async () => {
  return callGetBridgeData(DATA_TYPE.LIST_ACTIVITIES);
};

const getServicesStatus = async () => {
  return callGetBridgeData(DATA_TYPE.NATIVE_SERVICES_STATUS);
};

const fetchSummaryStatistics = async () => {
  return callGetBridgeData(DATA_TYPE.SUMMARY_STATISTICS);
};

const fetchDetailsStatistics = async () => {
  return callGetBridgeData(DATA_TYPE.DETAILS_STATISTICS);
};

const fetchExposureAggregateStatistics = async () => {
  return callGetBridgeData(DATA_TYPE.EXPOSURE_AGGREGATE_STATISTICS);
};

const revokeEnStatus = async () => {
  return callGetBridgeData(DATA_TYPE.REVOKE_EN);
};

const getFontScale = async () => {
  return callGetBridgeData(DATA_TYPE.FONT_SCALE);
};

const getNativeVersion = async () => {
  return callGetBridgeData(DATA_TYPE.NATIVE_VERSION);
};

const getNotificationStatus = async () => {
  return callGetBridgeData(DATA_TYPE.GET_NOTIFICATION_STATUS);
};

const getLanguage = async () => {
  return callGetBridgeData(DATA_TYPE.LANGUAGE);
};

const getDistrictsStatus = async () => {
  return callGetBridgeData(DATA_TYPE.DISTRICTS_STATUS);
};

const getForceDistrictsStatus = async () => {
  return callGetBridgeData(DATA_TYPE.FORCE_DISTRICTS_STATUS);
};

const getSubscribedDistricts = async () => {
  return callGetBridgeData(DATA_TYPE.SUBSCRIBED_DISTRICTS);
};

const getLabTestSubscription = async () => {
  return callGetBridgeData(DATA_TYPE.LAB_TEST_SUBSCRIPTION);
};

const getLabTestPin = async () => {
  return callGetBridgeData(DATA_TYPE.LAB_TEST_PIN);
};

const getExposureNotificationStatistics = async () => {
  return callGetBridgeData(DATA_TYPE.EXPOSURE_STATISTICS);
};

const setDiagnosisTimestamp = timestamp => {
  callSetBridgeData(DATA_TYPE.FILLED_DIAGNOSIS, {
    timestamp
  });
};

const uploadHistoricalData = ({ pin, isInteroperabilityEnabled }) => {
  callSetBridgeData(DATA_TYPE.HISTORICAL_DATA, {
    pin,
    isInteroperabilityEnabled
  });
};

const setServicesState = data => {
  callSetBridgeData(DATA_TYPE.NATIVE_SERVICES_STATE, data);
};

const setNotificationStatus = enable => {
  return callGetBridgeData(DATA_TYPE.SET_NOTIFICATION_STATUS, {
    isCovidStatsNotificationEnabled: enable
  });
};

const rateApp = () => {
  callSetBridgeData(DATA_TYPE.RATING_APP, {
    appReview: true
  });
};

const turnOff = () => {
  callSetBridgeData(DATA_TYPE.TURN_OFF, {
    turnOff: true
  });
};

const confirmActivities = data => {
  callSetBridgeData(DATA_TYPE.CONFIRM_ACTIVITIES, data);
};

const uploadLabTestPin = async pin => {
  return callGetBridgeData(DATA_TYPE.UPLOAD_LAB_TEST_PIN, {
    pin
  });
};

const sendSms = async (number, text) => {
  callSetBridgeData(DATA_TYPE.SMS_SENDER, {
    number,
    text
  });
};

const setDistrictSubscription = async (districtId, isSubscribed) => {
  const ADD = 1;
  const DELETE = 2;
  return callGetBridgeData(DATA_TYPE.DISTRICT_ACTION, {
    type: isSubscribed ? ADD : DELETE,
    districtId
  });
};

const handleServicesStatus = servicesStatus => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    servicesStatus,
    type: NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS
  });
};

const handleUploadHistoricalDataResponse = ({ result }) => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    result,
    type: UPLOAD_HISTORICAL_DATA_FINISHED
  });
};

const handleExposureSummary = data => {
  const store = StoreRegistry.getStore();
  const { riskLevel } = data;
  store.dispatch(enStatusReceived(riskLevel));
};

const handleNativeState = appState => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  if (appState.appState === 1) {
    dispatch(fetchExposureNotificationStatistics());
    dispatch(fetchSubscribedDistricts());
    dispatch(fetchActivities());
    dispatch(fetchSummaryStatisticsAction());
    dispatch(fetchExposureAggregateStatisticsAction());
  }
};
const handleNativeLanguage = body => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  dispatch({
    body,
    type: FETCH_LANGUAGE
  });
};

const handleLabTestSubscription = body => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  dispatch(fetchLabTestSubscriptionSuccess(body));
};

const handleNewSummaryStatistics = body => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  dispatch(fetchSummaryStatisticsSuccess(body));
};

const handleNewDetailsStatistics = body => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  dispatch(fetchDetailsStatisticsSuccess(body));
};

const handleChangeScreen = body => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  const { name, params } = body;
  dispatch(changeRoute({ route: name, backRoute: Routes.Home, params }));
};

const handleBackPressed = () => {
  const store = StoreRegistry.getStore();
  const { dispatch } = store;
  dispatch({
    type: BACK_PRESSED
  });
};

const callBridgeDataHandler = cond([
  [equals(DATA_TYPE.NATIVE_SERVICES_STATUS), always(handleServicesStatus)],
  [equals(DATA_TYPE.HISTORICAL_DATA), always(handleUploadHistoricalDataResponse)],
  [equals(DATA_TYPE.EXPOSURE_STATISTICS), always(handleExposureSummary)],
  [equals(DATA_TYPE.NATIVE_STATE), always(handleNativeState)],
  [equals(DATA_TYPE.LANGUAGE), always(handleNativeLanguage)],
  [equals(DATA_TYPE.LAB_TEST_SUBSCRIPTION), always(handleLabTestSubscription)],
  [equals(DATA_TYPE.BACK_PRESSED), always(handleBackPressed)],
  [equals(DATA_TYPE.CHANGE_SCREEN), always(handleChangeScreen)],
  [equals(DATA_TYPE.SUMMARY_STATISTICS), always(handleNewSummaryStatistics)],
  [equals(DATA_TYPE.DETAILS_STATISTICS), always(handleNewDetailsStatistics)]
]);

const onBridgeData = (dataType, dataString) => {
  try {
    const data = JSON.parse(dataString);
    callBridgeDataHandler(dataType)(data);
  } catch (error) {
    console.error('Error while parsing native request', error);
  }
};

const clearAllData = data => {
  callSetBridgeData(DATA_TYPE.CLEAR_ALL_DATA, data);
};

const changeLanguage = data => {
  callSetBridgeData(DATA_TYPE.LANGUAGE, data);
};

window.onBridgeData = onBridgeData;
window.bridgeDataResponse = receiveNativeResponse;

export default {
  clearAllData,
  changeLanguage,
  confirmActivities,
  setDiagnosisTimestamp,
  fetchSummaryStatistics,
  fetchDetailsStatistics,
  fetchExposureAggregateStatistics,
  getExposureNotificationStatistics,
  getDistrictsStatus,
  getFontScale,
  getForceDistrictsStatus,
  getLabTestPin,
  getLabTestSubscription,
  getLanguage,
  getNativeVersion,
  getNotificationStatus,
  getServicesStatus,
  getSubscribedDistricts,
  listActivities,
  rateApp,
  revokeEnStatus,
  sendSms,
  setDistrictSubscription,
  setNotificationStatus,
  setServicesState,
  turnOff,
  uploadHistoricalData,
  uploadLabTestPin
};
