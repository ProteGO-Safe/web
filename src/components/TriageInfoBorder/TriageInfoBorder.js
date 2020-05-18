import React from 'react';

import { InfoBorderContainer } from './TriageInfoBorder.styled';
import useTriage from '../../hooks/useTriage';

const TriageInfoBorder = () => {
  const { isDangerous, color, description, serious = [] } = useTriage();

  const renderItem = serious
    .map(_obj => _obj.common_name)
    .map(item => <li key={item}>{item}</li>);

  return (
    isDangerous && (
      <InfoBorderContainer color={color}>
        <p className="p1">
          {description}
          &nbsp;Szczególnie niepokojące objawy:
        </p>
        <ul>{renderItem}</ul>
      </InfoBorderContainer>
    )
  );
};

export default TriageInfoBorder;
