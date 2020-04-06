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
        <h3>Zacznij chronić siebie i innych!</h3>
        <div className="description">
          Twój numer telefonu jest potrzebny aby poinformować Cię, jeżeli
          byłeś/aś w pobliży osób chorych na COVID-19.
        </div>
        <div className="description">
          Podaj swój główny numer telefonu. Twój numer jest zapisywany tylko na
          Twoim telefonie i pozostaje anonimowy.
        </div>
        <IntlTelInput
          defaultCountry="pl"
          autoHideDialCode
          value={values[FIELD_PHONE]}
          inputClassName="input__field input__field--normal input__phone_number"
          onPhoneNumberChange={handlePhoneChange}
          fieldName={FIELD_PHONE}
          placeholder="xxx xxx xxx"
        />
        {errors[FIELD_PHONE] && (
          <div className="input__error">{errors[FIELD_PHONE]}</div>
        )}
      </FieldSet>
      <Button onClick={handleClick} icon={Icon} size="medium" text="Dalej" />
    </Container>
  );
};

export default Step8;
