window.bridgeDataResponse(
  JSON.stringify({
    covidStats: {
      newCases: 123,
      totalCases: 125000,
      newDeaths: 15,
      totalDeaths: 2000,
      newRecovered: 200,
      totalRecovered: 14000,
      newVaccinations: 20000,
      totalVaccinations: 450500,
      newVaccinationsDose1: 19000,
      totalVaccinationsDose1: 400500,
      newVaccinationsDose2: 1000,
      totalVaccinationsDose2: 50000,
      updated: 123234234
    }
  }),
  102,
  'request-1'
);

window.onBridgeData(
  102,
  JSON.stringify({
    covidStats: {
      newCases: 123,
      totalCases: 125000,
      newDeaths: 15,
      totalDeaths: 2000,
      newRecovered: 200,
      totalRecovered: 14000,
      newVaccinations: 20000,
      totalVaccinations: 450500,
      newVaccinationsDose1: 19000,
      totalVaccinationsDose1: 400500,
      newVaccinationsDose2: 1000,
      totalVaccinationsDose2: 50000,
      updated: 123234234
    }
  })
);
