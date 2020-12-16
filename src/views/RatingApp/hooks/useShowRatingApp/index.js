import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getApplicationLiked,
  getShowedRatingTimestamps,
  getToShowRatingTimestamps
} from '../../../../store/selectors/app';
import { getTimestamp, getYear, someTimeWasUp } from '../../../../utils/date';
import useLabTestSignUp from '../useLabTestSignUp';
import useHighEnOccur from '../useHighEnOccur';
import useFirstRunTime from '../useFirstRunTime';

const useShowRatingApp = () => {
  const isApplicationLiked = useSelector(getApplicationLiked);
  const toShowTimestamps = useSelector(getToShowRatingTimestamps);
  const showedRatingTimestamps = useSelector(getShowedRatingTimestamps);

  const [showRatingApp, setShowRatingApp] = useState(false);

  useLabTestSignUp();
  useHighEnOccur();
  useFirstRunTime();

  const flattedToShowTimestamps = toShowTimestamps.filter(({ showed }) => !showed).map(({ timestamp }) => timestamp);

  useEffect(() => {
    if (someTimeWasUp(flattedToShowTimestamps)) {
      setShowRatingApp(true);
    }
    // eslint-disable-next-line
  }, [toShowTimestamps]);

  const wasShowedThreeTimesOnYear = () => {
    const currentYear = getYear(getTimestamp());
    return showedRatingTimestamps.map(getYear).filter(year => year === currentYear).length >= 3;
  };

  if (isApplicationLiked || wasShowedThreeTimesOnYear()) {
    return false;
  }

  return showRatingApp;
};

export default useShowRatingApp;
