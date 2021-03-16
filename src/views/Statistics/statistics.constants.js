import { Cases, Deaths, DeathsCauses, Doses, Recovered, Tests, Vaccinations, UndesirableReaction } from './views';

export const statisticTypes = {
  COVID: 'COVID',
  VACCINATIONS: 'VACCINATIONS'
};

export const statisticHeadersLabelData = {
  [statisticTypes.COVID]: 'statistics_view_text_32',
  [statisticTypes.VACCINATIONS]: 'statistics_view_text_33'
};

export const statisticTabData = {
  [statisticTypes.COVID]: [
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
  ],
  [statisticTypes.VACCINATIONS]: [
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
    }
  ]
};

export const slidesStyles = {
  slide: {
    padding: 15
  }
};
