import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__wrapper">
      <div className="loader__circle loader__circle--1" />
      <div className="loader__circle loader__circle--2" />
      <div className="loader__circle loader__circle--3" />
      <div className="loader__circle loader__circle--4" />
    </div>
  </div>
);

export default Loader;
