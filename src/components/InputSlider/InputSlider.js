import React from 'react';
import { withTranslation } from 'react-i18next';
import { ProteGoSlider } from './InputSlider.theme';
import {
  InputSliderContainer,
  InputSliderWrapper,
  Label
} from './InputSlider.styled';

const InputSlider = ({ t, label, marks, max, min, onChange, step, value }) => {
  return (
    <InputSliderContainer>
      <Label>{t(label)}</Label>
      <InputSliderWrapper>
        <ProteGoSlider
          defaultValue={value || 0}
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

export default withTranslation()(InputSlider);
