import React from 'react';
import PropTypes from 'prop-types';
import { T, ToggleButton } from '../../../../components';
import { FollowDistrictsSlider } from '../../../index';
import { RiskMonitoring, StatsItem } from './components';
import * as Styled from './Statistics.styled';

const Statistics = ({
  covidStats,
  dateUpdated,
  districtItems,
  handleToggleButton,
  keyAnalysisToday,
  keyAnalysisTotal,
  keyAnalysisWeek,
  open
}) => {
  const renderStatsItems = covidStats.map(item => (
    <StatsItem key={item.name} name={item.name} newRecord={item.new} totalRecord={item.total} />
  ));

  return (
    <Styled.Statistics>
      <Styled.Update>
        <T i18nKey="statistics_text_1" variables={{ date: dateUpdated }} />
      </Styled.Update>

      <Styled.ContentStats>
        <Styled.Wrapper>{renderStatsItems}</Styled.Wrapper>

        <Styled.Source>
          <T i18nKey="statistics_text_2" />
        </Styled.Source>
      </Styled.ContentStats>

      <Styled.Content open={open}>
        <FollowDistrictsSlider items={districtItems} />

        <RiskMonitoring
          keyAnalysisToday={keyAnalysisToday}
          keyAnalysisWeek={keyAnalysisWeek}
          keyAnalysisTotal={keyAnalysisTotal}
        />
      </Styled.Content>

      <ToggleButton active={open} onClick={handleToggleButton} />
    </Styled.Statistics>
  );
};

Statistics.propTypes = {
  covidStats: PropTypes.array.isRequired,
  dateUpdated: PropTypes.string.isRequired,
  districtItems: PropTypes.array.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  keyAnalysisToday: PropTypes.string.isRequired,
  keyAnalysisTotal: PropTypes.string.isRequired,
  keyAnalysisWeek: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

export default Statistics;
