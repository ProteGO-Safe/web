import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getApplicationLiked, getShowRatingTimestamps } from '../../../../store/selectors/app';
import { someTimeWasUp } from '../../../../utils/date';
import useLabTestSignUp from '../useLabTestSignUp';
import useHighEnOccur from '../useHighEnOccur';
import useFirstRunTime from '../useFirstRunTime';

const useShowRatingApp = () => {
  const isApplicationLiked = useSelector(getApplicationLiked);
  const showRatingTimestamps = useSelector(getShowRatingTimestamps);

  const [showRatingApp, setShowRatingApp] = useState(false);

  useLabTestSignUp();
  useHighEnOccur();
  useFirstRunTime();

  useEffect(() => {
    if (someTimeWasUp(showRatingTimestamps)) {
      setShowRatingApp(true);
    }
    // eslint-disable-next-line
  }, [showRatingTimestamps]);

  if (isApplicationLiked) {
    return false;
  }

  return showRatingApp;
};

export default useShowRatingApp;
