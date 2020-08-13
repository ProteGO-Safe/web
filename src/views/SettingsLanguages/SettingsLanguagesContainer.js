import React from 'react';
import Routes from '../../routes';
import { Layout } from '../../components';
import SettingsLanguages from './SettingsLanguages';

const SettingsLanguagesContainer = () => {
  const LANGUAGES = [
    {
      shortcutLang: 'no',
      label: 'Norski',
      onClick: () => null
    },
    {
      shortcutLang: 'pl',
      label: 'Polski',
      onClick: () => null
    },
    {
      shortcutLang: 'ua',
      label: 'Yкраїнська',
      onClick: () => null
    }
  ];

  return (
    <Layout isNavigation noMargin>
      <SettingsLanguages
        addTranslationPath={Routes.AddTranslation}
        languages={LANGUAGES}
        selectedLang={{
          shortcutLang: 'pl',
          label: 'Polski'
        }}
      />
    </Layout>
  );
};

export default SettingsLanguagesContainer;
