import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { T, ToggleButton } from '../../../../components';
import { FollowDistrictsSlider } from '../../../index';
import { RiskMonitoring, StatsItem } from './components';
import { Wrapper } from '../index';
import * as Styled from './Statistics.styled';

const Statistics = ({
  covidStats = [],
  dateUpdated,
  districtItems,
  existsCovidStatsItems,
  existsVaccinationStatsItems,
  handleToggleButton,
  open,
  vaccinationStats = []
}) => {
  const renderVaccinationStatsItems = useMemo(
    () =>
      vaccinationStats.map(item => (
        <StatsItem key={item.name} name={item.name} newRecord={item.news} totalRecord={item.totals} />
      )),
    [vaccinationStats]
  );

  const renderCovidStatsItems = useMemo(
    () =>
      covidStats.map(item => (
        <StatsItem key={item.name} name={item.name} newRecord={item.news} totalRecord={item.totals} />
      )),
    [covidStats]
  );

  return (
    <Wrapper>
      <Styled.Statistics>
        {existsVaccinationStatsItems && (
          <Styled.ContentStats>
            <Styled.Update>
              <T i18nKey="statistics_text_15" variables={{ date: dateUpdated }} />
            </Styled.Update>

            <Styled.Wrapper mrgBottom>{renderVaccinationStatsItems}</Styled.Wrapper>
          </Styled.ContentStats>
        )}

        {existsCovidStatsItems && (
          <Styled.ContentStats>
            <Styled.Update>
              <T i18nKey="statistics_text_1" variables={{ date: dateUpdated }} />
            </Styled.Update>

            <Styled.Wrapper>{renderCovidStatsItems}</Styled.Wrapper>

            <Styled.Source>
              <T i18nKey="statistics_text_2" />
            </Styled.Source>
          </Styled.ContentStats>
        )}

        <Styled.Content open={open} existsStatsItems={existsCovidStatsItems || existsVaccinationStatsItems}>
          <FollowDistrictsSlider items={districtItems} />

          <RiskMonitoring />
        </Styled.Content>

        <Styled.ToggleButtonWrapper>
          <ToggleButton active={open} onClick={handleToggleButton} />
        </Styled.ToggleButtonWrapper>
      </Styled.Statistics>
    </Wrapper>
  );
};

Statistics.propTypes = {
  covidStats: PropTypes.array.isRequired,
  dateUpdated: PropTypes.string.isRequired,
  existsCovidStatsItems: PropTypes.bool.isRequired,
  existsVaccinationStatsItems: PropTypes.bool.isRequired,
  districtItems: PropTypes.array.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  vaccinationStats: PropTypes.array.isRequired
};

export default Statistics;
