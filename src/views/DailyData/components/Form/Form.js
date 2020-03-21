import React from 'react';
import { useFormikContext } from 'formik';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE_EVENING,
  FIELD_TEMPERATURE_MORNING
} from '../../../../constants';
import { FieldSet, Input, Range } from '../../../../components';

const Form = () => {
  const { handleChange, values } = useFormikContext();
  return (
    <div className="form">
      <h4 className="big">Temperatura</h4>
      <FieldSet horizontal>
        <Input
          label="Rano"
          name={FIELD_TEMPERATURE_MORNING}
          max={50}
          min={1}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE_MORNING]}
        />
        <Input
          label="Wieczorem"
          name={FIELD_TEMPERATURE_EVENING}
          max={50}
          min={1}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE_EVENING]}
        />
      </FieldSet>
      <h4 className="big">Objawy</h4>
      <FieldSet>
        <Range field={FIELD_RUNNY_NOSE} label="Katar" />
        <Range field={FIELD_COUGH} label="Kaszel" />
        <Range field={FIELD_CHILLS} label="Dreszcze" />
        <Range field={FIELD_MUSCLE_PAIN} label="Ból mięśni" />
      </FieldSet>
      <h4 className="big">Kontakty</h4>
      <FieldSet>
        <Input
          name={FIELD_CONTACTS}
          onChange={handleChange}
          placeholder="Z kim się spotkałem, gdzie byłem - wpisz"
          size="small"
          value={values[FIELD_CONTACTS]}
        />
      </FieldSet>
    </div>
  );
};

export default Form;
