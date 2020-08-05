import React from 'react';
import { useFormikContext } from 'formik';
import { Container, View } from '../../../../theme/grid';
import { Header } from '../../../../components/Header';
import { GovFooter } from '../../../../components/GovFooter';
import { TextField } from '../../../../components/TextField';
import { FIELD_NAME } from '../../../../constants';
import { Button } from '../../../../components';
import { ButtonWrapper, Label } from '../../Registration.styled';

const NameForm = () => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormikContext();

  const disabled = (() => {
    return !values[FIELD_NAME];
  })();

  const onSkip = () => {
    setFieldValue(FIELD_NAME, 'Użytkowniku');
    handleSubmit();
  };

  return (
    <View>
      <Header hideBackButton />
      <Container>
        <Label>Jak aplikacja może się do Ciebie zwracać?</Label>
        <TextField
          error={errors[FIELD_NAME]}
          placeholder="Twój nick lub pseudonim (opcjonalnie)"
          onChange={handleChange}
          name={FIELD_NAME}
          value={values[FIELD_NAME]}
          info="Podpowiedź: nie podawaj swojego nazwiska."
        />

        <ButtonWrapper>
          <Button
            disabled={disabled}
            onClick={handleSubmit}
            label="POTWIERDŹ"
          />
          <Button onClick={onSkip} type="outline" label="Pomiń ten krok" />
        </ButtonWrapper>
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default NameForm;
