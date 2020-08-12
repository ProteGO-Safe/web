import React from 'react';
import SettingsLanguages from './SettingsLanguages';
import { Layout } from '../../components';

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
