import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Language } from '../../components';
import * as Styled from './StartScreen.styled';
import { getFontScale } from '../../store/selectors/app';

const StartScreen = ({
  customLabels,
  defaultLang,
  languages,
  onSelect,
  onStartClick = Function.prototype,
  t
}) => {
  const fontScale = useSelector(getFontScale);
  const handleStartClick = useCallback(onStartClick, []);
  const handleChangeView = fontScale > 1;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.LogoWrapper>
          <Styled.Logo change={handleChangeView} />
        </Styled.LogoWrapper>
        <Styled.Subtitle change={handleChangeView}>
          {t('start_screen_subtitle')}
        </Styled.Subtitle>

        <Styled.ChooseLang change={handleChangeView}>
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
