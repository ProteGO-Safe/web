import React from 'react';
import styled from 'styled-components';

export const YellowSmile = () => {
  return (
    <Smile
      version="1.1"
      id="yellow"
      x="0px"
      y="0px"
      viewBox="0 0 132 132"
      style={{ enableBackground: `new 0 0 132 132` }}
      xmlSpace="preserve"
    >
      <circle className="yellow-st0" cx="66.3" cy="65.5" r="63.7" />
      <path
        className="yellow-st0"
        d="M23.5,52.5c3.7-4.9,9.6-8,16.1-8c6.4,0,12.2,3,15.9,7.7"
      />
      <path
        className="yellow-st0"
        d="M77.1,52.5c3.7-4.9,9.6-8,16.1-8c6.4,0,12.2,3,15.9,7.7"
      />
      <line className="yellow-st0" x1="38.4" y1="95.1" x2="94.2" y2="95.1" />
    </Smile>
  );
};

const Smile = styled.svg`
  .yellow-st0 {
    fill: none;
    stroke: #cc4700;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
`;
