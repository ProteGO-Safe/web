import React, { useState } from 'react';
import { Button, Layout, Radio, T } from '../../../../../../components';
import * as Styled from './Step1.styled';

const Step1 = ({ answers, next }) => {
  const [confirmed, setConfirmed] = useState(answers[1]);

  return (
    <Layout fullHeight>
      <Styled.Title>
        <T i18nKey="lab_test_text25" />
      </Styled.Title>

      <Styled.ContentFields>
        <Radio
          key="yes"
          checked={confirmed === true}
          name="yes"
          onChange={() => setConfirmed(true)}
          label={<T i18nKey="yes" />}
        />
        <Radio
          key="no"
          checked={confirmed === false}
          name="no"
          onChange={() => setConfirmed(false)}
          label={<T i18nKey="no" />}
        />
      </Styled.ContentFields>

      <Styled.ButtonWrapper>
        <Button
          disabled={confirmed === undefined}
          onClick={() => next(confirmed)}
          label={<T i18nKey="button_next" />}
        />
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default Step1;
