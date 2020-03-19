import React from 'react';
import { useFormikContext } from 'formik';
import {
  Banner,
  Brand,
  Button,
  Checkbox,
  FieldSet,
  Container,
  Input
} from '../../../../components';
import { FIELD_NAME } from '../../../../constants';
import Background from '../../../../assets/img/banners/banner-1.png';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import './Step1.scss';

const Step1 = () => {
  const { handleChange, values } = useFormikContext();

  return (
    <div className="registration registration__step1">
      <Banner background={Background} size="small" />
      <Container>
        <Brand />
        <Input
          description="Jak się nazywasz?"
          placeholder="imię"
          onChange={handleChange}
          name={FIELD_NAME}
          value={values[FIELD_NAME]}
        />
        <FieldSet>
          <Checkbox
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            name="term1"
            onChange={handleChange}
            value={values.term1}
          />
          <Checkbox
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            name="term2"
            onChange={handleChange}
            value={values.term2}
          />
        </FieldSet>
        <Button
          disabled={!values.name}
          onClick={() => null}
          icon={Icon}
          text="Przejdź dalej"
        />
      </Container>
    </div>
  );
};

export default Step1;
