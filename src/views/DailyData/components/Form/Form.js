import React from 'react';
import { withTranslation } from 'react-i18next';
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

const Form = ({ t, isViewMode }) => {
  const { handleChange, setFieldValue, values, errors } = useFormikContext();

  return (
    <div className="form">
      <h4 className="medium title-2">{t('form_text1')}</h4>
      <FieldSet>
        <Input
          error={t(errors[FIELD_TEMPERATURE])}
          disabled={isViewMode}
          label={t('form_text4')}
          name={FIELD_TEMPERATURE}
          placeholder="36.6"
          max={45}
          min={35}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE]}
        />
      </FieldSet>
      <h4 className="medium title-3">{t('form_text2')}</h4>
      <FieldSet>
        <InputSlider
          label={t('form_text10')}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) =>
            setFieldValue(FIELD_RUNNY_NOSE, `level ${value}`)
          }
          value={getValueFromMark(values[FIELD_RUNNY_NOSE])}
        />
        <InputSlider
          label={t('form_text9')}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_COUGH, `level ${value}`)}
          value={getValueFromMark(values[FIELD_COUGH])}
        />
        <InputSlider
          label={t('form_text8')}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) => setFieldValue(FIELD_CHILLS, `level ${value}`)}
          value={getValueFromMark(values[FIELD_CHILLS])}
        />
        <InputSlider
          label={t('form_text7')}
          marks={marks}
          min={1}
          max={4}
          onChange={(e, value) =>
            setFieldValue(FIELD_MUSCLE_PAIN, `level ${value}`)
          }
          value={getValueFromMark(values[FIELD_MUSCLE_PAIN])}
        />
      </FieldSet>
      <h4 className="medium title-2">{t('form_text3')}</h4>
      <FieldSet>
        <Textarea
          disabled={isViewMode}
          label={t('form_text5')}
          name={FIELD_CONTACTS}
          onChange={handleChange}
          placeholder={t('form_text6')}
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

export default withTranslation()(Form);
