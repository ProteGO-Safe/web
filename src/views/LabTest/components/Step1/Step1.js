import React, { useEffect } from 'react';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, T } from '../../../../components';
import { Link } from '../../../../theme/typography';
import { PHONE_NUMBER } from '../../labTest.constants';
import * as Styled from '../../LabTest.styled';

const Step1 = ({ setPin, setStep }) => {
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
        <Styled.SubTitle>
          <T i18nKey="lab_test_text2" />
        </Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>
            <T i18nKey="lab_test_text3" />
          </Styled.ListItem>
          <Styled.ListItem>
            <T i18nKey="lab_test_text4" />
          </Styled.ListItem>
          <Styled.ListItem>
            <strong>
              <T i18nKey="lab_test_text5_1" />
            </strong>{' '}
            <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
            <br />
            <T i18nKey="lab_test_text5_2" />
          </Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <FieldSet>
        <Button onClick={handleNextBtnClick} label={<T i18nKey="button_next" />} />
      </FieldSet>
    </>
  );
};

export default Step1;
