import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { not } from 'ramda';
import { setShowingRateApplication } from '../../../../store/actions/app';
import { addDays } from '../../../../utils/date';
import { getFirstRunTime, getToShowRatingTimestamps } from '../../../../store/selectors/app';

const useFirstRunTime = () => {
  const dispatch = useDispatch();

  const firstRunTime = useSelector(getFirstRunTime);
  const toShowTimestamps = useSelector(getToShowRatingTimestamps);

  useEffect(() => {
    if (not(firstRunTime)) {
      return;
    }
    const days21AfterFirstRun = addDays(firstRunTime, 21);
    if (toShowTimestamps && not(toShowTimestamps.map(({ timestamp }) => timestamp).includes(days21AfterFirstRun))) {
      dispatch(setShowingRateApplication(days21AfterFirstRun));
    }
    // eslint-disable-next-line
  }, [firstRunTime]);
};

export default useFirstRunTime;
