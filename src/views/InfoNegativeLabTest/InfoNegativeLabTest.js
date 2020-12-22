import React from 'react';
import { Button, T } from '../../components';
import * as Styled from './InfoNegativeLabTest.styled';

const InfoNegativeLabTest = ({ handleClickYes, handleClickCancel }) => (
  <Styled.InfoLabTest>
    <Styled.Icon />
    <Styled.Title>
      <T i18nKey="info_lab_test_text1" />
    </Styled.Title>

    <Styled.Description>
      <Styled.Paragraph>
        <T i18nKey="info_lab_test_text2" />
      </Styled.Paragraph>
      <Styled.Strong>
        <T i18nKey="info_lab_test_text3" />
      </Styled.Strong>
      <Styled.Strong>
        <T i18nKey="info_lab_test_text4" />
      </Styled.Strong>
    </Styled.Description>

    <Styled.ButtonsWrapper>
      <Button onClick={handleClickYes}>
        <T i18nKey="info_lab_test_text5" />
      </Button>
      <Button onClick={handleClickCancel} type="outline">
        <T i18nKey="info_lab_test_text6" />
      </Button>
    </Styled.ButtonsWrapper>
  </Styled.InfoLabTest>
);

export default InfoNegativeLabTest;
