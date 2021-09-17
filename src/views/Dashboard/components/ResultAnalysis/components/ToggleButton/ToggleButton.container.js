import React from 'react';
import { and, not, or } from 'ramda';
import { ToggleButton } from '../../../../../../components';
import useTriage from '../../../../../../hooks/useTriage';
import { Color } from '../../../../../../theme/colors';

const ToggleButtonContainer = ({ active, onClick }) => {
  const { isTriageEnMiddle, isTriageEnHigh } = useTriage();

  const color = (() => {
    if (and(or(isTriageEnMiddle, isTriageEnHigh), not(active))) {
      return Color.white;
    }

    return Color.primary;
  })();

  return <ToggleButton onClick={onClick} color={color} active={active} />;
};

export default ToggleButtonContainer;
