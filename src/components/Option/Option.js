import React from 'react';

const Option = ({ onClick, selected, text }) => {
  const isSelected = selected ? 'selected' : '';

  return (
    <button
      className={`option__wrapper ${isSelected}`}
      onClick={onClick}
      type="button"
    >
      <span className="option__label">{text}</span>
    </button>
  );
};

export default Option;
