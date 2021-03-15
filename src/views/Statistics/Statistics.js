import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import { useTranslation } from 'react-i18next';
import { Layout, Tabs } from '../../components';
import { slidesStyles, tabsData } from './statistics.constants';
import { SlidesContainer } from './Statistics.styled';

const Statistics = ({ districts, handleBack, lastUpdate, summary, voivodeships }) => {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabs = tabsData.map(({ label }, key) => (
    <Tab key={key} index={key} label={t(label)} onClick={() => setSelectedTab(key)} />
  ));

  const renderViews = tabsData.map(({ component: Component }, key) => (
    // eslint-disable-next-line
    <div key={key} style={slidesStyles}>
      <Component districts={districts} lastUpdate={lastUpdate} summary={summary} voivodeships={voivodeships} />
    </div>
  ));

  return (
    <Layout isNavigation logoText="COVID-19" noPadding onBackClick={handleBack} hideBell>
      <Tabs handleChange={handleChangeTab} value={selectedTab}>
        {renderTabs}
      </Tabs>
      <SlidesContainer>
        <SwipeableViews index={selectedTab} onChangeIndex={setSelectedTab}>
          {renderViews}
        </SwipeableViews>
      </SlidesContainer>
    </Layout>
  );
};

Statistics.defaultProps = {
  handleBack: () => null
};

Statistics.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBack: PropTypes.func,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Statistics;
