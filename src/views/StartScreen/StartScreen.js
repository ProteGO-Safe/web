import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Language, T } from '../../components';
import * as Styled from './StartScreen.styled';
import { getFontScale } from '../../store/selectors/app';

const StartScreen = ({ customLabels, defaultLang, languages, onSelect, onStartClick = Function.prototype }) => {
  const fontScale = useSelector(getFontScale);
  const handleStartClick = useCallback(onStartClick, []);
  const handleChangeView = fontScale > 1;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.LogoWrapper>
          <Styled.Logo change={handleChangeView} />
        </Styled.LogoWrapper>
        <Styled.Subtitle change={handleChangeView} data-cy="start-screen-subtitle">
          <T i18nKey="start_screen_subtitle" />
        </Styled.Subtitle>

        <Styled.ChooseLang change={handleChangeView}>
          <Styled.Label>
            <T i18nKey="start_screen_label" />
          </Styled.Label>
          <Styled.Info>
            <T i18nKey="start_screen_info" />
          </Styled.Info>
          <Language languages={languages} customLabels={customLabels} defaultLang={defaultLang} onSelect={onSelect} />
        </Styled.ChooseLang>

        <Styled.Button data-cy="start-screen-button" onClick={handleStartClick}>
          <T i18nKey="start_screen_button" />
        </Styled.Button>
      </Styled.Content>
      <Styled.Footer />
    </Styled.Container>
  );
};

StartScreen.propTypes = {
  onStartClick: PropTypes.func.isRequired
};

export default StartScreen;
