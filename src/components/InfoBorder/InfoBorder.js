import React from 'react';

import { InfoBorderContainer } from './InfoBorder.styled';

const InfoBorder = ({ content, color, items }) => {
  const renderItem = items.map(item => <li key={item}>{item}</li>);

  return (
    <InfoBorderContainer color={color}>
      <p className="p1">
        {content}
        &nbsp;Szczególnie niepokojące objawy:
      </p>
      <ul>{renderItem}</ul>
    </InfoBorderContainer>
  );
};

export default InfoBorder;
