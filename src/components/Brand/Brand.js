import React from 'react';

import Sign from '../../assets/img/logo/sign.png';
import Text from '../../assets/img/logo/safesafe.png';

import './Brand.scss';

const Brand = () => (
  <div className="brand">
    <img className="brand__sign" src={Sign} alt="SafeSafe" />
    <img className="brand__text" src={Text} alt="SafeSafe" />
    <div className="brand__content">
      <h4 className="brand__text-1">
        Włącz się do wspólnej walki przeciwko Koronawirusowi.
      </h4>
      <h5 className="brand__text-2">Spersonalizuj swoją apliakcję.</h5>
    </div>
  </div>
);

export default Brand;
