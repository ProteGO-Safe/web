import { DEFAULT_LANGUAGE } from '../../constants';

const useDefaultLanguage = () => {
  // const nativeLanguage = useSelector(getNativeLanguage);
  // const appLanguage = useSelector(getAppLanguage);

  const defaultLanguage = (() => {
    // if (appLanguage) {
    //   return appLanguage;
    // }
    // if (nativeLanguage && languages.includes(nativeLanguage)) {
    //   return nativeLanguage;
    // }
    return DEFAULT_LANGUAGE;
  })();

  return { defaultLanguage };
};

export default useDefaultLanguage;
