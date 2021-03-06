import React from 'react';
import PropTypes from 'prop-types';
import { T, Tooltip } from '../../../../../../components';
import * as Styled from './RiskMonitoring.styled';
import { prepareKeyTranslation } from '../../../../../../utils/number';

const RiskMonitoring = ({ keyAnalysisToday, keyAnalysisWeek, keyAnalysisTotal }) => {
  const keyTranslationLabels = {
    number1: 'statistics_text_11',
    number2to4: 'statistics_text_12',
    number5to9999: 'statistics_text_10',
    number10000to999999: 'statistics_text_13',
    number1000000toInf: 'statistics_text_14'
  };

  return (
    <Styled.RiskMonitoring>
      <Styled.Title>
        <T i18nKey="statistics_text_6" />
        <Tooltip title={<T i18nKey="upload_data_popup_3" />} content={<T i18nKey="upload_data_popup_4" />} />
      </Styled.Title>
      <Styled.Content>
        <Styled.Item>
          <Styled.Left>
            <T i18nKey="statistics_text_7" />
          </Styled.Left>
          <Styled.Right>
            {prepareKeyTranslation({ number: keyAnalysisToday, labels: keyTranslationLabels })}
          </Styled.Right>
        </Styled.Item>

        <Styled.Item>
          <Styled.Left>
            <T i18nKey="statistics_text_8" />
          </Styled.Left>
          <Styled.Right>
            {prepareKeyTranslation({ number: keyAnalysisWeek, labels: keyTranslationLabels })}
          </Styled.Right>
        </Styled.Item>

        <Styled.Item>
          <Styled.Left>
            <T i18nKey="statistics_text_9" />
          </Styled.Left>
          <Styled.Right>
            {prepareKeyTranslation({ number: keyAnalysisTotal, labels: keyTranslationLabels })}
          </Styled.Right>
        </Styled.Item>
      </Styled.Content>
    </Styled.RiskMonitoring>
  );
};

RiskMonitoring.propTypes = {
  keyAnalysisToday: PropTypes.number.isRequired,
  keyAnalysisWeek: PropTypes.number.isRequired,
  keyAnalysisTotal: PropTypes.number.isRequired
};

export default RiskMonitoring;
