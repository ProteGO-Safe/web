import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { Button, FieldSet, Radio, Tooltip, Layout, T } from '../../../../../../components';
import { Title } from '../../../../Diagnosis.styled';

import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../../../constants';

import { questionPropType } from '../../../../prop-types';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';
import { Container } from '../../Form.styled';

const GroupSingle = ({ onBack, onNext, question }) => {
  const { setFieldValue, values } = useFormikContext();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const { items } = question;
    setAnswers([...items]);
  }, [question]);

  if (answers.length === 0) {
    return null;
  }

  const { explanation: tooltip, text } = question;
  const answersIds = answers.map(value => value.id);

  const handleChange = itemId => {
    answersIds.forEach(value => {
      values[value] = false;
    });
    const current = values[itemId];
    setFieldValue(itemId, current === undefined ? true : !current);
  };

  const next = () => {
    const current = [...values[DIAGNOSIS_FORM_FIELDS.QUESTIONS]];
    const selectedAnswers = answersIds.map(value => {
      return {
        id: value,
        choice_id: !values[value] ? VALUE_ABSENT : VALUE_PRESENT
      };
    });
    current.push(selectedAnswers);
    setFieldValue(DIAGNOSIS_FORM_FIELDS.QUESTIONS, current);
    onNext();
  };

  const someSelected = answersIds.some(value => values[value]);

  const back = () => {
    answersIds.forEach(value => {
      setFieldValue(value, undefined);
    });
    onBack();
  };

  return (
    <Layout id="view-diagnosis" onBackClick={back} hideBell>
      <Container>
        <Title explanation={tooltip}>
          <T i18nKey={text} />
          {tooltip && <Tooltip sticky title={<T i18nKey={text} />} content={<T i18nKey={tooltip} />} />}
        </Title>
        <FieldSet>
          {answers.map(item => {
            const { explanation, id, name } = item;
            return (
              <Radio
                key={id}
                checked={values[id]}
                content={
                  explanation && <Tooltip sticky title={<T i18nKey={name} />} content={<T i18nKey={explanation} />} />
                }
                name={id}
                onChange={() => handleChange(id)}
                label={<T i18nKey={name} />}
              />
            );
          })}
        </FieldSet>
        <Button disabled={!someSelected} onClick={next} label={<T i18nKey="button_next" />} />
      </Container>
    </Layout>
  );
};

GroupSingle.propTypes = {
  question: questionPropType
};

export default GroupSingle;
