import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { not } from 'ramda';
import { getFirstRunTime } from '../../store/selectors/app';
import { markFirstRun } from '../../store/actions/app';

const useFirstRun = () => {
  const dispatch = useDispatch();
  const firstRunTime = useSelector(getFirstRunTime);

  useEffect(() => {
    if (not(firstRunTime)) {
      dispatch(markFirstRun());
    }
    // eslint-disable-next-line
  }, [firstRunTime]);
};

export default useFirstRun;
