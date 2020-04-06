import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, FieldSet } from '../../../../components';
import Imprint from '../../../../components/Imprint/Imprint';
import UserImg from '../../../../assets/img/icons/user.svg';
import {
  chronicSickValues,
  FIELD_AGE,
  FIELD_BLOOD_GROUP,
  FIELD_PHONE,
  FIELD_SEX,
  FIELD_SMOKE_NUMBER
} from '../../../../constants';
import { Header } from '../../../../components/Header';

const Summary = () => {
  const { handleSubmit, resetForm, values } = useFormikContext();

  const chronicSicks = chronicSickValues
    .filter(sick => values[sick.field])
    .map(sick => {
      return { name: sick.field, description: values[sick.description] };
    });

  return (
    <div className="view view__registration-summary">
      <Header onBackClick={resetForm} />
      <Container>
        <div className="user">
          <img src={UserImg} alt="Avatar" />
          <h5 className="big">Podsumujmy:</h5>
        </div>
        <Imprint
          user={{
            age: values[FIELD_AGE],
            bloodGroup: values[FIELD_BLOOD_GROUP],
            chronicSicks,
            sex: values[FIELD_SEX],
            smokeNumber: values[FIELD_SMOKE_NUMBER],
            phone: values[FIELD_PHONE]
          }}
        />
        <FieldSet>
          <Button onClick={handleSubmit} text="Zapisz metrykę" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Summary;
