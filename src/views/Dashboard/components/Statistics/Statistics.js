import React from 'react';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import { ItemBox, SliderBox, T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import { ReactComponent as Icon1 } from '../../../../assets/img/icons/icon-szczepienie.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/icons/icon-wirus.svg';
import { StatsItem } from './components';
import { statisticTypes } from '../../../Statistics/statistics.constants';

const Statistics = ({ dateUpdated, vaccinationsBoxes, covidStatsBoxes }) => {
  const { goTo } = useNavigation();

  const renderStatsItem = item => {
    if (not(item)) {
      return null;
    }

    const { value, label, smallSize, withoutPlus } = item;

    return <StatsItem label={label} value={value} smallSize={smallSize} withoutPlus={withoutPlus} />;
  };

  const createBoxItem = (item, type) => {
    const { id, heading, firstLine, kind, secondLine } = item;

    return (
      <ItemBox
        key={id}
        onClick={() => goTo(Routes.Statistics, { type, kind })}
        heading={heading}
        firstLine={renderStatsItem(firstLine)}
        secondLine={renderStatsItem(secondLine)}
      />
    );
  };

  const renderedVaccinationStats = vaccinationsBoxes.map(value => createBoxItem(value, statisticTypes.VACCINATIONS));
  const renderedCovidStats = covidStatsBoxes.map(value => createBoxItem(value, statisticTypes.COVID));

  return (
    <>
      <SliderBox
        icon={<Icon1 />}
        title={<T i18nKey="dashboard_statistic_2" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Statistics, { type: statisticTypes.VACCINATIONS })}
        items={renderedVaccinationStats}
      />

      <SliderBox
        icon={<Icon2 />}
        title={<T i18nKey="dashboard_statistic_9" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Statistics, { type: statisticTypes.COVID })}
        items={renderedCovidStats}
      />
    </>
  );
};

Statistics.defaultProps = {
  vaccinationsBoxes: [],
  covidStatsBoxes: []
};

Statistics.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  covidStatsBoxes: PropTypes.array,
  dateUpdated: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  vaccinationsBoxes: PropTypes.array
};

export default Statistics;
