const mapToIds = list => list.map(value => value.id);

export const flatDistricts = (
  districts,
  searchedDistrictName,
  subscribedDistricts
) => {
  const subscribedDistrictsIds = mapToIds(subscribedDistricts);
  return districts
    .reduce((obj, item) => {
      const { name: voivodeshipName, districts } = item;
      const items = districts.reduce((obj, item) => {
        const { id: districtId, name: districtName, state } = item;
        if (
          districtName
            .toLowerCase()
            .includes(searchedDistrictName.toLowerCase())
        ) {
          return obj.concat({
            districtId,
            name: `${districtName} (${voivodeshipName})`,
            state,
            isSubscribed: subscribedDistrictsIds.includes(districtId)
          });
        }
        return obj;
      }, []);
      return obj.concat(items);
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const prepareVoivodeshipsWithDistricts = (
  voivodeships,
  subscribedDistricts
) => {
  const subscribedDistrictsIds = mapToIds(subscribedDistricts);
  return voivodeships.map(value => {
    const { districts } = value;
    return {
      ...value,
      districts: districts.map(value => {
        const { id } = value;
        return {
          ...value,
          isSubscribed: subscribedDistrictsIds.includes(id)
        };
      })
    };
  });
};
