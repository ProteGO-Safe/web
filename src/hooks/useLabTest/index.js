import { useSelector } from 'react-redux';
import { useState } from 'react';
import { and } from 'ramda';
import { getLabTestSubscriptionStatus, getTimeOfUpdatedSubscriptionStatus } from '../../store/selectors/nativeData';
import { usePrevious } from '../usePrevious';
import useSkippingFirstUpdate from '../useSkippingFirstUpdate';
import { notEquals } from '../../helpers/logic';

const useLabTest = () => {
  const subscriptionStatus = useSelector(getLabTestSubscriptionStatus);
  const timeOfUpdatedSubscriptionStatus = useSelector(getTimeOfUpdatedSubscriptionStatus);
  const previousSubscriptionStatus = usePrevious(subscriptionStatus);

  const [signedUp, setSignedUp] = useState(false);

  const isSubscriptionVerified = subscriptionStatus === 1;
  const isSubscriptionConfirmed = subscriptionStatus === 2;

  const isSubscriptionInProgress = isSubscriptionVerified || isSubscriptionConfirmed;

  useSkippingFirstUpdate(() => {
    if (and(isSubscriptionConfirmed, notEquals(subscriptionStatus, previousSubscriptionStatus))) {
      setSignedUp(true);
    }
  }, [subscriptionStatus, previousSubscriptionStatus]);

  return {
    isSubscriptionVerified,
    isSubscriptionConfirmed,
    isSubscriptionInProgress,
    signedUp,
    timeOfUpdatedSubscriptionStatus
  };
};

export default useLabTest;
