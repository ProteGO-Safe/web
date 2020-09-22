import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApplicationReseted } from '../../store/selectors/app';
import { clearBluetoothData } from '../../store/actions/app';
import { clearNativeBluetoothData } from '../../store/actions/nativeData';

const useClearData = () => {
  const dispatch = useDispatch();
  const applicationReseted = useSelector(getApplicationReseted);

  useEffect(() => {
    if (applicationReseted) {
      dispatch(clearBluetoothData());
      clearNativeBluetoothData();
    }
  }, [dispatch, applicationReseted]);
};

export default useClearData;
