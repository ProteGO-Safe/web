import React from 'react';
import { useFormikContext } from 'formik';
import {
  Brand,
  Button,
  Checkbox,
  FieldSet,
  Container,
  Input
} from '../../../../components';
import { FIELD_NAME, FIELD_TERM1, FIELD_TERM2 } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right.svg';

import './Step1.scss';
import useModalContext from '../../../../hooks/useModalContext';
import PrivacyPolicyContent from '../../../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import RegulationsContent from '../../../Regulations/component/RegulationsContent/RegulationsContent';

const Step1 = () => {
  const {
    errors,
    handleChange,
    setErrors,
    setFieldValue,
    values,
    validateForm
  } = useFormikContext();
  const { openModal } = useModalContext();

  const fields = [FIELD_NAME, FIELD_TERM1, FIELD_TERM2];

  const handleClick = () => {
    validateForm().then(error => {
      if (!fields.some(field => Object.keys(error).includes(field))) {
        setFieldValue('step', 2);
        setErrors({});
      }
    });
  };

  return (
    <Container>
      <Brand />
      <div className="worth-it">
        <p className="small text-bold">Dlaczego warto?</p>
        <ul className="text-list">
          <li>
            <p className="small">
              Na bieżąco sprawdzaj w jakiej jesteś
              <br />
              grupie ryzyka (wytyczne WHO)
            </p>
          </li>
          <li>
            <p className="small">Uzupełniaj Dziennik Zdrowia</p>
          </li>
          <li>
            <p className="small">
              Wszystkie ważne informacje o COVID-19
              <br />w jednym miejscu
            </p>
          </li>
        </ul>
      </div>
      <FieldSet>
        <Input
          error={errors[FIELD_NAME]}
          description="Jak masz na imię?"
          placeholder="imię"
          onChange={handleChange}
          name={FIELD_NAME}
          value={values[FIELD_NAME]}
        />
        <Checkbox
          checked={values[FIELD_TERM1]}
          description={
            <div>
              Oświadczam, że zapoznałem/am się z{' '}
              <span
                onClick={() => openModal(<RegulationsContent />)}
                role="button"
              >
                Regulaminem
              </span>{' '}
              SafeSafe oraz{' '}
              <span
                onClick={() => openModal(<PrivacyPolicyContent />)}
                role="button"
              >
                Polityką Prywatności
              </span>{' '}
              i akceptuję ich postanowienia.
            </div>
          }
          error={errors[FIELD_TERM1]}
          name={FIELD_TERM1}
          onChange={() => setFieldValue(FIELD_TERM1, !values[FIELD_TERM1])}
          value={FIELD_TERM1}
        />
        <Checkbox
          checked={values[FIELD_TERM2]}
          description={
            <div>
              Zdaję sobie sprawę, że umieszczenie w SafeSafe informacji
              dotyczących mojego stanu zdrowia oznacza wyrażenie zgody na
              przetwarzanie moich danych dotyczących zdrowia przez Tytani24 Sp.
              z o.o. w celu korzystania z niektórych funkcji SafeSafe, w
              szczególności analizy ryzyka zarażenia wirusem SARS-CoV-2.
              Szczegóły dotyczące przetwarzania moich danych mogę odnaleźć w{' '}
              <span
                onClick={() => openModal(<PrivacyPolicyContent />)}
                role="button"
              >
                Polityce Prywatności
              </span>
              .
            </div>
          }
          error={errors[FIELD_TERM2]}
          name={FIELD_TERM2}
          onChange={() => setFieldValue(FIELD_TERM2, !values[FIELD_TERM2])}
          value={FIELD_TERM2}
        />
      </FieldSet>
      <Button
        onClick={handleClick}
        icon={Icon}
        text="Przejdź dalej"
        type="outline"
      />
    </Container>
  );
};

export default Step1;
