export const getStatisticsSummary = state => state.statistics.summary;

export const getVoivodeshipsData = state => {
  return state.statistics.data.voivodeships;
};

export const getLastTwoWeeks = state => propertyName => {
  const values = state.statistics.data.lastDays[propertyName];

  if (!values) {
    return 0;
  }

  const { length } = values;

  if (length <= 14) {
    return values;
  }

  return values.slice(length - 14, length);
};

export const getDistrictsData = state => {
  return state.statistics.data.voivodeships.reduce((total, voivodeship) => {
    return [...total, ...voivodeship.districts];
  }, []);
};

export const getSubscribedDistrictsData = state => {
  const { subscribedDistricts } = state.restrictions;

  return getDistrictsData(state).filter(distric => {
    return subscribedDistricts.find(subscribedDistrict => subscribedDistrict.id === distric.id);
  });
};

export const getUpdateDate = state => state.statistics.data.updated
