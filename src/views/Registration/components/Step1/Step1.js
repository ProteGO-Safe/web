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
import { FIELD_NAME } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right.svg';

import './Step1.scss';
import getMobileOperatingSystem from '../../../../services/getMobileOperationSystem';

const Step1 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const handleClick = () => {
    const system = getMobileOperatingSystem();
    const { installApp } = values;

    setFieldValue('step', system && installApp ? 'install_app' : 2);
  };

  const disabled = !values.name || !values.term1 || !values.term2;

  return (
    <Container>
      <Brand />
      <div>
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
          description="Jak się nazywasz?"
          placeholder="imię"
          onChange={handleChange}
          name={FIELD_NAME}
          value={values[FIELD_NAME]}
        />
        <Checkbox
          checked={values.term1}
          description={
            <div>
              Oświadczam, że zapoznałem/am się z <span>Regulaminem</span>{' '}
              SafeSafe oraz <span>Polityką Prywatności</span> i akceptuję ich
              postanowienia.
            </div>
          }
          name="term1"
          onChange={() => setFieldValue('term1', !values.term1)}
          value="term1"
        />
        <Checkbox
          checked={values.term2}
          description={
            <div>
              Wyrażam zgodę na przetwarzanie przez Tytani24 sp. z o.o. danych
              dotyczących zdrowia w celu korzystania z aplikacji SafeSafe, która
              umożliwia profilaktykę i zapobieganie zarażeniem wirusem
              SARS-CoV-2. Szczegóły na temat tego jak przetwarzamy Twoje dane
              osobowe znajdziesz w <span>Polityce Prywatności</span>.
            </div>
          }
          name="term2"
          onChange={() => setFieldValue('term2', !values.term2)}
          value="term2"
        />
      </FieldSet>
      <Button
        disabled={disabled}
        onClick={handleClick}
        icon={Icon}
        text="Przejdź dalej"
        type="outline"
      />
    </Container>
  );
};

export default Step1;
