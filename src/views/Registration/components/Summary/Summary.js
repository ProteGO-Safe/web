import React from 'react';
import { useFormikContext } from 'formik';
import { Button, GovFooter, Stepper } from '../../../../components';
import Imprint from '../../../../components/Imprint/Imprint';
import {
  chronicSickValues,
  FIELD_AGE,
  FIELD_BLOOD_GROUP,
  FIELD_SEX,
  FIELD_SMOKE_NUMBER
} from '../../../../constants';
import { NUMBER_OF_STEPS } from '../../Registration.constants';

import { Header } from '../../../../components/Header';
import { Color } from '../../../../theme/colors';
import { Container, View } from '../../../../theme/grid';
import { SmallText } from '../../../../theme/typography';
import { Actions, Title } from '../../Registration.styled';
import { FontWeight } from '../../../../theme/fonts';

const Summary = () => {
  const { handleSubmit, resetForm, values } = useFormikContext();
  const { step } = values;

  const chronicSicks = chronicSickValues
    .filter(sick => values[sick.field])
    .map(sick => {
      return { name: sick.field, description: values[sick.description] };
    });

  return (
    <View>
      <Header hideBackButton hideMenuButton />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <Title>Sprawdź czy dane są prawidłowe</Title>
        <Imprint
          user={{
            age: values[FIELD_AGE],
            bloodGroup: values[FIELD_BLOOD_GROUP],
            chronicSicks,
            sex: values[FIELD_SEX],
            smokeNumber: values[FIELD_SMOKE_NUMBER],
            // phone: values[FIELD_PHONE]
          }}
        />
        <Actions>
          <Button onClick={handleSubmit} text="">
            <SmallText color={Color.white} fontWeight={FontWeight.Bold}>
              Zapisz metrykę i przejdź do aplikacji
            </SmallText>
          </Button>
          <Button onClick={resetForm} text="" type="outline">
            <SmallText color={Color.primary} fontWeight={FontWeight.Bold}>
              Zmień dane
            </SmallText>
          </Button>
        </Actions>
      </Container>
      <GovFooter type="black" />
    </View>
  );
};

export default Summary;
