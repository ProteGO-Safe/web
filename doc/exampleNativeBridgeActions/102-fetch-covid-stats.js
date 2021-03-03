window.bridgeDataResponse(
  JSON.stringify({
    updated: 123133131,
    newCases: 2121,
    newDeaths: 3214,
    newRecovered: 432432,
    newDeathsWithComorbidities: 432432,
    newDeathsWithoutComorbidities: 323334,
    newTests: 43234,
    newVaccinations: 423434,
    newVaccinationsDose1: 434322,
    newVaccinationsDose2: 42,
    newUndesirableReaction: 434,
    totalCases: 0,
    totalDeaths: 4343,
    totalRecovered: 2,
    totalVaccinations: 1,
    totalVaccinationsDose1: 4,
    totalVaccinationsDose2: 3,
    totalUndesirableReaction: 4
  }),
  102,
  'request-1'
);

window.onBridgeData(
  102,
  JSON.stringify({
    updated: 123133131,
    newCases: 2121,
    newDeaths: 3214,
    newRecovered: 432432,
    newDeathsWithComorbidities: 432432,
    newDeathsWithoutComorbidities: 323334,
    newTests: 43234,
    newVaccinations: 423434,
    newVaccinationsDose1: 434322,
    newVaccinationsDose2: 42,
    newUndesirableReaction: 434,
    totalCases: 0,
    totalDeaths: 4343,
    totalRecovered: 2,
    totalVaccinations: 1,
    totalVaccinationsDose1: 4,
    totalVaccinationsDose2: 3,
    totalUndesirableReaction: 4
  })
);
