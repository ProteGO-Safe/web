import React from 'react';

const Button = ({ icon, onClick, text, type }) => (
  <button className={`button button__${type}`} onClick={onClick} type="button">
    {text}
    {icon && <img alt="icon" src={`../../assets/img/icons/${icon}.svg`} />}
  </button>
);

export default Button;
