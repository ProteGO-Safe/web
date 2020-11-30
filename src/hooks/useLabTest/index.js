import { useSelector } from 'react-redux';
import { useState } from 'react';
import { and } from 'ramda';
import { getLabTestSubscriptionStatus, getNativeRiskLevel } from '../../store/selectors/nativeData';
import useTriage from '../useTriage';
import { usePrevious } from '../usePrevious';
import useSkippingFirstUpdate from '../useSkippingFirstUpdate';
import { notEquals } from '../../helpers/logic';

const useLabTest = () => {
  const subscriptionStatus = useSelector(getLabTestSubscriptionStatus);
  const previousSubscriptionStatus = usePrevious(subscriptionStatus);
  const { triageRiskLevel } = useTriage();
  const nativeRiskLevel = useSelector(getNativeRiskLevel);

  const [signedUp, setSignedUp] = useState(false);

  const isTorHigh = triageRiskLevel === 3;
  const isSubscriptionVerified = subscriptionStatus === 1;
  const isSubscriptionConfirmed = subscriptionStatus === 2;

  const isSubscriptionInProgress = isSubscriptionVerified || isSubscriptionConfirmed;

  useSkippingFirstUpdate(() => {
    if (and(isSubscriptionConfirmed, notEquals(subscriptionStatus, previousSubscriptionStatus))) {
      setSignedUp(true);
    }
  }, [subscriptionStatus, previousSubscriptionStatus]);

  return {
    isEnHigh: nativeRiskLevel === 3,
    isTorHigh,
    isSubscriptionVerified,
    isSubscriptionConfirmed,
    isSubscriptionInProgress,
    signedUp
  };
};

export default useLabTest;
