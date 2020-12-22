import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowingRateApplication } from '../../../../store/actions/app';
import { getTimestamp } from '../../../../utils/date';
import useLabTest from '../../../../hooks/useLabTest';

const useLabTestSignUp = () => {
  const dispatch = useDispatch();

  const { signedUp } = useLabTest();

  useEffect(() => {
    if (signedUp) {
      const now = getTimestamp();
      dispatch(setShowingRateApplication(now));
    }
    // eslint-disable-next-line
  }, [signedUp]);
};

export default useLabTestSignUp;
