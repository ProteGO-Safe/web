import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNotification } from '../../store/actions/nativeData';

const useNotification = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector(state => state.nativeData);
  const isProduction = process.env.NODE_ENV === 'production';

  useEffect(() => {
    if (!notification && isProduction) {
      const interval = setInterval(() => dispatch(fetchNotification()), 1000);
      return () => clearInterval(interval);
    }
    return () => null;
  }, [notification, dispatch, isProduction]);

  return { notification };
};

export default useNotification;
