import React from 'react';
import { useSelector } from 'react-redux';

import { Button, FieldSet } from '../../components';
import { Header } from '../../components/Header';
import { Container, Content, View } from '../../theme/grid';
import {
  Title,
  Paragraph1,
  Paragraph2,
  WarningContent,
  WarningLabel,
  WarningList,
  WarningListItem
} from './Information.styled';

import warning from '../../assets/img/icons/warning.svg';

const Complete = ({ hideInformation }) => {
  const { triageLevel } = useSelector(state => state.triage);

  return (
    <View>
      <Header hideBackButton={triageLevel === ''} />
      <Content>
        <Container className="full-height">
          <Title>Test oceny ryzyka zakażenia koronawirusem</Title>
          <Paragraph1>
            Jedną z głównych funkcji tej aplikacji jest test oceny ryzyka
            zakażenia koronawirusem. Przygotowaliśmy go zgodnie z wytycznymi
            Światowej Organizacji Zdrowia (WHO).
          </Paragraph1>
          <WarningContent>
            <WarningLabel>
              <img src={warning} alt="Ważne" />
              Ważne
            </WarningLabel>
            <Paragraph2>Test:</Paragraph2>
            <WarningList>
              <WarningListItem>
                <strong>nie jest diagnozą.</strong> Tę mogą postawić wyłącznie
                lekarz i test medyczny na obecność wirusa.
              </WarningListItem>
              <WarningListItem>
                pomaga <strong>monitorować</strong> swój stan zdrowia.
              </WarningListItem>
              <WarningListItem>
                wypełnij go <strong>zgodnie z prawdą</strong> - robisz to dla
                własnego <strong>bezpieczeństwa.</strong>
              </WarningListItem>
            </WarningList>
          </WarningContent>
          <FieldSet>
            <Button onClick={hideInformation} text="DALEJ" />
          </FieldSet>
        </Container>
      </Content>
    </View>
  );
};

export default Complete;
