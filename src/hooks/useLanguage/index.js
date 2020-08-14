import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getAppLanguage } from '../../store/selectors/app';
import { changeLanguage } from '../../store/actions/app';
import { languages } from '../../utils/languages';
import useDefaultLanguage from '../useDefaultLanguage';

const useLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const appLanguage = useSelector(getAppLanguage);

  const { defaultLanguage } = useDefaultLanguage();

  const changeAppLanguage = useCallback(
    language => {
      dispatch(changeLanguage(language));
      i18n.changeLanguage(language);
    },
    [dispatch, i18n]
  );

  return {
    languages,
    changeAppLanguage,
    language: appLanguage || defaultLanguage
  };
};

export default useLanguage;
