import React, { useState } from 'react';
import { FormGroup } from '@material-ui/core';

import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import { Button, Header, Radio } from '../../../../components/index';
import {
  Title,
  Label,
  Actions
} from '../../../../components/ImprintFiller/ImprintFiller.styled';
import { Container, Content, View } from '../../../../theme/grid';
import { Paragraph } from './Age.styled';

const Age = ({ onBack, onNext }) => {
  const [moreThan65, setMoreThan65] = useState(undefined);

  return (
    <View>
      <Header onBackClick={onBack} />
      <Content>
        <Container className="full-height">
          <Title>Ile masz lat?</Title>
          <FormGroup>
            <Radio
              checked={moreThan65 === true}
              label={<Label>65 lub więcej</Label>}
              name="age"
              onChange={() => setMoreThan65(true)}
            />
            <Radio
              checked={moreThan65 === false}
              label={<Label>mniej niż 65</Label>}
              name="age"
              onChange={() => setMoreThan65(false)}
            />
          </FormGroup>
          <Paragraph>
            <strong>Dlaczego warto podać tę informację?</strong>
            <br />
            Wiek jest ważnym czynnikiem w kalkulacji oceny ryzyka zakażenia.
            Osoby starsze oraz te o obniżonej odporności są szczególnie narażone
            na działanie koronawirusa.
          </Paragraph>
          <Actions>
            <Button
              disabled={moreThan65 === undefined}
              onClick={() => onNext(moreThan65)}
              icon={Icon}
              size="medium"
              text="Dalej"
            />
          </Actions>
        </Container>
      </Content>
    </View>
  );
};

export default Age;
