import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../components';
import * as Styled from './InfoLabTest.styled';

const InfoLabTest = ({ handleClickYes, handleClickCancel, t }) => (
  <Styled.InfoLabTest>
    <Styled.Icon />
    <Styled.Title>{t('info_lab_test_text1')}</Styled.Title>

    <Styled.Description>
      <Styled.Paragraph>{t('info_lab_test_text2')}</Styled.Paragraph>
      <Styled.Strong>{t('info_lab_test_text3')}</Styled.Strong>
      <Styled.Strong>{t('info_lab_test_text4')}</Styled.Strong>
    </Styled.Description>

    <Styled.ButtonsWrapper>
      <Button onClick={handleClickYes}>{t('info_lab_test_text5')}</Button>
      <Button onClick={handleClickCancel} type="outline">
        {t('info_lab_test_text6')}
      </Button>
    </Styled.ButtonsWrapper>
  </Styled.InfoLabTest>
);

export default withTranslation()(InfoLabTest);
