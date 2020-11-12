import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import { withTranslation } from 'react-i18next';
import {
  Button,
  Checkbox,
  FieldSet,
  Tooltip,
  Layout
} from '../../../../../../components';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../../../constants';
import { questionPropType } from '../../../../prop-types';
import { Title } from '../../../../Diagnosis.styled';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';
import { Container } from '../../Form.styled';

const GroupMultiple = ({ t, onBack, onNext, question }) => {
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
  const otherId = `${answers[0].id}_other`;
  const answersIds = answers.map(value => value.id);

  const handleChange = itemId => {
    const current = values[itemId];
    setFieldValue(otherId, false);
    setFieldValue(itemId, current === undefined ? true : !current);
  };

  const handleSelectOther = () => {
    answersIds.forEach(value => {
      values[value] = false;
    });
    handleChange(otherId);
  };

  const someSelected =
    answersIds.some(value => values[value]) || values[otherId];

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

  const back = () => {
    answersIds.forEach(value => {
      delete values[value];
    });
    setFieldValue(otherId, undefined);
    onBack();
  };

  return (
    <Layout id="view-diagnosis" onBackClick={back}>
      <Container>
        <Title>{t(text)}</Title>
        <FieldSet>
          {answers.map(item => {
            const { explanation, id, name } = item;
            return (
              <Checkbox
                checked={values[id]}
                content={
                  explanation && (
                    <Tooltip sticky title={t(name)} content={t(explanation)} />
                  )
                }
                key={id}
                label={t(name)}
                name={id}
                onChange={() => handleChange(id)}
              />
            );
          })}
          <Checkbox
            checked={values[otherId]}
            label={t('group_multiple_text1')}
            name={t('group_multiple_text1')}
            onChange={handleSelectOther}
          />
        </FieldSet>
        <Button
          disabled={!someSelected}
          onClick={next}
          label={t('button_next')}
        />
      </Container>
    </Layout>
  );
};

GroupMultiple.propTypes = {
  question: questionPropType
};

export default withTranslation()(GroupMultiple);
