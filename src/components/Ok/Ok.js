import React from 'react';
import PropTypes from 'prop-types';

import './Ok.scss';

const Ok = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="224.022"
    height="202.819"
    viewBox="0 0 224.022 202.819"
    className={`ok ok--${color}`}
  >
    <defs>
      <filter
        id="Path_991"
        x="0"
        y="0"
        width="224.022"
        height="202.819"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_521" data-name="Group 521" transform="translate(-67.989 -318)">
      <g id="Group_511" data-name="Group 511" transform="translate(-6 -17.057)">
        <rect
          id="Rectangle_242"
          data-name="Rectangle 242"
          width="47.443"
          height="18.176"
          transform="matrix(0.766, 0.643, -0.643, 0.766, 142.891, 455.758)"
          fill="#b6cfe4"
        />
        <rect
          id="Rectangle_243"
          data-name="Rectangle 243"
          width="94.449"
          height="18.177"
          transform="matrix(-0.643, 0.766, -0.766, -0.643, 228.261, 427.826)"
          fill="#b6cfe4"
        />
      </g>
      <g
        id="Group_300"
        data-name="Group 300"
        transform="translate(-128.014 259.292)"
        opacity="0.4"
      >
        <g transform="matrix(1, 0, 0, 1, 196, 58.71)" filter="url(#Path_991)">
          <path
            id="Path_991-2"
            data-name="Path 991"
            d="M407.751,213.329,328.92,76.784a24.133,24.133,0,0,0-41.811,0L208.278,213.329a24.122,24.122,0,0,0,20.891,36.2H386.832a24.123,24.123,0,0,0,20.919-36.2ZM395.79,230.563a10.12,10.12,0,0,1-8.958,5.187H229.169a10.36,10.36,0,0,1-8.958-15.533l39.431-68.259,39.4-68.286a10.355,10.355,0,0,1,17.914,0l39.431,68.286,39.4,68.259A10.107,10.107,0,0,1,395.79,230.563Z"
            transform="translate(-196 -58.71)"
            fill="#4b89bc"
          />
        </g>
      </g>
    </g>
  </svg>
);

Ok.defaultProps = {
  color: 'gray'
};

Ok.propTypes = {
  color: PropTypes.oneOf(['gray', 'green', 'red', 'yellow', 'blue'])
};

export default Ok;
