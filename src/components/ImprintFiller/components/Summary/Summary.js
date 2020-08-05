import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Header, GovFooter, Stepper } from '../../../index';
import Imprint from '../../../Imprint/Imprint';
import {
  chronicSickValues,
  FIELD_BLOOD_GROUP,
  FIELD_SMOKE,
  FIELD_SMOKE_NUMBER,
  VALUE_SMOKE_YES
} from '../../../../constants';
import { NUMBER_OF_STEPS } from '../../ImprintFiller.constants';

import { Color } from '../../../../theme/colors';
import { Container, View } from '../../../../theme/grid';
import { SmallText } from '../../../../theme/typography';
import { Actions, Title } from '../../ImprintFiller.styled';
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
      <Header hideBackButton />
      <Container>
        <Stepper currentStep={step} numberOfSteps={NUMBER_OF_STEPS} />
        <Title>Sprawdź, czy dane są prawidłowe</Title>
        <Imprint
          user={{
            bloodGroup: values[FIELD_BLOOD_GROUP],
            chronicSicks,
            smokeNumber: values[FIELD_SMOKE_NUMBER],
            isSmoking: values[FIELD_SMOKE] === VALUE_SMOKE_YES
          }}
        />
        <Actions>
          <Button onClick={handleSubmit}>
            <SmallText color={Color.white} fontWeight={FontWeight.Bold}>
              Zapisz metrykę
            </SmallText>
          </Button>
          <Button onClick={resetForm} type="outline">
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
