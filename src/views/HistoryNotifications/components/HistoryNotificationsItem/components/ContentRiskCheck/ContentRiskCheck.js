import React from 'react';
import { T } from '../../../../../../components/T';
import * as Styled from './ContentRiskCheck.styled';

const ContentRiskCheck = ({ renderItems, exposures }) => (
  <Styled.ContentRiskCheck>
    {renderItems}

    <Styled.Exposures weight={exposures}>
      <T i18nKey={exposures ? 'history_notifications_text_7' : 'history_notifications_text_6'} />
    </Styled.Exposures>
  </Styled.ContentRiskCheck>
);

export default ContentRiskCheck;
