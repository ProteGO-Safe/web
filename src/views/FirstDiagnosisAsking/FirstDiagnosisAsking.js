import React from 'react';
import Header from '../../components/Header/Header';
import { Button, GovFooter } from '../../components/index';
import { Container, Content, View } from '../../theme/grid';
import { Paragraph, Small, ButtonWrapper } from './FirstDiagnosisAsking.styled';

const FirstDiagnosisAsking = ({ onYesClick, onNoClick }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Paragraph>
            Chcesz dowiedzieć się więcej?
            <br />
            Kliknij poniżej i wykonaj test oceny ryzyka.
          </Paragraph>
          <Small>
            Pamiętaj! Wyniki wywiadu służą wyłącznie celom informacyjnym. Nie
            mogą być interpretowane, ani traktowane jako porada, konsultacja lub
            diagnoza lekarska.
          </Small>
          <ButtonWrapper>
            <Button text="Wykonaj test oceny ryzyka" onClick={onYesClick} />
            <Button
              text="pomiń test oceny ryzyka"
              type="outline"
              onClick={onNoClick}
            />
          </ButtonWrapper>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default FirstDiagnosisAsking;
