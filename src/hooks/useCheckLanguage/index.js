import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import isequal from 'lodash.isequal';
import { fetchLanguage } from '../../store/actions/nativeData';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import { getLanguageChangedByUser } from '../../store/selectors/app';
import useDefaultLanguage from '../useDefaultLanguage';
import useLanguage from '../useLanguage';
import { AVAILABLE_LANGUAGES } from '../../constants';

const useCheckLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { languages } = useLanguage();
  const nativeLanguage = useSelector(getNativeLanguage);
  const isLanguageChangedByUser = useSelector(getLanguageChangedByUser);

  const { defaultLanguage } = useDefaultLanguage();

  useEffect(() => {
    if (!isLanguageChangedByUser) {
      dispatch(fetchLanguage());
    }
    moment.locale(defaultLanguage);
    i18n.changeLanguage(defaultLanguage);
  }, [
    dispatch,
    i18n,
    defaultLanguage,
    nativeLanguage,
    isLanguageChangedByUser
  ]);

  if (!isequal(languages.sort(), Object.keys(AVAILABLE_LANGUAGES).sort())) {
    throw new Error('illegal languages values');
  }
};

export default useCheckLanguage;
