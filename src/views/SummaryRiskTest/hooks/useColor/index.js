import useHealthStats from '../../../../hooks/useHealthStats';
import { Color } from '../../../../theme/colors';

const useColor = () => {
  const { isTorLow, isTorMiddle, isTorHigh} = useHealthStats();

  if (isTorLow) {
    return Color.green;
  }
  if (isTorMiddle) {
    return Color.orange;
  }
  if (isTorHigh) {
    return Color.red;
  }

  return Color.red;
};

export default useColor;
