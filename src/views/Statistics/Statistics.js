import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import { useTranslation } from 'react-i18next';
import { DataUpdate, Layout, T, Tabs } from '../../components';
import { slidesStyles } from './statistics.constants';
import { SlidesContainer } from './Statistics.styled';

const Statistics = ({
  districts,
  existsDetailsStatistics,
  headerLabel,
  initTabIndex,
  lastUpdate,
  summary,
  tabsData,
  voivodeships
}) => {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState(initTabIndex);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabs = tabsData.map(({ label }, key) => (
    <Tab key={key} index={key} label={t(label)} onClick={() => setSelectedTab(key)} />
  ));

  const renderViewsContent = Component => {
    if (existsDetailsStatistics) {
      return <Component districts={districts} lastUpdate={lastUpdate} summary={summary} voivodeships={voivodeships} />;
    }
    return <DataUpdate mrgT={32} />;
  };

  const renderedViews = tabsData.map(({ component }, key) => (
    // eslint-disable-next-line
    <div key={key} style={slidesStyles}>
      {renderViewsContent(component)}
    </div>
  ));

  return (
    <Layout isNavigation logoText={<T i18nKey={headerLabel} />} noPadding hideBell>
      <Tabs handleChange={handleChangeTab} value={selectedTab}>
        {renderTabs}
      </Tabs>
      <SlidesContainer>
        <SwipeableViews index={selectedTab} onChangeIndex={setSelectedTab}>
          {renderedViews}
        </SwipeableViews>
      </SlidesContainer>
    </Layout>
  );
};

Statistics.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerLabel: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  tabsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Statistics;
