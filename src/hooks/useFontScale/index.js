import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFontScale } from '../../store/selectors/app';
import { FONT_SIZE } from './fontScale.constants';

const useFontScale = () => {
  const [state, setState] = useState(null);
  const fontScale = useSelector(getFontScale);

  useEffect(() => {
    if (fontScale < 1) {
      setState(FONT_SIZE.SMALL);
    }
    if (fontScale === 1) {
      setState(FONT_SIZE.NORMAL);
    }
    if (fontScale > 1) {
      setState(FONT_SIZE.LARGE);
    }
    if (fontScale >= 1.3) {
      setState(FONT_SIZE.EXTRA_LARGE);
    }
    if (fontScale >= 1.4) {
      setState(FONT_SIZE.HUGE);
    }
  }, [fontScale]);

  return state;
};

export default useFontScale;
