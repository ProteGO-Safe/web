import React, { useState } from 'react';
import { FormGroup } from '@material-ui/core';

import { Button, Header, Radio } from '../../../../components/index';
import {
  Title,
  Label,
  Actions
} from '../../../../components/ImprintFiller/ImprintFiller.styled';
import { Container, Content, View } from '../../../../theme/grid';
import { Paragraph } from './Age.styled';
import { LESS_THAN_65, MORE_THAN_65, NO_DATA } from './age.constants';

const Age = ({ onBack, onNext }) => {
  const [moreThan65, setMoreThan65] = useState(undefined);
  const [selectedCheckbox, setsSelectedCheckbox] = useState(undefined);

  const onChange = value => {
    setsSelectedCheckbox(value);
    switch (value) {
      case MORE_THAN_65:
      case NO_DATA:
        setMoreThan65(true);
        break;
      case LESS_THAN_65:
        setMoreThan65(false);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Header onBackClick={onBack} />
      <Content>
        <Container className="full-height">
          <Title>Ile masz lat?</Title>
          <FormGroup>
            <Radio
              checked={selectedCheckbox === LESS_THAN_65}
              label={<Label>mniej niż 65</Label>}
              name="age"
              onChange={() => onChange(LESS_THAN_65)}
            />
            <Radio
              checked={selectedCheckbox === MORE_THAN_65}
              label={<Label>65 lub więcej</Label>}
              name="age"
              onChange={() => onChange(MORE_THAN_65)}
            />
            <Radio
              checked={selectedCheckbox === NO_DATA}
              label={<Label>nie chcę podać</Label>}
              name="age"
              onChange={() => onChange(NO_DATA)}
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
              label="Dalej"
            />
          </Actions>
        </Container>
      </Content>
    </View>
  );
};

export default Age;
