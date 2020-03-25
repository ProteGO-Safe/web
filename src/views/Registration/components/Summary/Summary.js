import React from 'react';
import { useFormikContext } from 'formik';
import Background from '../../../../assets/img/banners/banner-8.png';
import {
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../../../components';
import Imprint from '../../../../components/Imprint/Imprint';
import AngleLeftIcon from '../../../../assets/img/icons/angle-left.svg';
import UserImg from '../../../../assets/img/icons/user.svg';
import {
  chronicSickValues,
  FIELD_AGE,
  FIELD_BLOOD_GROUP,
  FIELD_SEX,
  FIELD_SMOKE_NUMBER
} from '../../../../constants';

const Summary = () => {
  const { handleSubmit, resetForm, values } = useFormikContext();

  const chronicSicks = chronicSickValues
    .filter(sick => values[sick.field])
    .map(sick => {
      return { name: sick.field, description: values[sick.description] };
    });

  return (
    <div className="view view__registration-summary">
      <Banner background={Background}>
        <div className="reset-registration">
          <Button
            height="small"
            icon={AngleLeftIcon}
            iconLeft
            onClick={resetForm}
            text=""
            type="white"
            size="small"
          >
            Rozpocznij
            <br />
            od nowa
          </Button>
        </div>
        <Brand content={false} small white />
      </Banner>
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
            smokeNumber: values[FIELD_SMOKE_NUMBER]
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
