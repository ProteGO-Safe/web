import React from 'react';
import PropTypes from 'prop-types';
import './Imprint.scss';

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

const Imprint = ({ user }) => {
  const { sex, age, chronicSicks, bloodGroup, smokeNumber } = user;

  return (
    <div className="imprint">
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
            <p className="medium-2">{`${sick.name} ${
              sick.description ? sick.description : ''
            }`}</p>
          </li>
        ))}
      </ul>
      <p className="big text-bold">
        <span>Grupa krwi:</span> {bloodGroup}
      </p>
      <p className="big text-bold">
        <span>Papierosy:</span> {smokeNumber ? VALUE_SMOKE_YES : VALUE_SMOKE_NO}
      </p>
      {smokeNumber && (
        <ul>
          <li>
            <p className="medium-2">{smokeNumber}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

Imprint.propTypes = {
  user: PropTypes.shape({
    age: PropTypes.number.isRequired,
    bloodGroup: PropTypes.string.isRequired,
    chronicSicks: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string
      })
    ),
    sex: PropTypes.oneOf([VALUE_MAN, VALUE_WOMAN]),
    smokeNumber: PropTypes.string
  }).isRequired
};

export default Imprint;
