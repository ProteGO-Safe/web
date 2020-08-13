import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Button, Url } from '../../components';
import * as Styled from './AddTranslation.styled';

const AddTranslation = ({ path, t }) => (
  <Styled.AddTranslation>
    <Styled.IconWrapper>
      <Styled.Icon />
    </Styled.IconWrapper>

    <Styled.Title>
      {t('add_translation_title1')}
      <br />
      {t('add_translation_title2')}
    </Styled.Title>
    <Styled.Subtitle>{t('add_translation_text1')}</Styled.Subtitle>

    <Styled.Content>
      <Styled.Text>{t('add_translation_text2')}</Styled.Text>
      <Url value="https://poeditor.com/join/project/NULZoDaaBA">
        {t('add_translation_text3')}
      </Url>
      <Styled.Text>{t('add_translation_text4')}</Styled.Text>
    </Styled.Content>

    <NavLink to={path}>
      <Button onClick={() => null} label={t('add_translation_button')} />
    </NavLink>
  </Styled.AddTranslation>
);

export default withTranslation()(AddTranslation);
