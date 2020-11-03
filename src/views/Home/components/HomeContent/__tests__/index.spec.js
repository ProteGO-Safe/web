import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { HomeContent } from '../index';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../../../../utils/servicesStatus/servicesStatus.constants';
import { Routes } from '../../../../../services/navigationService/routes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const renderTestedComponent = store => {
  return renderer.create(
    <Provider store={store}>
      <HomeContent />
    </Provider>
  );
};

const baseStore = {
  triage: {},
  nativeData: { servicesStatus: {} },
  user: { name: 'player' },
  riskTest: {},
  navigation: { currentScreen: { screen: Routes.Home } }
};

const serious = [
  { common_name: 'seriouses_text1' },
  { common_name: 'seriouses_text2' },
  { common_name: 'seriouses_text3' }
];

const triageStorage = {
  isolation_ambulance: {
    description: 'diagnosis_text43',
    serious,
    triageLevel: 'isolation_ambulance'
  },
  call_doctor: {
    description: 'diagnosis_text44',
    serious,
    triageLevel: 'call_doctor'
  },
  isolation_call: {
    description: 'diagnosis_text45',
    serious,
    triageLevel: 'isolation_call'
  },
  self_monitoring: {
    description: 'diagnosis_text46',
    serious,
    triageLevel: 'self_monitoring'
  },
  no_risk: {
    description: 'diagnosis_text47',
    serious,
    triageLevel: 'no_risk'
  },
  quarantine: {
    description: 'diagnosis_text48',
    serious,
    triageLevel: 'quarantine'
  }
};

const nativeDataStorageWithEnableExposureByRiskLevel = riskLevel => {
  return {
    ...baseStore.nativeData,
    riskLevel,
    servicesStatus: {
      ...baseStore.nativeData.servicesStatus,
      exposureNotificationStatus: EXPOSURE_NOTIFICATION_STATUS.ON
    }
  };
};

describe('test render home component', () => {
  it('should render with: disabled exposure module, green test (no_risk), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.no_risk
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disabled exposure module, green test (self_monitoring), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.self_monitoring
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disabled exposure module, yellow test (quarantine), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.quarantine
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disabled exposure module, red test (isolation_call), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.isolation_call
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disabled exposure module, red test (isolation_ambulance), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.isolation_ambulance
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disabled exposure module, red test (call_doctor), no exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: { ...baseStore.nativeData, riskLevel: 0 },
      triage: triageStorage.call_doctor
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, green test (no_risk), green exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(1),
      triage: triageStorage.no_risk
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, green test (no_risk), middle exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(2),
      triage: triageStorage.no_risk
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, green test (no_risk), high exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(3),
      triage: triageStorage.no_risk
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, yellow test (quarantine), green exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(1),
      triage: triageStorage.quarantine
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, yellow test (quarantine), middle exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(2),
      triage: triageStorage.quarantine
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, yellow test (quarantine), high exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(3),
      triage: triageStorage.quarantine
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, red test (call_doctor), green exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(1),
      triage: triageStorage.call_doctor
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, red test (call_doctor), middle exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(2),
      triage: triageStorage.call_doctor
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, red test (call_doctor), high exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(3),
      triage: triageStorage.call_doctor
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: disable exposure module, no test, no exposure data', () => {
    const store = mockStore({
      ...baseStore
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, no test, green exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(1)
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, no test, middle exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(2)
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, no test, high exposure data', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: nativeDataStorageWithEnableExposureByRiskLevel(3)
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, has covid ', () => {
    const store = mockStore({
      ...baseStore,
      triage: { ...baseStore.triage, timeOfConfirmedCovid: 1596953125 }
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, high exposure data, lab test in progress', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: {
        ...nativeDataStorageWithEnableExposureByRiskLevel(3),
        labTest: {
          subscription: { status: 1 }
        }
      }
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('should render with: enabled exposure module, high exposure data, lab test completed', () => {
    const store = mockStore({
      ...baseStore,
      nativeData: {
        ...nativeDataStorageWithEnableExposureByRiskLevel(3),
        labTest: {
          subscription: { status: 2 }
        }
      }
    });
    const container = renderTestedComponent(store);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
