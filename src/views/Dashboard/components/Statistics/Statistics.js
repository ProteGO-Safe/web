import React from 'react';
import PropTypes from 'prop-types';
import { T, ToggleButton } from '../../../../components';
import { FollowDistrictsSlider } from '../../../index';
import { RiskMonitoring, StatsItem } from './components';
import * as Styled from './Statistics.styled';

const Statistics = ({ covidStats, dateUpdated, districtItems, handleToggleButton, open }) => {
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

        <RiskMonitoring />
      </Styled.Content>

      <Styled.ToggleButtonWrapper>
        <ToggleButton active={open} onClick={handleToggleButton} />
      </Styled.ToggleButtonWrapper>
    </Styled.Statistics>
  );
};

Statistics.propTypes = {
  covidStats: PropTypes.array.isRequired,
  dateUpdated: PropTypes.string.isRequired,
  districtItems: PropTypes.array.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Statistics;
