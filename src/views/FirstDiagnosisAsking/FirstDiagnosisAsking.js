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
            Czy chcesz dowiedzieć się więcej na temat czynników mających wpływ
            na ryzyko infekcji? Jeśli tak, kliknij poniżej i wykonaj Test oceny
            ryzyka.
          </Paragraph>
          <Small>
            Pamiętaj, że wyniki wywiadu służą wyłącznie celom informacyjnym oraz
            edukacyjnym i nie mogą być w żadnym wypadku interpretowane ani
            traktowane jako porada, konsultacja lub diagnoza lekarska.
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
