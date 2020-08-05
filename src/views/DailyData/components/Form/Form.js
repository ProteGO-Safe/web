import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE
} from '../../../../constants';
import { marks } from './constants';
import { FieldSet, Input, Textarea, InputSlider } from '../../../../components';
import { getValueFromMark } from './form.helpers';

const Form = ({ isViewMode }) => {
  const { handleChange, setFieldValue, values, errors } = useFormikContext();

  return (
    <div className="form">
      <h4 className="medium title-2">Temperatura</h4>
      <FieldSet>
        <Input
          error={errors[FIELD_TEMPERATURE]}
          disabled={isViewMode}
          label="Podaj aktualną temperaturę ciała"
          name={FIELD_TEMPERATURE}
          placeholder="36.6"
          max={45}
          min={35}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE]}
        />
      </FieldSet>
      <h4 className="medium title-3">Objawy</h4>
      <FieldSet>
        <InputSlider
          label="Katar"
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) =>
            setFieldValue(FIELD_RUNNY_NOSE, `level ${value}`)
          }
          value={getValueFromMark(values[FIELD_RUNNY_NOSE])}
        />
        <InputSlider
          label="Kaszel"
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_COUGH, `level ${value}`)}
          value={getValueFromMark(values[FIELD_COUGH])}
        />
        <InputSlider
          label="Dreszcze"
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_CHILLS, `level ${value}`)}
          value={getValueFromMark(values[FIELD_CHILLS])}
        />
        <InputSlider
          label="Ból mięśni"
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) =>
            setFieldValue(FIELD_MUSCLE_PAIN, `level ${value}`)
          }
          value={getValueFromMark(values[FIELD_MUSCLE_PAIN])}
        />
      </FieldSet>
      <h4 className="medium title-2">Miejsca i kontakty</h4>
      <FieldSet>
        <Textarea
          disabled={isViewMode}
          label="Z kim się spotkałem, gdzie byłem"
          name={FIELD_CONTACTS}
          onChange={handleChange}
          placeholder="wpisz"
          value={values[FIELD_CONTACTS]}
        />
      </FieldSet>
    </div>
  );
};

Form.defaultProps = {
  isViewMode: false
};

Form.propTypes = {
  isViewMode: PropTypes.bool
};

export default Form;
