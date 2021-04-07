import React, { useState } from 'react';
import { Button, Checkbox, Layout, T } from '../../../../../../components';
import * as Styled from './Step3.styled';

const Step3 = ({ answers, back, next }) => {
  const [stepAnswers, setStepAnswers] = useState(answers[3] || {});

  const questionsLabels = [
    'lab_test_text41',
    'lab_test_text42',
    'lab_test_text43',
    'lab_test_text44',
    'lab_test_text45',
    'lab_test_text46',
    'lab_test_text47',
    'lab_test_text48',
    'lab_test_text49',
    'lab_test_text50',
    'lab_test_text51',
    'lab_test_text52'
  ];

  const onChange = answer => {
    setStepAnswers(prev => {
      const current = prev[answer];
      if (answer === 'none') {
        return {
          [answer]: !current
        };
      }
      return {
        ...prev,
        [answer]: !current,
        none: false
      };
    });
  };

  return (
    <Layout onBackClick={back} fullHeight>
      <Styled.Title>
        <T i18nKey="lab_test_text40" />
      </Styled.Title>

      <Styled.ContentFields>
        {questionsLabels.map((value, index) => {
          return (
            <Checkbox
              key={value}
              checked={stepAnswers[index + 1]}
              name={value}
              onChange={() => onChange(index + 1)}
              label={<T i18nKey={value} />}
            />
          );
        })}
        <Checkbox
          key="none"
          checked={stepAnswers.none}
          name="none"
          onChange={() => onChange('none')}
          label={<T i18nKey="lab_test_text39" />}
        />
      </Styled.ContentFields>

      <Styled.ButtonWrapper>
        <Button
          disabled={Object.values(stepAnswers).filter(value => value).length === 0}
          onClick={() => next(stepAnswers)}
          label={<T i18nKey="button_next" />}
        />
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default Step3;
