import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { FieldSet } from '../../../../components/FieldSet';
import { Button } from '../../../../components';
import { Link } from '../../../../theme/typography';
import { PHONE_NUMBER } from '../../labTest.constants';
import * as Styled from '../../LabTest.styled';

const Step1 = ({ setPin, setStep, t }) => {
  const handleNextBtnClick = () => {
    setStep(2);
  };

  useEffect(() => {
    setPin(undefined);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Styled.Content>
        <Styled.SubTitle>{t('lab_test_text2')}</Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>{t('lab_test_text3')}</Styled.ListItem>
          <Styled.ListItem>{t('lab_test_text4')}</Styled.ListItem>
          <Styled.ListItem>
            <strong>{t('lab_test_text5_1')}</strong>{' '}
            <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
            <br />
            {t('lab_test_text5_2')}
          </Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <FieldSet>
        <Button onClick={handleNextBtnClick} label={t('button_next')} />
      </FieldSet>
    </>
  );
};

export default withTranslation()(Step1);
