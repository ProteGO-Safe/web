import React from 'react';
import { useDispatch } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { showStartScreenSuccess } from '../../store/actions/app';
import StartScreen from './StartScreen';
import { resources } from '../../locales/resources';
import useLanguage from '../../hooks/useLanguage';

const StartScreenContainer = ({ t }) => {
  const dispatch = useDispatch();
  const onStartClick = () => {
    dispatch(showStartScreenSuccess());
  };

  const { language, changeAppLanguage, languages } = useLanguage();

  const handleChangeLang = countryCode => changeAppLanguage(countryCode.toLowerCase());

  const languagesLabels = () => {
    return Object.keys(resources[language].languages).reduce((obj, item) => {
      return {
        ...obj,
        [item.toUpperCase()]: t(`languages:${item}`)
      };
    }, {});
  };

  return (
    <StartScreen
      onStartClick={onStartClick}
      languages={languages.map(value => value.toUpperCase())}
      customLabels={languagesLabels()}
      defaultLang={language.toUpperCase()}
      onSelect={handleChangeLang}
    />
  );
};

export default withTranslation()(StartScreenContainer);
