import React from 'react';
import { withTranslation } from 'react-i18next';
import Routes from '../../routes';
import { Layout } from '../../components';
import SettingsLanguages from './SettingsLanguages';
import useLanguage from '../../hooks/useLanguage';

const SettingsLanguagesContainer = ({ t }) => {
  const { language, changeAppLanguage, languages } = useLanguage();

  const availableLanguages = languages.map(value => {
    return {
      shortcutLang: value,
      label: t(value),
      onClick: () => changeAppLanguage(value)
    };
  });

  return (
    <Layout isNavigation noMargin>
      <SettingsLanguages
        addTranslationPath={Routes.AddTranslation}
        languages={availableLanguages}
        selectedLang={{
          shortcutLang: language,
          label: t(language)
        }}
      />
    </Layout>
  );
};

export default withTranslation('languages')(SettingsLanguagesContainer);
