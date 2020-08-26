import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { withTranslation } from 'react-i18next';
import { Button, FieldSet, Header, Radio } from '../../../../../../components';
import { Title } from '../../../../Diagnosis.styled';

import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../../../constants';

import { questionPropType } from '../../../../prop-types';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';
import { Container } from '../../Form.styled';

const GroupSingle = ({ t, onBack, onNext, question }) => {
  const { setFieldValue, values } = useFormikContext();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const { items } = question;
    setAnswers([...items]);
  }, [question]);

  if (answers.length === 0) {
    return null;
  }

  const { text } = question;
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
    <>
      <Header onBackClick={back} />
      <Container>
        <Title>{t(text)}</Title>
        <FieldSet>
          {answers.map(item => {
            const { id, name } = item;
            return (
              <Radio
                key={id}
                checked={values[id]}
                name={id}
                onChange={() => handleChange(id)}
                label={t(name)}
              />
            );
          })}
        </FieldSet>
        <Button
          disabled={!someSelected}
          onClick={next}
          label={t('button_next')}
        />
      </Container>
    </>
  );
};

GroupSingle.propTypes = {
  question: questionPropType
};

export default withTranslation()(GroupSingle);
