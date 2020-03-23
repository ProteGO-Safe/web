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
import AngleLeftIcon from '../../../../assets/img/icons/angle-left.svg';
import UserImg from '../../../../assets/img/icons/user.svg';
import {
  FIELD_AGE,
  FIELD_BLOOD_GROUP,
  FIELD_CHRONIC_SICK_1,
  FIELD_CHRONIC_SICK_2,
  FIELD_CHRONIC_SICK_3,
  FIELD_CHRONIC_SICK_4,
  FIELD_CHRONIC_SICK_5,
  FIELD_CHRONIC_SICK_6,
  FIELD_CHRONIC_SICK_7,
  FIELD_SEX,
  FIELD_SMOKE,
  FIELD_SMOKE_NUMBER,
  VALUE_MAN,
  VALUE_SMOKE_YES,
  VALUE_WOMAN
} from '../../../../constants';

const tSex = {
  [VALUE_MAN]: 'Mężczyzna',
  [VALUE_WOMAN]: 'Kobieta'
};

const Summary = () => {
  const { handleSubmit, resetForm, values } = useFormikContext();
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
        <div className="content">
          <p className="big text-bold">
            <span>Płeć:</span> {tSex[values[FIELD_SEX]]}
          </p>
          <p className="big text-bold">
            <span>Wiek:</span> {values[FIELD_AGE]}
          </p>
          <p className="big text-bold">Dolegliwości:</p>
          <ul data-empty="Brak przewlekłych chorób">
            {values[FIELD_CHRONIC_SICK_1] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_1}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_2] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_2}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_3] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_3}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_4] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_4}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_5] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_4}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_6] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_5}</p>
              </li>
            )}
            {values[FIELD_CHRONIC_SICK_7] && (
              <li>
                <p className="medium-2">{FIELD_CHRONIC_SICK_6}</p>
              </li>
            )}
          </ul>
          <p className="big text-bold">
            <span>Grupa krwi:</span> {values[FIELD_BLOOD_GROUP]}
          </p>
          <p className="big text-bold">
            <span>Papierosy:</span> {values[FIELD_SMOKE]}
          </p>
          {values[FIELD_SMOKE] === VALUE_SMOKE_YES && (
            <ul>
              <li>
                <p className="medium-2">{values[FIELD_SMOKE_NUMBER]}</p>
              </li>
            </ul>
          )}
        </div>

        <FieldSet>
          <Button onClick={handleSubmit} text="Zapisz metrykę" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Summary;
