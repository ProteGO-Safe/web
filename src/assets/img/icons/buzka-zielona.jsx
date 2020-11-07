import React from 'react';
import styled from 'styled-components';

export const GreenSmile = () => {
  return (
    <Smile
      data-cy="green-smile"
      version="1.1"
      id="green"
      x="0px"
      y="0px"
      viewBox="0 0 132 132"
      style={{ enableBackground: `new 0 0 132 132` }}
      xmlSpace="preserve"
    >
      <circle className="green-st0" cx="65.8" cy="65.9" r="63.7" />
      <path
        className="green-st0"
        d="M97.5,87.1c-5.9,11.5-17.9,19.4-31.7,19.4c-13.8,0-25.8-7.9-31.7-19.4"
      />
      <path
        className="green-st0"
        d="M22.9,52.9c3.7-4.9,9.6-8,16.1-8c6.4,0,12.2,3,15.9,7.7"
      />
      <path
        className="green-st0"
        d="M76.6,52.9c3.7-4.9,9.6-8,16.1-8c6.4,0,12.2,3,15.9,7.7"
      />
    </Smile>
  );
};

const Smile = styled.svg`
  .green-st0 {
    fill: none;
    stroke: #5a842f;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
`;
