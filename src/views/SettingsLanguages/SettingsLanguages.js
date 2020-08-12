import React from 'react';
import { withTranslation } from 'react-i18next';
import { AddTranslation } from './components';
import * as Styled from './SettingsLanguages.styled';

const SettingsLanguages = ({ languages, selectedLang, t }) => {
  const renderFlag = flag => require(`../../assets/img/flags/${flag}.svg`);

  const renderLanguages = languages.map(({ shortcutLang, label, onClick }) => (
    <Styled.Item key={shortcutLang} onClick={onClick}>
      <Styled.Flag src={renderFlag(shortcutLang)} />
      <Styled.Label>
        {label} ({shortcutLang.toUpperCase()})
      </Styled.Label>
    </Styled.Item>
  ));

  return (
    <Styled.SettingsLanguages>
      <Styled.Title>{t('settings_languages_text1')}</Styled.Title>
      <Styled.SelectedLang>
        <Styled.Flag src={renderFlag(selectedLang.shortcutLang)} />
        <Styled.Label>
          {selectedLang.label} ({selectedLang.shortcutLang.toUpperCase()})
        </Styled.Label>
      </Styled.SelectedLang>

      <Styled.Title>{t('settings_languages_text2')}</Styled.Title>
      {renderLanguages}

      <AddTranslation name={t('settings_languages_text3')} path="/" />
    </Styled.SettingsLanguages>
  );
};

export default withTranslation()(SettingsLanguages);
