import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowingRateApplication } from '../../../../store/actions/app';
import { addDays, getTimestamp } from '../../../../utils/date';
import useExposureNotification from '../../../../hooks/useExposureNotification';

const useHighEnOccur = () => {
  const dispatch = useDispatch();

  const { occurredHighEn } = useExposureNotification();

  useEffect(() => {
    if (occurredHighEn) {
      const now = getTimestamp();
      const days2AfterOccurredHighEn = addDays(now, 2);
      dispatch(setShowingRateApplication(days2AfterOccurredHighEn));
    }
    // eslint-disable-next-line
  }, [occurredHighEn]);
};

export default useHighEnOccur;
