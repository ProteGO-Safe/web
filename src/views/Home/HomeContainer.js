import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
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
  NoData,
  ExposureSick
} from './views/index';
import { resetTimeOfConfirmedCovid } from '../../store/actions/triage';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { exposureRiskLevel, isCovid, triageRiskLevel } = useTriage();
  const { timeOfConfirmedCovid } = useSelector(state => state.triage);

  useEffect(() => {
    dispatch(fetchServicesStatus());
    dispatch(fetchExposureNotificationStatistics());
    if (moment().diff(moment.unix(timeOfConfirmedCovid), 'days') > 14) {
      dispatch(resetTimeOfConfirmedCovid());
    }
  }, [dispatch, timeOfConfirmedCovid]);

  const resolveView = () => {
    if (isCovid) {
      return <ExposureSick />;
    }
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
