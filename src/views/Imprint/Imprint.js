import React from 'react';
import { Container } from '../../components';
import {
  VALUE_MAN,
  VALUE_SMOKE_NO,
  VALUE_SMOKE_YES,
  VALUE_WOMAN
} from '../../constants';

const tSex = {
  [VALUE_MAN]: 'Mężczyzna',
  [VALUE_WOMAN]: 'Kobieta'
};

const Imprint = ({ sex, age, chronicSicks, bloodGroup, smokeNumber }) => {
  return (
    <div className="view view__imprint">
      <Container>
        <div className="content">
          <p className="big text-bold">
            <span>Płeć:</span> {tSex[sex]}
          </p>
          <p className="big text-bold">
            <span>Wiek:</span> {age}
          </p>
          <p className="big text-bold">Dolegliwości:</p>
          <ul data-empty="Brak przewlekłych chorób">
            {chronicSicks.map(sick => (
              <li key={sick.name}>
                <p className="medium-2">{`${sick.name} ${sick.description}`}</p>
              </li>
            ))}
          </ul>
          <p className="big text-bold">
            <span>Grupa krwi:</span> {bloodGroup}
          </p>
          <p className="big text-bold">
            <span>Papierosy:</span>{' '}
            {smokeNumber ? VALUE_SMOKE_YES : VALUE_SMOKE_NO}
          </p>
          {smokeNumber && (
            <ul>
              <li>
                <p className="medium-2">{smokeNumber}</p>
              </li>
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Imprint;
