import React from 'react';
import {
  Smile,
  TriageRiskInformation,
  TriageInfoBorder
} from '../../components/index';
import { PhoneNumber, Url } from '../../../../components';

const ExposureSick = () => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <div className="more-information">
        <h4>Więcej informacji</h4>
        <p>
          Jeśli masz dodatkowe pytania lub wątpliwości, wejdź na{' '}
          <Url value="https://www.gov.pl/koronawirus">gov.pl/koronawirus</Url>{' '}
          lub <Url value="https://www.pacjent.gov.pl">pacjent.gov.pl</Url>,
          gdzie na czacie możesz porozmawiać z konsultantem. Do Twojej
          dyspozycji jest także infolinia NFZ{' '}
          <PhoneNumber>800-190-590</PhoneNumber>.
        </p>
      </div>
    </>
  );
};

export default ExposureSick;
