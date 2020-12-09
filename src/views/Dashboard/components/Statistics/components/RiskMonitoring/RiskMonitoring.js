import React from 'react';
import PropTypes from 'prop-types';
import { T, Tooltip } from '../../../../../../components';
import * as Styled from './RiskMonitoring.styled';

const RiskMonitoring = ({ keyAnalysisToday, keyAnalysisWeek, keyAnalysisTotal }) => (
  <Styled.RiskMonitoring>
    <Styled.Title>
      <T i18nKey="statistics_text_6" />
      <Tooltip title={<T i18nKey="upload_data_popup_3" />} content={<T i18nKey="upload_data_popup_4" />} />
    </Styled.Title>
    <Styled.Content>
      <Styled.Left>
        <Styled.Item>
          <T i18nKey="statistics_text_7" />
        </Styled.Item>
        <Styled.Item>
          <T i18nKey="statistics_text_8" />
        </Styled.Item>
        <Styled.Item>
          <T i18nKey="statistics_text_9" />
        </Styled.Item>
      </Styled.Left>

      <Styled.Right>
        <Styled.BoldItem>
          <T i18nKey="statistics_text_10" variables={{ keys: keyAnalysisToday }} />
        </Styled.BoldItem>
        <Styled.BoldItem>
          <T i18nKey="statistics_text_10" variables={{ keys: keyAnalysisWeek }} />
        </Styled.BoldItem>
        <Styled.BoldItem>
          <T i18nKey="statistics_text_10" variables={{ keys: keyAnalysisTotal }} />
        </Styled.BoldItem>
      </Styled.Right>
    </Styled.Content>
  </Styled.RiskMonitoring>
);

RiskMonitoring.propTypes = {
  keyAnalysisToday: PropTypes.string.isRequired,
  keyAnalysisWeek: PropTypes.string.isRequired,
  keyAnalysisTotal: PropTypes.string.isRequired
};

export default RiskMonitoring;
