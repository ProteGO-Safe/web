import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../index';
import { T, SliderBox } from '../../../../components';
import { ItemBox } from '../../../../components/SliderBox/components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import * as Styled from './Statistics.styled';

// Icons
import { ReactComponent as Icon1 } from '../../../../assets/img/icons/icon-szczepienie.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/icons/icon-wirus.svg';

// Helpers
export const STATS_VACCINATION = [
  {
    id: '1',
    heading: 'dashboard_statistic_5',
    dailyStats: '+ 49 043',
    totalStats: '644 999'
  },
  {
    id: '2',
    heading: 'dashboard_statistic_6',
    dailyStats: '+ 49 043',
    totalStats: '644 999'
  },
  {
    id: '3',
    heading: 'dashboard_statistic_7',
    dailyStats: '0',
    totalStats: '0'
  },
  {
    id: '4',
    heading: 'dashboard_statistic_8',
    dailyStats: '+ 6',
    totalStats: '926'
  }
];

export const STATS_COVID = [
  {
    id: '1',
    heading: 'dashboard_statistic_10',
    dailyStats: '+ 7 152',
    totalStats: '1 457 755'
  },
  {
    id: '2',
    heading: 'dashboard_statistic_11',
    dailyStats: '6 423',
    totalStats: '1 204 2010'
  },
  {
    id: '3',
    heading: 'dashboard_statistic_12',
    dailyStats: '+ 419',
    totalStats: '34 561'
  },
  {
    id: '4',
    heading: 'dashboard_statistic_13',
    deathsCovidStats: '19',
    deathsOtherStats: '400'
  },
  {
    id: '5',
    heading: 'dashboard_statistic_14',
    dailyStats: '47 141'
  }
];

const Statistics = ({ dateUpdated }) => {
  const { goTo } = useNavigation();

  const renderVaccinationStats = STATS_VACCINATION.map(item => {
    const { heading, dailyStats, totalStats, id } = item;

    return (
      <ItemBox
        key={id}
        onClick={() => null} // TODO: https://titans24.atlassian.net/browse/PSAFE-3442
        heading={<T i18nKey={heading} />}
        firstStats={dailyStats && <T i18nKey="dashboard_statistic_3" variables={{ number: dailyStats }} />}
        secondStats={totalStats && <T i18nKey="dashboard_statistic_4" variables={{ number: totalStats }} />}
      />
    );
  });

  const renderCovidStats = STATS_COVID.map(item => {
    const { heading, dailyStats, totalStats, id, deathsCovidStats, deathsOtherStats } = item;

    return (
      <ItemBox
        key={id}
        onClick={() => null} // TODO: https://titans24.atlassian.net/browse/PSAFE-3443
        heading={<T i18nKey={heading} />}
        firstStats={
          (dailyStats && <T i18nKey="dashboard_statistic_3" variables={{ number: dailyStats }} />) ||
          (deathsCovidStats && <T i18nKey="dashboard_statistic_15" variables={{ number: deathsCovidStats }} />)
        }
        secondStats={
          (totalStats && <T i18nKey="dashboard_statistic_4" variables={{ number: totalStats }} />) ||
          (deathsOtherStats && <T i18nKey="dashboard_statistic_16" variables={{ number: deathsOtherStats }} />)
        }
      />
    );
  });

  return (
    <Wrapper pdgTop="10">
      <Styled.Title>
        <T i18nKey="dashboard_statistic_1" />
      </Styled.Title>

      <SliderBox
        icon={<Icon1 />}
        title={<T i18nKey="dashboard_statistic_2" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Home)} // TODO: https://titans24.atlassian.net/browse/PSAFE-3442
        items={renderVaccinationStats}
      />

      <SliderBox
        icon={<Icon2 />}
        title={<T i18nKey="dashboard_statistic_9" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Home)} // TODO: https://titans24.atlassian.net/browse/PSAFE-3443
        items={renderCovidStats}
      />
    </Wrapper>
  );
};

Statistics.propTypes = {
  dateUpdated: PropTypes.string.isRequired
};

export default Statistics;
