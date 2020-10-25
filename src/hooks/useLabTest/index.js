import { useSelector } from 'react-redux';
import { getLabTestSubscription } from '../../store/selectors/nativeData';
import useTriage from '../useTriage';

const useLabTest = () => {
  const subscription = useSelector(getLabTestSubscription);
  const { isExposure, triageRiskLevel } = useTriage();

  const isTorHigh = triageRiskLevel === 3;
  const isSubscriptionVerified = subscription && subscription.status === 1;
  const isSubscriptionConfirmed = subscription && subscription.status === 2;

  const isSubscriptionInProgress =
    isSubscriptionVerified || isSubscriptionConfirmed;

  return {
    isEnHigh: isExposure,
    isTorHigh,
    isSubscriptionVerified,
    isSubscriptionConfirmed,
    isSubscriptionInProgress
  };
};

export default useLabTest;
