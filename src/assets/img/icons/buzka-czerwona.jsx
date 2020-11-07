import React from 'react';
import styled from 'styled-components';

export const RedSmile = () => {
  return (
    <Smile
      data-cy="red-smile"
      version="1.1"
      id="red"
      x="0px"
      y="0px"
      viewBox="0 0 132 132"
      style={{ enableBackground: `new 0 0 132 132` }}
      xmlSpace="preserve"
    >
      <path
        className="red-st0"
        d="M123.7,39.2c3.7,8,5.8,17,5.8,26.5c0,34.9-28.3,63.2-63.2,63.2S3.1,100.5,3.1,65.6S31.4,2.5,66.3,2.5
        c8,0,15.6,1.5,22.6,4.2"
      />
      <path
        className="red-st0"
        d="M90.2,100.3c-5.4-7.3-14.1-12.1-23.9-12.1c-9.9,0-18.6,4.8-24,12.3"
      />
      <path
        className="red-st0"
        d="M23.8,57.1c3.7-4.8,9.5-8,16-8c6.4,0,12.1,3,15.8,7.6"
      />
      <path
        className="red-st0"
        d="M77.1,57.1c3.7-4.8,9.5-8,16-8c6.4,0,12.1,3,15.8,7.6"
      />
      <path
        className="red-st0"
        d="M117.7,25.9c0,6.7-5.4,12.1-12.1,12.1c-6.7,0-12.1-5.4-12.1-12.1S105.6,3,105.6,3S117.7,19.2,117.7,25.9z"
      />
    </Smile>
  );
};

const Smile = styled.svg`
  .red-st0 {
    fill: none;
    stroke: #d5233f;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
`;
