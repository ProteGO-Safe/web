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

import Img1 from '../../../../assets/img/icons/and-step-1.svg';
import Img2 from '../../../../assets/img/icons/and-step-2.svg';
import Img3 from '../../../../assets/img/icons/and-step-3.svg';

const InstallAppInstructionAndroid = ({ onLeave }) => {
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
        <div className="instruction instruction__android">
          <div>
            <img src={Img1} alt="Krok 1" />
            <p>
              Naciśnij <span>"menu"</span> w oknie swojej przeglądarki
            </p>
          </div>
          <div>
            <img src={Img2} alt="Krok 2" />
            <p>
              Znajdź pozycję <span>"dodaj do ekranu głównego"</span>
            </p>
          </div>
          <div>
            <img src={Img3} alt="Krok 3" />
            <p>
              Gotowe! Skrót do aplikacji jest teraz na pulpicie Twojego telefonu
            </p>
          </div>
        </div>
        <FieldSet>
          <Button
            onClick={() => setFieldValue('step', 2)}
            text="Gotowe"
            type="primary"
          />
          <Button onClick={onLeave} text="pomiń" type="blank" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default InstallAppInstructionAndroid;
