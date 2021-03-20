import React, { useState } from 'react';
import { Button, Layout, Radio, T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';
import * as Styled from './Stumbler.styled';

const Stumbler = ({ skipStumbler }) => {
  const { goTo } = useNavigation();
  const [confirmed, setConfirmed] = useState(undefined);
  const [showResult, setShowResult] = useState(false);

  const next = () => {
    if (confirmed) {
      skipStumbler();
      return;
    }
    setShowResult(true);
  };

  if (showResult) {
    return (
      <Layout onBackClick={() => setShowResult(false)} fullHeight>
        <Styled.Title>
          <T i18nKey="lab_test_text26" />
        </Styled.Title>

        <Styled.BoxBorder>
          <T i18nKey="lab_test_text27" />
        </Styled.BoxBorder>

        <Styled.Text>
          <T i18nKey="lab_test_text28" />
        </Styled.Text>

        <Styled.ButtonWrapper>
          <Button onClick={() => goTo(Routes.Home)} label={<T i18nKey="button_understand" />} />
        </Styled.ButtonWrapper>
      </Layout>
    );
  }

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
        <Button disabled={confirmed === undefined} onClick={next} label={<T i18nKey="button_next" />} />
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default Stumbler;
