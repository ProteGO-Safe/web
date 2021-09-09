import useHealthStats from '../../../../hooks/useHealthStats';
import { Color } from '../../../../theme/colors';
import useTorHigh from '../useTorHigh';

const useColor = () => {
  const { isTorLow, isTorMiddle } = useHealthStats();
  const isTorHigh = useTorHigh();

  if (isTorLow) {
    return Color.green_1;
  }
  if (isTorMiddle) {
    return Color.info;
  }
  if (isTorHigh) {
    return Color.red;
  }

  return Color.red;
};

export default useColor;
