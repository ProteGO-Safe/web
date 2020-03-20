import React from 'react';
import { useFormikContext } from 'formik';
import Background from '../../../../assets/img/banners/banner-1.png';
import {
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../../../components';

const InstallAppAndroid = ({ onLeave }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className="view view__install-app">
      <Banner background={Background}>
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="h1 text-center medium">
          Zainstaluj aplikację na swoim smartfonie z systemem Android
        </h4>
        <p>Instrukcja</p>
        <FieldSet>
          <Button
            onClick={onLeave}
            text="Gotowe"
            type="primary"
          />
          <Button
            onClick={onLeave}
            text="pomiń"
            type="blank"
          />
        </FieldSet>
      </Container>
    </div>
  );
};

export default InstallAppAndroid;
