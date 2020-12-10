import React, { useState } from 'react';
import { DATA } from '../../Dashboard.helpers';
import Statistics from './Statistics';

const StatisticsContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  return (
    <Statistics
      districtItems={[]}
      open={open}
      dateUpdated="04.12.2020"
      handleToggleButton={handleOpen}
      covidStats={DATA.covidStats}
      keyAnalysisToday="8 032"
      keyAnalysisWeek="77 tys."
      keyAnalysisTotal="2, 789 mln"
    />
  );
};

export default StatisticsContainer;
