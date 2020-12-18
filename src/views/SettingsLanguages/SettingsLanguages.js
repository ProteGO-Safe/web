import React from 'react';
import { AddTranslation } from './components';
import { T } from '../../components';
import * as Styled from './SettingsLanguages.styled';

const SettingsLanguages = ({ addTranslationPath, languages, selectedLang }) => {
  const renderFlag = flag => require(`../../assets/img/flags/${flag}.svg`);

  const renderLanguages = languages.map(({ shortcutLang, label, onClick }) => (
    <Styled.Item key={shortcutLang} onClick={onClick}>
      <Styled.Flag src={renderFlag(shortcutLang)} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Item>
  ));

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <T i18nKey="settings_languages_text1" />
      </Styled.Title>
      <Styled.SelectedLang>
        <Styled.Flag src={renderFlag(selectedLang.shortcutLang)} />
        <Styled.Label>{selectedLang.label}</Styled.Label>
      </Styled.SelectedLang>

      <Styled.Title>
        <T i18nKey="settings_languages_text2" />
      </Styled.Title>

      {renderLanguages}

      <AddTranslation name={<T i18nKey="settings_languages_text3" />} path={addTranslationPath} />
    </Styled.Wrapper>
  );
};

export default SettingsLanguages;
