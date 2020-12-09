window.bridgeDataResponse(
  JSON.stringify({
    notifications: [
      {
        id: '4',
        title: 'Nowe obostrzeniach w powiatach',
        content: 'Mazowieckie - zielone, m.Radom - czerwone',
        timestamp: 1606894907
      }
    ],
    riskChecks: [
      {
        id: '1',
        keys: 1345,
        exposures: 0,
        timestamp: 1606804427
      },
      {
        id: '2',
        keys: 1222,
        exposures: 1,
        timestamp: 1606890827
      }
    ],
    exposures: [
      {
        id: '1',
        riskLevel: 3,
        timestamp: 1606887227
      }
    ]
  }),
  90,
  'request-1'
);
