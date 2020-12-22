import fs from 'fs';
import findInDir from './findInDir/index.js';

const excludedComponent = ['App'];

const translatedJsonContent = {};

const prepareContent = fileName => {
  const data = fs.readFileSync(fileName, { encoding: 'utf-8' });
  const componentName = fileName
    .split('/')
    .pop()
    .split('.')[0];
  if (excludedComponent.includes(componentName)) {
    return;
  }
  let newData = '';
  let indexHelper = 0;
  let indexHelper2 = 1;
  let componentTranslated = false;
  const lastIndexOfreturn = data.lastIndexOf('return');
  for (let i = lastIndexOfreturn; i < data.length; i++) {
    // newData += data[i];
    if (data[i] === '>' && data[i - 1] !== '=') {
      let end;
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] === '<') {
          end = j;
          break;
        }
      }
      if (end) {
        const textBetweenAngleBrackets = data
          .substring(i + 1, end)
          .trim()
          .replace(/\n|\s{2,}/g, '');
        if (
          textBetweenAngleBrackets &&
          textBetweenAngleBrackets !== '.' &&
          textBetweenAngleBrackets !== ';' &&
          textBetweenAngleBrackets !== ':' &&
          textBetweenAngleBrackets !== ':' &&
          textBetweenAngleBrackets !== 'COVID-19' &&
          textBetweenAngleBrackets !== 'WHO' &&
          textBetweenAngleBrackets !== 'GPL-3.0' &&
          !textBetweenAngleBrackets.startsWith('§') &&
          !textBetweenAngleBrackets.startsWith('{') &&
          !textBetweenAngleBrackets.startsWith('}') &&
          !textBetweenAngleBrackets.startsWith(')') &&
          !textBetweenAngleBrackets.startsWith('https') &&
          !textBetweenAngleBrackets.includes('&&')
        ) {
          const translateKey = `${componentName
            .split(/(?=[A-Z])/)
            .join('_')
            .toLowerCase()}_text${indexHelper2}`;
          newData += data.substring(indexHelper, i + 1);
          if (textBetweenAngleBrackets.endsWith("{' '}")) {
            translatedJsonContent[
              translateKey
            ] = textBetweenAngleBrackets.replace("{' '}", '');
            newData += `{t('${translateKey}')}{' '}`;

          } else {
            translatedJsonContent[translateKey] = textBetweenAngleBrackets;
            newData += `{t('${translateKey}')}`;
          }
          indexHelper2++;
          indexHelper = end;
          componentTranslated = true;
        }
      }
    }
    if (i === data.length - 1) {
      newData += data.substring(indexHelper, i);
      newData += '\n';
    }
  }

  if (componentTranslated) {
    const startOfComponentBody =
      newData.indexOf(`const ${componentName} = (`) + componentName.length + 10;
    if (newData[startOfComponentBody] === '{') {
      newData = `${newData.slice(
        0,
        startOfComponentBody + 1
      )}t, ${newData.slice(startOfComponentBody + 1)}`;
    }
    if (newData[startOfComponentBody] === ')') {
      newData = `${newData.slice(0, startOfComponentBody)}{t}${newData.slice(
        startOfComponentBody
      )}`;
    }

    newData = newData.replace(
      `from 'react';`,
      `from 'react';\nimport { withTranslation } from 'react-i18next';`
    );
    newData = newData.replace(
      `export default ${componentName}`,
      `export default withTranslation()(${componentName})`
    );
  }

  return newData;
};

findInDir('./src/', /\.js$/)
  .filter(fileName => !fileName.endsWith('.styled.js'))
  .forEach(fileName => {
    const preparedContent = prepareContent(fileName);
    fs.writeFile(fileName, preparedContent, err => {
      if (err) throw err;
    });
  });

fs.writeFile(
  './locales/pl1.json',
  JSON.stringify(translatedJsonContent),
  err => {
    if (err) throw err;
  }
);
