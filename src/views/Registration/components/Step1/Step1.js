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
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

import './Step1.scss';
import getMobileOperatingSystem from '../../../../services/getMobileOperationSystem';

const Step1 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const handleClick = () => {
    const system = getMobileOperatingSystem();
    const { installApp } = values;

    setFieldValue('step', system && installApp ? 'install_app_1' : 2);
  };

  return (
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
          checked={values.term1 === 'term1'}
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
          name="term1"
          onChange={() => setFieldValue('term1', 'term1')}
          value="term1"
        />
        <Checkbox
          checked={values.term2 === 'term2'}
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
          name="term2"
          onChange={() => setFieldValue('term2', 'term2')}
          value="term2"
        />
      </FieldSet>
      <Button
        disabled={!values.name}
        onClick={handleClick}
        icon={Icon}
        text="Przejdź dalej"
      />
    </Container>
  );
};

export default Step1;
