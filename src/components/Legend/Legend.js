import React from 'react';

import './Legend.scss';

const Legend = () => (
  <div className="legend">
    <div className="legend__item">
      <div className="legend__dot legend__dot--1" />
      <p className="smaller">dane uzupełnione</p>
    </div>
    <div className="legend__item">
      <div className="legend__dot dot-2 legend__dot--2" />
      <p className="smaller">brak danych</p>
    </div>
    <div />
  </div>
);

export default Legend;
