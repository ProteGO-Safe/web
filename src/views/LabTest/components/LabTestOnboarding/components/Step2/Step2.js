import React, { useState } from 'react';
import { Button, Checkbox, Layout, T } from '../../../../../../components';
import * as Styled from './Step2.styled';

const Step2 = ({ answers, back, next }) => {
  const [stepAnswers, setStepAnswers] = useState(answers[2] || {});

  const questionsLabels = [
    'lab_test_text30',
    'lab_test_text31',
    'lab_test_text32',
    'lab_test_text33',
    'lab_test_text34',
    'lab_test_text35',
    'lab_test_text36',
    'lab_test_text37',
    'lab_test_text38'
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
        <T i18nKey="lab_test_text29" />
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

export default Step2;
