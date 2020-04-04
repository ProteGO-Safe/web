import React, { useCallback, useState } from 'react';
import { useFormikContext } from 'formik';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import { Button, Container, FieldSet } from '../../../../components';

import { FIELD_PHONE } from '../../../../constants';
import './Step8.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step8 = () => {
  const {
    errors,
    handleChange,
    setErrors,
    setFieldValue,
    setFieldError,
    values,
    validateForm
  } = useFormikContext();

  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
    validateForm().then(error => {
      if (!error[FIELD_PHONE]) {
        if (!isValid) {
          setFieldError(FIELD_PHONE, 'Wpisz poprawny numer');
        } else {
          setFieldValue('step', 3);
          setErrors({});
        }
      }
    });
  };

  const handlePhoneChange = useCallback(
    (isValidStatus, shortNumber, country, fullnumber) => {
      setErrors({});
      handleChange({
        target: {
          name: FIELD_PHONE,
          value: isValidStatus ? fullnumber : shortNumber
        }
      });
      setIsValid(isValidStatus);
    },
    [handleChange, setErrors]
  );
  return (
    <Container>
      <FieldSet>
        <h3>Podaj swój numer telefonu:</h3>
        <IntlTelInput
          defaultCountry="pl"
          autoHideDialCode
          value={values[FIELD_PHONE]}
          inputClassName="input__field input__field--normal"
          onPhoneNumberChange={handlePhoneChange}
          fieldName={FIELD_PHONE}
        />
        <div className="input__description">
          Wpisz swój główny numer telefonu komórkowego.
        </div>
        {errors[FIELD_PHONE] && (
          <div className="input__error">{errors[FIELD_PHONE]}</div>
        )}
        <div className="input__description">
          Powiadomimy Cię jeżeli system wykryje, że miałeś/aś kontakt z osobą
          zarażoną COVID-19. Twój numer pozostaje anonimowy.
        </div>
      </FieldSet>
      <Button onClick={handleClick} icon={Icon} size="medium" text="Dalej" />
    </Container>
  );
};

export default Step8;
