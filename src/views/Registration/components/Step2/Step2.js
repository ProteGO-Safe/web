import React from 'react';
import { useFormikContext } from 'formik';
import { Banner, Container, FieldSet, Option } from '../../../../components';

import {
  FIELD_GENDER,
  VALUE_MAN,
  VALUE_WOMAN,
  VALUE_OTHER
} from '../../../../constants';
import Background from '../../../../assets/img/banners/banner-1.png';

import './Step2.scss';

const Step2 = () => {
  const { handleChange, values } = useFormikContext();

  return (
    <div className="registration registration__step2">
      <Banner background={Background} size="small" />
      <Container>
        <h3>Kim jesteś?</h3>
        <FieldSet>
          <Option
            checked={values[FIELD_GENDER]}
            onChange={handleChange}
            text="Mężczyzna"
            value={VALUE_MAN}
          />
          <Option
            checked={values[FIELD_GENDER]}
            onChange={handleChange}
            text="Kobieta"
            value={VALUE_WOMAN}
          />
          <Option
            checked={values[FIELD_GENDER]}
            onChange={handleChange}
            text="Inne"
            value={VALUE_OTHER}
          />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Step2;
