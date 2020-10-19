const prepareAllQuestions = allQuestions => {
  return allQuestions.reduce((array, item) => {
    const { text } = item;
    if (text === 'diagnosis_text10' && array.length > 0) {
      return [...array];
    }
    return [...array, item];
  }, []);
};

const prepareRiskTestes = riskTests => {
  return Object.keys(riskTests)
    .map(value => {
      const riskTest = riskTests[value];
      const { allQuestions } = riskTest;
      return {
        [value]: {
          ...riskTest,
          allQuestions: [...prepareAllQuestions(allQuestions)]
        }
      };
    })
    .reduce((obj, item) => {
      return {
        ...obj,
        ...item
      };
    }, {});
};

export default prepareRiskTestes;
