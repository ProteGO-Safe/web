import { useSelector } from 'react-redux';
import {
  getLabTestSubscription,
  getNativeRiskLevel
} from '../../store/selectors/nativeData';
import useTriage from '../useTriage';

const useLabTest = () => {
  const subscription = useSelector(getLabTestSubscription);
  const { triageRiskLevel } = useTriage();
  const nativeRiskLevel = useSelector(getNativeRiskLevel);

  const isTorHigh = triageRiskLevel === 3;
  const isSubscriptionVerified = subscription && subscription.status === 1;
  const isSubscriptionConfirmed = subscription && subscription.status === 2;

  const isSubscriptionInProgress =
    isSubscriptionVerified || isSubscriptionConfirmed;

  return {
    isEnHigh: nativeRiskLevel === 3,
    isTorHigh,
    isSubscriptionVerified,
    isSubscriptionConfirmed,
    isSubscriptionInProgress
  };
};

export default useLabTest;
