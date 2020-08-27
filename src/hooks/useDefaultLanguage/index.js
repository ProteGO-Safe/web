import { useSelector } from 'react-redux';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import { DEFAULT_LANGUAGE } from '../../constants';
import { languages } from '../../utils/languages';
import { getAppLanguage } from '../../store/selectors/app';

const useDefaultLanguage = () => {
  const nativeLanguage = useSelector(getNativeLanguage);
  const appLanguage = useSelector(getAppLanguage);

  const defaultLanguage = (() => {
    if (appLanguage) {
      return appLanguage;
    }
    if (nativeLanguage && languages.includes(nativeLanguage)) {
      return nativeLanguage;
    }
    return DEFAULT_LANGUAGE;
  })();

  return { defaultLanguage };
};

export default useDefaultLanguage;
