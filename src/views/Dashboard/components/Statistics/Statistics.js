import React from 'react';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import { Wrapper } from '../index';
import { ItemBox, SliderBox, T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import * as Styled from './Statistics.styled';
import { ReactComponent as Icon1 } from '../../../../assets/img/icons/icon-szczepienie.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/icons/icon-wirus.svg';
import { StatsItem } from './components';

const Statistics = ({ dateUpdated, vaccinationsBoxes, covidStatsBoxes }) => {
  const { goTo } = useNavigation();

  const renderStatsItem = item => {
    if (not(item)) {
      return null;
    }

    const { value, label, smallSize, withoutPlus } = item;

    return <StatsItem label={label} value={value} smallSize={smallSize} withoutPlus={withoutPlus} />;
  };

  const createBoxItem = item => {
    const { id, heading, firstLine, secondLine } = item;

    return (
      <ItemBox
        key={id}
        onClick={() => null} // TODO: https://titans24.atlassian.net/browse/PSAFE-3442
        heading={heading}
        firstLine={renderStatsItem(firstLine)}
        secondLine={renderStatsItem(secondLine)}
      />
    );
  };

  const renderedVaccinationStats = vaccinationsBoxes.map(createBoxItem);
  const renderedCovidStats = covidStatsBoxes.map(createBoxItem);

  return (
    <Wrapper pdgTop="10">
      <Styled.Title>
        <T i18nKey="dashboard_statistic_1" />
      </Styled.Title>

      <SliderBox
        icon={<Icon1 />}
        title={<T i18nKey="dashboard_statistic_2" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Home)} // TODO: https://titans24.atlassian.net/browse/PSAFE-3442
        items={renderedVaccinationStats}
      />

      <SliderBox
        icon={<Icon2 />}
        title={<T i18nKey="dashboard_statistic_9" variables={{ date: dateUpdated }} />}
        handleHeadClick={() => goTo(Routes.Home)} // TODO: https://titans24.atlassian.net/browse/PSAFE-3443
        items={renderedCovidStats}
      />
    </Wrapper>
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
