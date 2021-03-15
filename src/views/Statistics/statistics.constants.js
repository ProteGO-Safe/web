import { Cases, Deaths, DeathsCauses, Doses, Recovered, Tests, UndesirableReaction, Vaccinations } from './views';

export const tabsData = [
  {
    component: Vaccinations,
    label: 'statistics_view_text_20'
  },
  {
    component: Doses,
    label: 'statistics_view_text_21'
  },
  {
    component: UndesirableReaction,
    label: 'statistics_view_text_22'
  },
  {
    component: Cases,
    label: 'statistics_view_text_3'
  },
  {
    component: Recovered,
    label: 'statistics_view_text_4'
  },
  {
    component: Deaths,
    label: 'statistics_view_text_5'
  },
  {
    component: DeathsCauses,
    label: 'statistics_view_text_6'
  },
  {
    component: Tests,
    label: 'statistics_view_text_7'
  }
];

export const slidesStyles = {
  slide: {
    padding: 15
  }
};
