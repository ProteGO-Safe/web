import { Cases, Deaths, DeathsCauses, Doses, Recovered, Tests, Vaccinations, UndesirableReaction } from './views';
import { STATISTIC_KIND } from '../../constants';

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
      kind: STATISTIC_KIND.CASES,
      label: 'statistics_view_text_3'
    },
    {
      component: Recovered,
      kind: STATISTIC_KIND.RECOVERED,
      label: 'statistics_view_text_4'
    },
    {
      component: Deaths,
      kind: STATISTIC_KIND.DEATHS,
      label: 'statistics_view_text_5'
    },
    {
      component: DeathsCauses,
      kind: STATISTIC_KIND.DEATHS_CAUSES,
      label: 'statistics_view_text_6'
    },
    {
      component: Tests,
      kind: STATISTIC_KIND.TESTS,
      label: 'statistics_view_text_7'
    }
  ],
  [statisticTypes.VACCINATIONS]: [
    {
      component: Vaccinations,
      kind: STATISTIC_KIND.VACCINATIONS,
      label: 'statistics_view_text_20'
    },
    {
      component: Doses,
      kind: STATISTIC_KIND.DOSES,
      label: 'statistics_view_text_21'
    },
    {
      component: UndesirableReaction,
      kind: STATISTIC_KIND.UNDESIRABLE_REACTION,
      label: 'statistics_view_text_22'
    }
  ]
};

export const slidesStyles = {
  slide: {
    padding: 15
  }
};
