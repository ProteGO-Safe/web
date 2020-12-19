import useHealthStats from '../../../../hooks/useHealthStats';

import IconLow from '../../../../assets/img/icons/risk-test-result-low.svg';
import IconMiddle from '../../../../assets/img/icons/risk-test-result-middle.svg';
import IconHigh from '../../../../assets/img/icons/risk-test-result-high.svg';
import useTorHigh from '../useTorHigh';

const useIcon = () => {
  const { isTorLow, isTorMiddle } = useHealthStats();
  const isTorHigh = useTorHigh();

  if (isTorLow) {
    return IconLow;
  }
  if (isTorMiddle) {
    return IconMiddle;
  }
  if (isTorHigh) {
    return IconHigh;
  }

  return IconHigh;
};

export default useIcon;
