import React, { useState } from 'react';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Layout, Radio, T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

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
      <Layout onBackClick={() => setShowResult(false)}>
        <T i18nKey="lab_test_text26" />
        <T i18nKey="lab_test_text27" />
        <T i18nKey="lab_test_text28" />
        <Button onClick={() => goTo(Routes.Home)} label={<T i18nKey="button_understand" />} />
      </Layout>
    );
  }

  return (
    <Layout>
      <T i18nKey="lab_test_text25" />
      <FieldSet>
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
      </FieldSet>
      <Button disabled={confirmed === undefined} onClick={next} label={<T i18nKey="button_next" />} />
    </Layout>
  );
};

export default Stumbler;
