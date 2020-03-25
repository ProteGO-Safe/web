import React from 'react';
import './Instruction.scss';

const Instruction = ({ steps }) => {
  const renderSteps = steps.map(step => {
    const { icon, key, text } = step;
    return (
      <div className="instruction__step" key={key}>
        <div className="instruction__icon">
          <img alt="Ikona" src={icon} />
        </div>
        <div className="instruction__content">
          <div className="instruction__number">
            <p className="text-bold medium">{key}.</p>
          </div>
          <div className="instruction__text">
            <p className="text-bold medium">{text}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="instruction">{renderSteps}</div>;
};

export default Instruction;
