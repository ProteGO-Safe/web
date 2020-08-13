import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchLanguage } from '../../store/actions/nativeData';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import {
  getAppLanguage,
  getLanguageChangedByUser
} from '../../store/selectors/app';
import { changeLanguage } from '../../store/actions/app';
import { resources } from '../../locales/resources';
import { DEFAULT_LANGUAGE } from '../../constants';

const useLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const nativeLanguage = useSelector(getNativeLanguage);
  const appLanguage = useSelector(getAppLanguage);
  const isLanguageChangedByUser = useSelector(getLanguageChangedByUser);

  const languages = (() => Object.keys(resources).map(item => item))();

  const defaultLanguage = (() => {
    if (nativeLanguage && languages.includes(nativeLanguage)) {
      return nativeLanguage;
    }
    return DEFAULT_LANGUAGE;
  })();

  const changeAppLanguage = useCallback(
    language => {
      dispatch(changeLanguage(language));
      i18n.changeLanguage(defaultLanguage);
    },
    [defaultLanguage, dispatch, i18n]
  );

  useEffect(() => {
    if (!isLanguageChangedByUser) {
      dispatch(fetchLanguage());
      if (nativeLanguage) {
        i18n.changeLanguage(defaultLanguage);
      }
    }
  }, [
    dispatch,
    i18n,
    defaultLanguage,
    nativeLanguage,
    isLanguageChangedByUser
  ]);

  return {
    languages,
    changeAppLanguage,
    language: appLanguage || defaultLanguage
  };
};

export default useLanguage;
