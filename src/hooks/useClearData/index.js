import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApplicationReseted } from '../../store/selectors/app';
import { clearAllData } from '../../store/actions/app';
import { clearNativeAllData } from '../../store/actions/nativeData';

const useClearData = () => {
  const dispatch = useDispatch();
  const applicationReseted = useSelector(getApplicationReseted);

  useEffect(() => {
    if (applicationReseted) {
      dispatch(clearAllData());
      clearNativeAllData();
    }
  }, [dispatch, applicationReseted]);
};

export default useClearData;
