import React from 'react';
import PropTypes from 'prop-types';

import './Warning.scss';

const Warning = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="224.022"
    height="202.819"
    viewBox="0 0 224.022 202.819"
    className={`warning warning--${color}`}
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
    <g
      id="Group_299"
      data-name="Group 299"
      transform="translate(-196.004 -58.708)"
      opacity="0.5"
    >
      <path
        id="Path_990"
        data-name="Path 990"
        d="M302.019,182.941c2.125,4.649,9.836,4.678,11.991,0,3.571-7.965,5.3-48.671,5.3-61.426,0-4.167-1.077-7.4-3.259-9.724a11.134,11.134,0,0,0-16.1,0c-2.154,2.325-3.231,5.557-3.231,9.724,0,12.755,1.7,53.433,5.3,61.426Z"
      />
      <g transform="matrix(1, 0, 0, 1, 196, 58.71)" filter="url(#Path_991)">
        <path
          id="Path_991-2"
          data-name="Path 991"
          d="M407.751,213.329,328.92,76.784a24.133,24.133,0,0,0-41.811,0L208.278,213.329a24.122,24.122,0,0,0,20.891,36.2H386.832a24.123,24.123,0,0,0,20.919-36.2ZM395.79,230.563a10.12,10.12,0,0,1-8.958,5.187H229.169a10.36,10.36,0,0,1-8.958-15.533l39.431-68.259,39.4-68.286a10.355,10.355,0,0,1,17.914,0l39.431,68.286,39.4,68.259A10.107,10.107,0,0,1,395.79,230.563Z"
          transform="translate(-196 -58.71)"
        />
      </g>
      <path
        id="Path_992"
        data-name="Path 992"
        d="M320.784,210.693A12.77,12.77,0,1,0,308,223.477a12.786,12.786,0,0,0,12.784-12.784Z"
      />
    </g>
  </svg>
);

Warning.defaultProps = {
  color: 'gray'
};

Warning.propTypes = {
  color: PropTypes.oneOf(['gray', 'green', 'red', 'yellow', 'orange'])
};

export default Warning;
