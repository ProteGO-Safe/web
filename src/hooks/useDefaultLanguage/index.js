import { useSelector } from 'react-redux';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import { DEFAULT_LANGUAGE } from '../../constants';
import { languages } from '../../utils/languages';

const useDefaultLanguage = () => {
  const nativeLanguage = useSelector(getNativeLanguage);

  const defaultLanguage = (() => {
    if (nativeLanguage && languages.includes(nativeLanguage)) {
      return nativeLanguage;
    }
    return DEFAULT_LANGUAGE;
  })();

  return { defaultLanguage };
};

export default useDefaultLanguage;
