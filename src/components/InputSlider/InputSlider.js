import React from 'react';
import { withTranslation } from 'react-i18next';
import { ProteGoSlider } from './InputSlider.theme';
import { InputSliderContainer, InputSliderWrapper, Label } from './InputSlider.styled';
import { T } from '../index';

const InputSlider = ({ label, marks, max, min, onChange, step, value }) => {
  const translatedMarks = marks.map(_value => {
    const { label: _label } = _value;
    return {
      ..._value,
      label: <T i18nKey={_label} />
    };
  });

  return (
    <InputSliderContainer>
      <Label>{label}</Label>
      <InputSliderWrapper>
        <ProteGoSlider
          defaultValue={value || 0}
          step={step}
          marks={translatedMarks}
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
