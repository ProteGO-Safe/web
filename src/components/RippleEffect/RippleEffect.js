import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../theme/colors';
import * as Styled from './RippleEffect.styled';

export const useRippleClean = (rippleCount, duration, rippleCleanFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        rippleCleanFunction();
        clearTimeout(bounce);
      }, duration * 2);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, rippleCleanFunction]);
};

const RippleEffect = ({ color, duration }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useRippleClean(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = e => {
    const scrollY = window.pageYOffset;
    const wrapper = e.currentTarget.getBoundingClientRect();
    const size = wrapper.width > wrapper.height ? wrapper.width : wrapper.height;
    const x = e.pageX - wrapper.x - size / 2;
    const y = e.pageY - scrollY - wrapper.y - size / 2;
    const newRipple = { x, y, size };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <Styled.Wrapper onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, key) => (
          <Styled.Ripple
            key={key}
            top={ripple.y}
            left={ripple.x}
            width={ripple.size}
            height={ripple.size}
            color={color}
            duration={duration}
          />
        ))}
    </Styled.Wrapper>
  );
};

RippleEffect.defaultProps = {
  color: Color.primaryLight,
  duration: 500
};

RippleEffect.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number
};

export default RippleEffect;
