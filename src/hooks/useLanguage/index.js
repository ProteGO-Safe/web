import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchLanguage } from '../../store/actions/nativeData';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import { getAppLanguage } from '../../store/selectors/app';
import { changeLanguage } from '../../store/actions/app';
import { resources } from '../../locales/resources';
import { DEFAULT_LANGUAGE } from '../../constants';

const useLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const nativeLanguage = useSelector(getNativeLanguage);
  const appLanguage = useSelector(getAppLanguage);

  const languages = (() => Object.keys(resources).map(item => item))();

  const defaultLanguage = (() => {
    if (nativeLanguage && languages.includes(nativeLanguage)) {
      return nativeLanguage;
    }
    return DEFAULT_LANGUAGE;
  })();

  const changeAppLanguage = useCallback(
    language => dispatch(changeLanguage(language)),
    [dispatch]
  );

  useEffect(() => {
    if (!appLanguage && !nativeLanguage) {
      dispatch(fetchLanguage());
      return;
    }
    if (!appLanguage && nativeLanguage) {
      changeAppLanguage(defaultLanguage);
      return;
    }
    if (appLanguage) {
      i18n.changeLanguage(appLanguage);
    }
  }, [
    dispatch,
    i18n,
    changeAppLanguage,
    appLanguage,
    nativeLanguage,
    defaultLanguage
  ]);

  return {
    languages,
    changeAppLanguage,
    appLanguage
  };
};

export default useLanguage;
