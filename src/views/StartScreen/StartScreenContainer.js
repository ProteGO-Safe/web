import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { showStartScreenSuccess } from '../../store/actions/app';
import StartScreen from './StartScreen';
import { resources } from '../../locales/resources';
import { getLanguage } from '../../store/selectors/nativeData';
import { DEFAULT_LANGUAGE } from '../../constants';

const StartScreenContainer = ({ t, i18n }) => {
  const dispatch = useDispatch();
  const languageFromNative = useSelector(getLanguage);
  const onStartClick = () => {
    dispatch(showStartScreenSuccess());
  };

  const handleChangeLang = countryCode =>
    i18n.changeLanguage(countryCode.toLowerCase());

  const languages = (() =>
    Object.keys(resources).map(item => item.toUpperCase()))();

  const defaultLanguage = (() => {
    if (
      languageFromNative &&
      languages.includes(languageFromNative.toUpperCase())
    ) {
      return languageFromNative.toUpperCase();
    }
    return DEFAULT_LANGUAGE.toUpperCase();
  })();

  const languagesLabels = () => {
    return Object.keys(
      resources[defaultLanguage.toLowerCase()].languages
    ).reduce((obj, item) => {
      return {
        ...obj,
        [item.toUpperCase()]: t(`languages:${item}`)
      };
    }, {});
  };

  return (
    <StartScreen
      onStartClick={onStartClick}
      languages={languages}
      customLabels={languagesLabels()}
      defaultLang={defaultLanguage}
      onSelect={handleChangeLang}
    />
  );
};

export default withTranslation()(StartScreenContainer);
