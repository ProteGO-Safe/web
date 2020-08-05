import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
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

const Age = ({ t, onBack, onNext }) => {
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
          <Title>{t('age_text1')}</Title>
          <FormGroup>
            <Radio
              checked={selectedCheckbox === LESS_THAN_65}
              label={<Label>{t('age_text2')}</Label>}
              name="age"
              onChange={() => onChange(LESS_THAN_65)}
            />
            <Radio
              checked={selectedCheckbox === MORE_THAN_65}
              label={<Label>{t('age_text3')}</Label>}
              name="age"
              onChange={() => onChange(MORE_THAN_65)}
            />
            <Radio
              checked={selectedCheckbox === NO_DATA}
              label={<Label>{t('age_text4')}</Label>}
              name="age"
              onChange={() => onChange(NO_DATA)}
            />
          </FormGroup>
          <Paragraph>
            <strong>{t('age_text5')}</strong>
            <br />
            {t('age_text6')}
          </Paragraph>
          <Actions>
            <Button
              disabled={moreThan65 === undefined}
              onClick={() => onNext(moreThan65)}
              label={t('button_next')}
            />
          </Actions>
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(Age);
