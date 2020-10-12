const flatDistricts = (districts, searchedDistrictName) => {
  return districts
    .reduce((obj, item) => {
      const { name: voivodeshipName, districts } = item;
      const items = districts.reduce((obj, item) => {
        const {
          id: districtId,
          name: districtName,
          state,
          is_subscribed: isSubscribed
        } = item;
        if (districtName.includes(searchedDistrictName)) {
          return obj.concat({
            districtId,
            name: `${districtName} (${voivodeshipName})`,
            state,
            isSubscribed
          });
        }
        return obj;
      }, []);
      return obj.concat(items);
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
};

export default flatDistricts;
