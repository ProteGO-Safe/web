import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './Home';
import {
  fetchExposureNotificationStatistics,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import useTriage from '../../hooks/useTriage';
import {
  ExposureHigh,
  ExposureLow,
  ExposureMid,
  TestGreen,
  TestRed,
  TestYellow,
  NoData
} from './views/index';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { exposureRiskLevel, triageRiskLevel } = useTriage();

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
  }, [dispatch]);

  const resolveView = () => {
    if (triageRiskLevel === 0 && exposureRiskLevel === 0) {
      return <NoData />;
    }
    if (
      triageRiskLevel === 1 &&
      (exposureRiskLevel === 0 || exposureRiskLevel === 1)
    ) {
      return <TestGreen />;
    }
    if (
      triageRiskLevel === 2 &&
      (exposureRiskLevel === 0 || exposureRiskLevel === 1)
    ) {
      return <TestYellow />;
    }
    if (triageRiskLevel === 3 && [0, 1].includes(exposureRiskLevel)) {
      return <TestRed />;
    }
    if (triageRiskLevel === 0 && exposureRiskLevel === 1) {
      return <ExposureLow />;
    }
    if (exposureRiskLevel === 2 && [0, 1, 2].includes(triageRiskLevel)) {
      return <ExposureMid />;
    }
    if (
      exposureRiskLevel === 3 ||
      (exposureRiskLevel === 2 && triageRiskLevel === 3)
    ) {
      return <ExposureHigh />;
    }

    return null;
  };

  return <Home resolveView={resolveView} />;
};

export default HomeContainer;
