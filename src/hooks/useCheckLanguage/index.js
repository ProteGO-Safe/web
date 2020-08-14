import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchLanguage } from '../../store/actions/nativeData';
import { getNativeLanguage } from '../../store/selectors/nativeData';
import { getLanguageChangedByUser } from '../../store/selectors/app';
import useDefaultLanguage from '../useDefaultLanguage';

const useCheckLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const nativeLanguage = useSelector(getNativeLanguage);
  const isLanguageChangedByUser = useSelector(getLanguageChangedByUser);

  const { defaultLanguage } = useDefaultLanguage();

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
};

export default useCheckLanguage;
