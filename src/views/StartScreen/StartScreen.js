import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Language } from '../../components';
import * as Styled from './StartScreen.styled';

const StartScreen = ({
  customLabels,
  defaultLang,
  languages,
  onSelect,
  onStartClick = Function.prototype,
  t
}) => {
  const handleStartClick = useCallback(onStartClick, []);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.LogoWrapper>
          <Styled.Logo />
        </Styled.LogoWrapper>
        <Styled.Subtitle>{t('start_screen_subtitle')}</Styled.Subtitle>

        <Styled.ChooseLang>
          <Styled.Label>{t('start_screen_label')}</Styled.Label>
          <Styled.Info>{t('start_screen_info')}</Styled.Info>
          <Language
            languages={languages}
            customLabels={customLabels}
            defaultLang={defaultLang}
            onSelect={onSelect}
          />
        </Styled.ChooseLang>

        <Styled.Button onClick={handleStartClick}>
          {t('start_screen_button')}
        </Styled.Button>
      </Styled.Content>
      <Styled.Footer />
    </Styled.Container>
  );
};

StartScreen.propTypes = {
  onStartClick: PropTypes.func.isRequired
};

export default withTranslation()(StartScreen);
