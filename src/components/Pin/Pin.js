import React from 'react';
import PinInput from 'react-pin-input';
import * as Styled from './Pin.styled';
import { Color } from '../../theme/colors';

const Pin = ({
  initialValue,
  length = 6,
  onChange,
  pinInputRef = undefined,
  title
}) => {
  return (
    <Styled.Pin>
      <Styled.PinTitle>{title}</Styled.PinTitle>
      <PinInput
        disabled={false}
        initialValue={initialValue}
        inputStyle={{ borderColor: Color.lightGray }}
        length={length}
        onChange={onChange}
        ref={pinInputRef}
        type="text"
      />
    </Styled.Pin>
  );
};

export default Pin;
