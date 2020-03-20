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
        <p className="small text-center">
          W ten sposób uzyskasz łatwy dostęp do aplikacji z głównego ekranu
          telefonu.
        </p>
        <FieldSet>
          <Button
            onClick={() => setFieldValue('step', 'install_app_2')}
            text="Zainstaluj"
            type="primary"
          />
          <Button onClick={onLeave} text="pomiń" type="blank" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default InstallAppAndroid;
