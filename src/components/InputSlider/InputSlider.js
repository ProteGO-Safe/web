import React from 'react';
import { ProteGoSlider } from './InputSlider.theme';
import {
  InputSliderContainer,
  InputSliderWrapper,
  Label
} from './InputSlider.styled';

const InputSlider = ({ label, marks, max, min, onChange, step, value }) => {


  return (
    <InputSliderContainer>
      <Label>{label}</Label>
      <InputSliderWrapper>
        <ProteGoSlider
          defaultValue={0}
          step={step}
          marks={marks}
          max={max}
          min={min}
          onChange={onChange}
          value={value}
        />
      </InputSliderWrapper>
    </InputSliderContainer>
  );
};

export default InputSlider;
