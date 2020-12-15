import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resolveData } from './TestBorderBox.helpers';
import TestBorderBox from './TestBorderBox';
import { fetchLabTestSubscription } from '../../store/actions/nativeData';
import useLabTest from '../../hooks/useLabTest';
import useHealthStats from '../../hooks/useHealthStats';

const TestBorderBoxContainer = () => {
  const dispatch = useDispatch();
  const { isEnHigh, isTorHigh } = useHealthStats();
  const { isSubscriptionVerified, isSubscriptionConfirmed, isSubscriptionInProgress } = useLabTest();

  useEffect(() => {
    dispatch(fetchLabTestSubscription());
    // eslint-disable-next-line
  }, []);

  const data = resolveData();

  if (!isEnHigh) {
    return null;
  }

  if (isTorHigh && !isSubscriptionInProgress) {
    return <TestBorderBox data={data.QUALIFICATION_FOR_TEST} />;
  }
  if (!isTorHigh && !isSubscriptionInProgress) {
    return <TestBorderBox data={data.TOR_IS_NEEDED} />;
  }
  if (isSubscriptionVerified) {
    return <TestBorderBox data={data.TEST_IN_PROGRESS} />;
  }
  if (isSubscriptionConfirmed) {
    return <TestBorderBox data={data.TEST_IS_CONFIRMED} />;
  }

  return null;
};

export default TestBorderBoxContainer;
