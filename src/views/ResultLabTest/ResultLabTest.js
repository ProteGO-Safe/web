import React from 'react';
import useNavigation from '../../hooks/useNavigation';
import { Button, T } from '../../components';
import * as Styled from './ResultLabTest.styled';
import { Routes } from '../../services/navigationService/routes';

const ResultLabTest = ({ title, content, buttons }) => {
  const { goTo } = useNavigation();

  const renderButtons = buttons.map(({ type, name, onClick }) => (
    <Button onClick={onClick} type={type} key={name}>
      {name}
    </Button>
  ));

  return (
    <Styled.ResultLabTest>
      <Styled.Icon />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Paragraph>{content}</Styled.Paragraph>

      <Styled.ButtonWrapper>
        {renderButtons}
        <Button onClick={() => goTo(Routes.Home)} type="outline">
          <T i18nKey="result_test_lab_text3" />
        </Button>
      </Styled.ButtonWrapper>
    </Styled.ResultLabTest>
  );
};

export default ResultLabTest;
