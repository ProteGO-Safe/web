import React from 'react';
import PropTypes from 'prop-types';

import './Warning.scss';

const Warning = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 338.531 338.531"
    xmlSpace="preserve"
    width="512px"
    height="512px"
    className={`warning warning--${color}`}
  >
    <g>
      <g>
        <g>
          <path
            d="M333.413,275.866l-139.2-239.6c-6.4-10.8-15.6-17.2-25.2-17.2c-10,0-19.2,6.4-25.2,17.2l-138.4,239.6    c-6.4,10.8-7.2,22-2,30.4c4.8,8.4,14.8,13.2,27.6,13.2h276.8c12.4,0,22.4-4.8,27.6-13.2    C340.213,297.866,339.413,286.666,333.413,275.866z M320.213,297.866c-2,3.2-6.4,4.8-12.8,4.8h-276.8c-6.4,0-11.2-2-12.8-4.8    c-2-3.2-1.2-8,2-13.6l138.4-239.6c3.2-5.6,7.2-8.8,10.8-8.8c3.6,0,7.6,3.2,10.8,8.8l138.4,239.6    C321.413,289.866,322.213,294.666,320.213,297.866z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M169.013,97.866c-4.8,0-8.4,3.6-8.4,8.4v111.2c0,4.8,3.6,8.4,8.4,8.4s8.4-3.6,8.4-8.4v-111.2    C177.413,101.466,173.813,97.866,169.013,97.866z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
        </g>
      </g>
      <g>
        <g>
          <circle
            cx="169.013"
            cy="259.466"
            r="14.8"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
        </g>
      </g>
    </g>
  </svg>
);

Warning.defaultProps = {
  color: 'gray'
};

Warning.propTypes = {
  color: PropTypes.oneOf(['gray', 'green', 'red', 'yellow'])
};

export default Warning;
