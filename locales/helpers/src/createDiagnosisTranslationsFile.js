import fs from 'fs';

const LABEL_PREFIX = 'diagnosis';

const translatedPhases = {};
let translationCounter = 1;

const stepsJsonFile = fs.readFileSync(
  './src/services/diagnosisLogic/steps.json',
  { encoding: 'utf-8' }
);

const steps = JSON.parse(stepsJsonFile);

const generateTextTranslationLabel = text => {
  const label = `${LABEL_PREFIX}_text${translationCounter}`;
  translatedPhases[label] = text;
  translationCounter++;
  return label;
};

const prepareChoices = choices =>
  choices.map(choice => {
    const { id } = choice;
    const label = id === 'present' ? 'yes' : 'no';
    return { ...choice, label };
  });

const translatedSteps = steps.map(item => {
  const { question } = item;
  const { text, items } = question;
  const translatedItems = items.map(item => {
    const { choices, name } = item;
    return {
      ...item,
      explanation: null,
      name: generateTextTranslationLabel(name),
      choices: [...prepareChoices(choices)]
    };
  });

  return {
    ...item,
    question: {
      ...question,
      explanation: null,
      text: generateTextTranslationLabel(text),
      items: [...translatedItems]
    }
  };
});

console.log(JSON.stringify(translatedPhases));
console.log('-----------');
console.log(JSON.stringify(translatedSteps));
