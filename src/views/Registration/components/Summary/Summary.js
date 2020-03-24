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
import * as constants from '../../../../constants';
import { Imprint } from '../../../Imprint';

const Summary = () => {
  const { handleSubmit, resetForm, values } = useFormikContext();

  const chronicSicks = (() => {
    const chronicSicks = [];
    if (values[constants.FIELD_CHRONIC_SICK_1]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_1, description: values[constants.FIELD_CHRONIC_SICK_1_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_2]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_2, description: values[constants.FIELD_CHRONIC_SICK_2_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_3]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_3, description: values[constants.FIELD_CHRONIC_SICK_3_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_4]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_4, description: values[constants.FIELD_CHRONIC_SICK_4_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_5]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_5, description: values[constants.FIELD_CHRONIC_SICK_5_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_6]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_6, description: values[constants.FIELD_CHRONIC_SICK_6_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_7]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_7, description: values[constants.FIELD_CHRONIC_SICK_7_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_8]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_8, description: values[constants.FIELD_CHRONIC_SICK_8_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_9]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_9, description: values[constants.FIELD_CHRONIC_SICK_9_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_10]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_10, description: values[constants.FIELD_CHRONIC_SICK_10_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_11]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_11, description: values[constants.FIELD_CHRONIC_SICK_11_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_12]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_12, description: values[constants.FIELD_CHRONIC_SICK_12_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_13]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_13, description: values[constants.FIELD_CHRONIC_SICK_13_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_14]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_14, description: values[constants.FIELD_CHRONIC_SICK_14_DESC]});
    if (values[constants.FIELD_CHRONIC_SICK_15]) chronicSicks.push({name: constants.FIELD_CHRONIC_SICK_15, description: values[constants.FIELD_CHRONIC_SICK_15_DESC]});
    return chronicSicks;
  })();
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
        <Imprint
          smokeNumber={values[constants.FIELD_SMOKE_NUMBER]}
          sex={values[constants.FIELD_SEX]}
          bloodGroup={values[constants.FIELD_BLOOD_GROUP]}
          age={values[constants.FIELD_AGE]}
          chronicSicks={chronicSicks}
        />
        <FieldSet>
          <Button onClick={handleSubmit} text="Zapisz metrykę" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Summary;
