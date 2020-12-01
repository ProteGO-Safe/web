import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE,
  FIELD_TIME
} from '../../../../constants';
import { marks } from './constants';
import { Input, Textarea, InputSlider, InputDatePicker, T } from '../../../../components';
import { getValueFromMark } from './form.helpers';
import * as Styled from './Form.styled';

const Form = ({ isViewMode }) => {
  const { handleChange, setFieldValue, values, errors } = useFormikContext();

  return (
    <div className="form">
      <Styled.Group>
        <Styled.Label>
          <T i18nKey="form_text17" />
        </Styled.Label>
        <InputDatePicker
          selected={values[FIELD_TIME]}
          onChange={date => setFieldValue(FIELD_TIME, date)}
          dateFormat="d MMMM yyyy"
        />
      </Styled.Group>

      <Styled.Group>
        <Styled.Label>
          <T i18nKey="form_text1" />
        </Styled.Label>
        <Input
          error={<T i18nKey={errors[FIELD_TEMPERATURE]} />}
          disabled={isViewMode}
          name={FIELD_TEMPERATURE}
          placeholder={<T i18nKey="form_text18" />}
          max={45}
          min={35}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE]}
        />
      </Styled.Group>

      <Styled.Group>
        <Styled.Label>
          <T i18nKey="form_text2" />
        </Styled.Label>

        <InputSlider
          label={<T i18nKey="form_text10" />}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_RUNNY_NOSE, `level ${value}`)}
          value={getValueFromMark(values[FIELD_RUNNY_NOSE])}
        />
        <InputSlider
          label={<T i18nKey="form_text9" />}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_COUGH, `level ${value}`)}
          value={getValueFromMark(values[FIELD_COUGH])}
        />
        <InputSlider
          label={<T i18nKey="form_text8" />}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_CHILLS, `level ${value}`)}
          value={getValueFromMark(values[FIELD_CHILLS])}
        />
        <InputSlider
          label={<T i18nKey="form_text7" />}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_MUSCLE_PAIN, `level ${value}`)}
          value={getValueFromMark(values[FIELD_MUSCLE_PAIN])}
        />
      </Styled.Group>

      <Styled.Group>
        <Styled.Label>
          <T i18nKey="form_text3" />
        </Styled.Label>
        <Textarea
          disabled={isViewMode}
          label={<T i18nKey="form_text5" />}
          name={FIELD_CONTACTS}
          onChange={handleChange}
          placeholder={<T i18nKey="form_text6" />}
          value={values[FIELD_CONTACTS]}
        />
      </Styled.Group>
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
