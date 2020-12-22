import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { Button, FieldSet, Radio, Tooltip, Layout, T } from '../../../../../../components';
import { Title } from '../../../../Diagnosis.styled';

import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../../../constants';

import { questionPropType } from '../../../../prop-types';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';
import { Container } from '../../Form.styled';

const Single = ({ onBack, onNext, question }) => {
  const { setFieldValue, values } = useFormikContext();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const { items } = question;
    setAnswers([...items]);
  }, [question]);

  if (answers.length === 0) {
    return null;
  }

  const { explanation, text } = question;
  const oneAnswer = answers[0];
  const { choices, id: answerId } = oneAnswer;

  const handleChange = id => {
    setFieldValue(answerId, id === VALUE_PRESENT);
  };

  const next = () => {
    const current = [...values[DIAGNOSIS_FORM_FIELDS.QUESTIONS]];
    const selectedAnswers = [
      {
        id: answerId,
        choice_id: !values[answerId] ? VALUE_ABSENT : VALUE_PRESENT
      }
    ];
    current.push(selectedAnswers);
    setFieldValue(DIAGNOSIS_FORM_FIELDS.QUESTIONS, current);
    onNext();
  };

  const someSelected = values[answerId] !== undefined;

  const isSelect = id => {
    if (values[answerId] && id === VALUE_PRESENT) {
      return true;
    }
    if (values[answerId] === false && id === VALUE_ABSENT) {
      return true;
    }
    return false;
  };

  const back = () => {
    setFieldValue(answerId, undefined);
    onBack();
  };

  return (
    <Layout id="view-diagnosis" onBackClick={back} hideBell>
      <Container>
        <Title explanation={explanation}>
          <T i18nKey={text} />
          {explanation && <Tooltip sticky title={<T i18nKey={text} />} content={<T i18nKey={explanation} />} />}
        </Title>
        <FieldSet>
          {choices.map(item => {
            const { id, label } = item;
            return (
              <Radio
                key={id}
                checked={isSelect(id)}
                name={id}
                onChange={() => handleChange(id)}
                label={<T i18nKey={label} />}
              />
            );
          })}
        </FieldSet>
        <Button disabled={!someSelected} onClick={next} label={<T i18nKey="button_next" />} />
      </Container>
    </Layout>
  );
};

Single.propTypes = {
  question: questionPropType
};

export default Single;
